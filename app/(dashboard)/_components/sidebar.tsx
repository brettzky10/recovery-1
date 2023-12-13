import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
/* import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/forum/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"; */

/* import { NavigationAction } from "./navigation-action";
import { NavigationItem } from "./navigation-item"; */

export const Sidebar = async () => {

  /* const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  }); */




  return (
    <div className="border-r md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0 bg-gray-200 dark:bg-gray-700 shadow-sm">
        
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}