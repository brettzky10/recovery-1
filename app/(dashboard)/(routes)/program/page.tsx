import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { CheckCircle, Clock, HeartPulse, Scale } from "lucide-react";

import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import { ProgramInfoCard } from "./_components/program-info-card";
import ProgramGeneral from "./_components/program-general";
import ChartComponent from "../dashboard/_components/bar-chart";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    completedCourses,
    coursesInProgress
  } = await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       <ProgramInfoCard
          icon={Scale}
          label="Weight Loss"
          numberOfItems={coursesInProgress.length}
       />
       <ProgramInfoCard
          icon={HeartPulse}
          label="BMI"
          numberOfItems={completedCourses.length}
          variant="success"
       />
      </div>
      {/* <ChartComponent/> */}
      <ProgramGeneral/>
    </div>
  )
}
