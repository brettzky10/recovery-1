import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/forum/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";


import { NavigationAction } from "./navigation-action";
import { NavigationItem } from "./navigation-item";
import { NavigationCourses } from "./navigation-courses";
import { SidebarRoutes } from "@/app/(dashboard)/_components/sidebar-routes";
import { checkSubscription } from "@/lib/subscription";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MessageSquare } from "lucide-react";
import { ActionTooltip } from "@/components/forum/action-tooltip";

export const NavigationSidebar = async () => {
  const profile = await currentProfile();

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
  });

  const isPro = await checkSubscription();

  return (
    <div
      className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3"
    >
      
      <SidebarRoutes isPro={isPro}/>
      <Separator
        className="h-[2px] bg-zinc-700 dark:bg-zinc-300 rounded-md w-10 mx-auto"
      />
      <Popover>
        <PopoverTrigger>
        <ActionTooltip side="right"
      align="center"
      label="Chat">
          <MessageSquare className="h-6 w-6 rounded-lg hover:bg-primary/10 text-slate-500 dark:text-gray-200"/>
          </ActionTooltip>
        </PopoverTrigger>
        <PopoverContent side="right" className="text-gray-500 dark:text-gray-600 items center">
        
        Chat Servers
        <div className="my-2">
        <NavigationAction />
        </div>
        {/* <NavigationCourses /> */}
{/*         <Separator
          className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
        /> */}
        <ScrollArea className="flex-1 items-center">
          {servers.map((server) => (
            <div key={server.id} className="mb-2">
              <NavigationItem
                id={server.id}
                name={server.name}
                imageUrl={server.imageUrl}
              />
            </div>
          ))}
        </ScrollArea>
        </PopoverContent>
      </Popover>
      
      <Separator
        className="h-[2px] bg-zinc-700 dark:bg-zinc-300 rounded-md w-10 mx-auto"
      />
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
      </div>
    </div>
  )
}