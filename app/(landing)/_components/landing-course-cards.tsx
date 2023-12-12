import { Category, Course } from '@prisma/client';
import React from 'react'
import LandingCourseCard from './course-card';


//Types
type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
  };
  
  interface CoursesListProps {
    items: CourseWithProgressWithCategory[];
  }


const LandingCourseCards = ({
    items
  }: CoursesListProps) => {
  return (
    <div>
        {items.map((item) => (
            <LandingCourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl!}
            chaptersLength={item.chapters.length}
            price={item.price!}
            category={item?.category?.name!}
            />
        ))}
    </div>
  )
}

export default LandingCourseCards