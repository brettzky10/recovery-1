"use client";

import { BarChart, Compass, Layout, List, Calendar } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./navigation-sidebar-item";
import { Separator } from "@/components/ui/separator";

const guestRoutes = [
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];
const accountRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: `/dashboard`,
  },
   {
    icon: List,
    label: "Overview",
    href: `/program`,
  }, 
  {
    icon: Calendar,
    label: "Booking",
    href: "/booking",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
]

export const NavigationCourses = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");
  const isJournalPage = pathname?.includes("/journals");

  const routes = isTeacherPage || isJournalPage ? teacherRoutes : guestRoutes;
  const route2 = isTeacherPage || isJournalPage ? guestRoutes : accountRoutes;

  return (
    <div className="flex flex-col w-full">
    {routes.map((route) => (
      <SidebarItem
        key={route.href}
        icon={route.icon}
        label={route.label}
        href={route.href}
      />
    ))}
    <Separator className="my-4"/>
    {route2.map((route2) => (
      <SidebarItem
        key={route2.href}
        icon={route2.icon}
        label={route2.label}
        href={route2.href}
      />
    ))}
  </div>
  )
}