import {db} from "@/lib/db"
import { Categories } from "@/components/pdf/categories"
import { Companions } from "@/components/pdf/companions"
import { SearchInput } from "@/components/pdf/search-input"
import Dashboard from "@/components/pdfchat/dashboard";
import { getUserSubscriptionPlan } from "@/lib/stripe";
import MaxWidthWrapper from "@/components/pdfchat/max-width-wrapper";
import { CardContent } from "@mui/material";
import { Card, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import JournalBanner from "../_components/journal-banner";

interface JournalPageProps {
  searchParams: {
    companionCategoryId: string;
    name: string;
  };
};

const JournalPage = async ({
  searchParams
}: JournalPageProps) => {
  //My Favorites
  const data1 = await db.companion.findMany({
    /* where: {
      categoryId: searchParams.companionCategoryId,
      name: {
        search: searchParams.name,
      },
    },  */
    where:{
      companionCategoryId: searchParams.companionCategoryId,
      
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      _count: {
        select: {
          companionMessages: true,
          
        }
      }
    },
  });
  //Trending
  const data2 = await db.companion.findMany({
    /* where: {
      categoryId: searchParams.companionCategoryId,
      name: {
        search: searchParams.name,
      },
    }, */
    orderBy: {
      createdAt: "desc"
    },
    include: {
      _count: {
        select: {
          companionMessages: true,
        }
      }
    },
  });
  //Trending in Canada
  const data3 = await db.companion.findMany({
    /* where: {
      categoryId: searchParams.companionCategoryId,
      name: {
        search: searchParams.name,
      },
    }, */
    orderBy: {
      createdAt: "desc"
    },
    include: {
      _count: {
        select: {
          companionMessages: true,
          
        }
      }
    },
  });

  const companionCategories = await db.companionCategory.findMany();

  const subscriptionPlan = await getUserSubscriptionPlan()

  return (
    <div className="h-full py-4 space-y-2">
      {/* Ask questions about pdfs */}
      <Dashboard subscriptionPlan={subscriptionPlan} />

      {/* Characters */}
        {/* Trending */}

        {/* Sugar */}
      <MaxWidthWrapper>
      <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
        <h1 className='mb-3 font-bold text-5xl text-gray-900 dark:text-gray-300'>
          My Favorites
        </h1>
        {/* <Link href="/companion/new">
          <Button variant="premium">
            Create
          </Button>
        </Link> */}
      </div>
      </MaxWidthWrapper>
      <div className="mx-auto max-w-7xl px-5">
        {/* <SearchInput /> */}
        <Categories data={companionCategories} />
        <Companions data={data1} />
      </div>

      <JournalBanner/>



      {/* Fitness */}
      <MaxWidthWrapper>
      <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
        <h1 className='mb-3 font-bold text-5xl text-gray-900 dark:text-gray-300'>
          Trending in Fitness
        </h1>
        {/* <Link href="/companion/new">
          <Button variant="premium">
            Create
          </Button>
        </Link> */}
      </div>
      <Separator/>
      
      </MaxWidthWrapper>

      <div className="mx-auto max-w-7xl px-5">
        {/* <Categories data={companionCategories} /> */}
        <Companions data={data2} />
      </div>

        
        {/* Create */}
      <MaxWidthWrapper className="mt-10 mb-20">
        <Card className=" mx-auto max-w-6xl text-center mb-5 pt-10 px-10 pb-5">
          <CardContent>
            <h1 className="font-bold text-5xl mx-auto max-w-4xl text-center mb-10">
            Apply as a <span className="text-gray-500">Researcher</span> and let others chat with your <a href="/researchers" className=" text-teal-500 underline">Journals</a>
          </h1>
          <Link href="/companion/new">
              <Button variant="default">
                Create a Character
              </Button>
            </Link>
          </CardContent>
          <CardFooter className="items-center ">
           
          </CardFooter>
        </Card>
      </MaxWidthWrapper>
      

      {/* Diet */}
      <MaxWidthWrapper>
      <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
        <h1 className='mb-3 font-bold text-5xl text-gray-900 dark:text-gray-300'>
          Trending in Diet
        </h1>
        {/* <Link href="/companion/new">
          <Button variant="premium">
            Create
          </Button>
        </Link> */}
      </div>
      <Separator/>
      
      </MaxWidthWrapper>

      <div className="mx-auto max-w-7xl px-5">
        {/* <Categories data={companionCategories} /> */}
        <Companions data={data3} />
      </div>

    </div>
  )
}

export default JournalPage