import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import MaxWidthWrapper from "@/components/pdfchat/max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return ( 
    <div className="p-6">
      <MaxWidthWrapper>
      <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
        <h1 className='mb-3 font-bold text-5xl text-gray-900 dark:text-gray-300'>
          My Courses
        </h1>
        {/* <Link href="/companion/new">
          <Button variant="premium">
            Create
          </Button>
        </Link> */}
      </div>
      <Separator/>
      <DataTable columns={columns} data={courses} />
      </MaxWidthWrapper>
      <div className="w-full h-[200px] overflow-hidden">
      <Image src="/bg-tilt-web.png" alt="bg separator" sizes="100vw" width={200} height={200}/>

      </div>
      
    </div>
   );
}
 
export default CoursesPage;