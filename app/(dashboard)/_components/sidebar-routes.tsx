"use client";

import { BarChart, Compass, Layout, List, Calendar, MessageSquare, FileText, PlusCircle, Plus, Settings, File } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { SidebarItem } from "./sidebar-item";
import { Separator } from "@/components/ui/separator";
import { ChatServers } from "./chat-servers";
import { useProModal } from "@/hooks/use-pro-modal";
import { cn } from "@/lib/utils";
import { NavbarRoutes } from "@/components/navbar-routes";

const guestRoutes = [
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
    pro: false,
  },
];
const accountRoutes = [
  {
    icon: Layout,
    label: "Courses",
    href: "/dashboard",
    pro: false,
    
  },
   {
    icon: List,
    label: "Overview",
    href: `/program`,
    pro: false,
  },
  {
    icon: Settings,
    label: "Settings",
    href: `/settings`,
    pro: false,
  },
];
/* const companionRoutes = [
  {
    icon: File,
    label: "Journals",
    href: "/journals",
    pro: false,
    
  },
   {
    icon: List,
    label: "New Journal Chat",
    href: `/companion/new`,
    pro: false,
  },
]; */


const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
    pro: false,
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
    pro: false,
  },
  {
    icon: FileText,
    label: "Journals",
    href: "/journals",
    pro: false,
  },
  {
    icon: Plus,
    label: "Create Journal",
    href: "/companion/new",
    pro: false, //true
  },
  {
    icon: Settings,
    href: '/settings',
    label: "Settings",
    pro: false,
  },
]

interface SidebarRoutesProps {
  isPro: boolean;
}

export const SidebarRoutes = ({
  isPro
}: SidebarRoutesProps) => {
  const proModal = useProModal();
  const router = useRouter();
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  const route2 = isTeacherPage ? guestRoutes : accountRoutes;


  const onNavigate = (url: string, pro: boolean) => {
    if (pro && !isPro) {
      return proModal.onOpen();
    }

    return router.push(url);
  }

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <div
        onClick={() => onNavigate(route.href, route.pro)}
        key={route.href}
        className={cn(
          "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
          pathname === route.href && "bg-primary/10 text-primary",
        )}
      >
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}

          
        />
        </div>
      ))}
      <Separator className="my-4"/>
      {route2.map((route2) => (
        <div
        onClick={() => onNavigate(route2.href, route2.pro)}
        key={route2.href}
        className={cn(
          "text-muted-foreground text-xs group flex p-1 mx-1 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
          pathname === route2.href && "bg-primary/10 text-primary",
        )}
      >
        <SidebarItem
          key={route2.href}
          icon={route2.icon}
          label={route2.label}
          href={route2.href}

        />
        </div>
      ))}
      <Separator className="my-4"/>
      <NavbarRoutes />
      {/* <ChatServers/> */}
    </div>
  )
}