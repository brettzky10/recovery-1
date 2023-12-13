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
    <div className="h-full border-r flex flex-col overflow-y-auto bg-gray-200 dark:bg-gray-700 shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
     {/*  <div>
      <NavigationAction />
      </div>
      <Separator
        className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
      />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]"
            }
          }}
        />
      </div> */}
    </div>
  )
}