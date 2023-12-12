import { Category, Course } from "@prisma/client";

//import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";

type LandingCourseWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  trending: Boolean;
};

type GetLandingCourses = {
  trending: boolean;
  title?: string;
  categoryId?: string;
};

export const getLandingCourses = async ({
  trending,
  title,
  categoryId
}: GetLandingCourses): Promise<LandingCourseWithCategory[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
        trending: true,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          }
        },
        /**
       

        purchases: {
          where: {
            courseId,
          }
        } 
         */
      },
      orderBy: {
        createdAt: "desc",
      }
    });

    const landingCourses: LandingCourseWithCategory[] = await Promise.all(
      courses.map(async course => {
        if (course.trending === true) {
          return {
            ...course,
          }
        }

    

        return {
          ...course,
        };
      })
    );


    const trendingCourses = landingCourses.filter((course) => course.trending === true);


    return trendingCourses;
  } catch (error) {
    console.log("[GET_LANDING_COURSES]", error);
    return [];
  }
}