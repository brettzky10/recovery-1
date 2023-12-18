import { auth } from "@clerk/nextjs";
import { db } from '@/lib/db'
import { createUploadthing, type FileRouter } from "uploadthing/next";

import { isTeacher } from "@/lib/teacher";
import { getUserSubscriptionPlan } from "@/lib/stripe";
import { currentUser, redirectToSignIn } from "@clerk/nextjs/server";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { getPineconeClient } from '@/lib/pinecone'
import { PLANS } from '@/lib/config/stripe'
import { Pinecone } from "@pinecone-database/pinecone";
 
const f = createUploadthing();
 
const handleAuth = () => {
  const { userId } = auth();
  const isAuthorized = isTeacher(userId);

  if (!userId || !isAuthorized) throw new Error("Unauthorized");
  return { userId };
}

const middleware = async () => {
  //const user = await currentUser();
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  } 

  if (!userId) throw new Error('Unauthorized')

  const subscriptionPlan = await getUserSubscriptionPlan()

  return { subscriptionPlan, userId: userId }
}

const onUploadComplete = async ({
  metadata,
  file,
}: {
  metadata: Awaited<ReturnType<typeof middleware>>
  file: {
    key: string
    name: string
    url: string
  }
}) => {
  const isFileExist = await db.file.findFirst({
    where: {
      key: file.key,
    },
  })

  if (isFileExist) return

  const createdFile = await db.file.create({
    data: {
      key: file.key,
      name: file.name,
      userId: metadata.userId,
      //the file.url throws timeout sometimes so we use direct url
      url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
      uploadStatus: 'PROCESSING',
    },
  })

  try {
    const response = await fetch(
      `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`
    )

    const blob = await response.blob()

    const loader = new PDFLoader(blob)

    const pageLevelDocs = await loader.load()

    const pagesAmt = pageLevelDocs.length

    const { subscriptionPlan } = metadata
    const { isSubscribed } = subscriptionPlan

    const isProExceeded =
      pagesAmt >
      PLANS.find((plan) => plan.name === 'Pro')!.pagesPerPdf
    const isFreeExceeded =
      pagesAmt >
      PLANS.find((plan) => plan.name === 'Free')!
        .pagesPerPdf

    if (
      (isSubscribed && isProExceeded) ||
      (!isSubscribed && isFreeExceeded)
    ) {
      await db.file.update({
        data: {
          uploadStatus: 'FAILED',
        },
        where: {
          id: createdFile.id,
        },
      })
    }

    // Vectorize and Index entire document
    //Old Pinecone <v1.0
      //const pinecone = await getPineconeClient()
      //const pineconeIndex = pinecone.Index('character')
    //New Pinecone
    const pinecone = new Pinecone();
    const pineconeIndex = pinecone.index(
    process.env.PINECONE_INDEX! || ""
    );

    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    })

    await PineconeStore.fromDocuments(
      pageLevelDocs,
      embeddings,
      {
        pineconeIndex,
        namespace: createdFile.id,
      }
    )

    await db.file.update({
      data: {
        uploadStatus: 'SUCCESS',
      },
      where: {
        id: createdFile.id,
      },
    })
  } catch (err) {
    await db.file.update({
      data: {
        uploadStatus: 'FAILED',
      },
      where: {
        id: createdFile.id,
      },
    })
  }
}


export const ourFileRouter = {
  courseImage: f(["image", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
    messageFile: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
   serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  freePlanUploader: f({ pdf: { maxFileSize: '4MB' } })
    //.middleware(middleware)
    .middleware(middleware)
    .onUploadComplete(onUploadComplete),
  proPlanUploader: f({ pdf: { maxFileSize: '16MB' } })
    //.middleware(middleware)
    .middleware(middleware)
    .onUploadComplete(onUploadComplete),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;