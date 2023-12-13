import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import {db} from "@/lib/db";
import { checkSubscription } from "@/lib/subscription";

import { CompanionForm } from "./_components/companion-form";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
};

const CompanionIdPage = async ({
  params
}: CompanionIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  /* const validSubscription = await checkSubscription();

  if (!validSubscription) {
    return redirect("/dashboard");
  } */

  const companion = await db.companion.findUnique({
    where: {
      id: params.companionId,
      userId,
    }
  });

  const companionCategories = await db.companionCategory.findMany();

  return ( 
    <CompanionForm initialData={companion} companionCategories={companionCategories} />
  );
}
 
export default CompanionIdPage;