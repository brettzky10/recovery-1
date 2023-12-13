import {db} from "@/lib/db"
import { Categories } from "@/components/pdf/categories"
import { Companions } from "@/components/pdf/companions"
import { SearchInput } from "@/components/pdf/search-input"

interface JournalPageProps {
  searchParams: {
    companionCategoryId: string;
    name: string;
  };
};

const JournalPage = async ({
  searchParams
}: JournalPageProps) => {
  const data = await db.companion.findMany({
    /* where: {
      categoryId: searchParams.categoryId,
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

  return (
    <div className="h-full p-4 space-y-2">
      {/* <SearchInput /> */}
      <Categories data={companionCategories} />
      <Companions data={data} />
    </div>
  )
}

export default JournalPage