import Image from 'next/image'
import React from 'react'

interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    chaptersLength: number;
    price: number;
    category: string;
  };
  
  export const LandingCourseCard = ({
    id,
    title,
    imageUrl,
    chaptersLength,
    price,
    category
  }: CourseCardProps) => {



    return (
    <div className='absolute z-0'>
        <Image
            fill
            className="relative object-cover z-10"
            alt={title}
            src={imageUrl}
        />
        
        <div className='rounded-md p-2 m-2 '>
            <h3 className='text-gray-600 font-serif text-sm overflow-ellipsis'>{title}</h3>
        </div>
  
</div>
  )
}

export default LandingCourseCard