"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import line from "@/public/line.png";
import MarQuee from "react-fast-marquee";
import { Card } from "@/components/ui/card";
import { db } from "@/lib/db";
import LandingCourseCard from "./course-card";
import { Category, Course } from "@prisma/client";
import LandingCourseCards from "./landing-course-cards";
import Lottie from "lottie-react";
import gymAnimation from '@/public/animations/gym.json';
import bulkAnimation from '@/public/animations/bulk.json';
import robotAnimation from '@/public/animations/robot.json';
import checkAnimation from '@/public/animations/checklist.json';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const rowOneImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/five.png",
  },
];

/* const rowOneImages = [
  {
    url: "https://utfs.io/f/ff99a9ed-5706-4dd9-8c5a-726c9107ef8d-2c5x.jpg",
  },
  {
    url: "https://utfs.io/f/f6693072-7ccf-4ea0-8cad-2b82ee2f4004-2c5w.jpg",
  },
  {
    url: "https://utfs.io/f/7ea6e7b4-17cf-4f26-9a65-2d35297d55be-2c5y.jpg",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/five.png",
  },
]; */


const rowTwoImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/five.png",
  },
];


//Types
/*
type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
};

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

 {
  items
}: CoursesListProps */


const LandingCourses = () => {



  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full md:mt-96 md:min-h-screen flex items-center justify-center">
      <div>
        <Card className="rounded-xl bg-white/20 border-0 p-5 mx-20 w-[300px] md:w-[800px]">
        <h1 className="font-Monserrat text-4xl py-5 xl:text-5xl 2xl:text-6xl font-[900] gap-y-56 text-center xl:leading-[80px] 2xl:leading-[100px] text-white">
          Courses by <span className="text-pink-600">top</span> <br /> Physios 
          <span className="text-pink-600"> &</span> Kinesiologists
          <div className="flex flex-row items-center justify-center">
            <Lottie loop animationData={bulkAnimation} className="ml-3 w-16" />
            <Link href="/search" className="ml-5">
          <Button size="lg" className="w-60 mt-10 py-5 text-xl animate__animated animate__infinite animate__pulse rounded-full shadow-lg mx-auto bg-gradient-to-r from-purple-500 to-red-500 font-bold">
            
           Explore Now!
            
          </Button>
        </Link>
            <Lottie loop animationData={gymAnimation} className="ml-3 w-24" />
          </div>
          
          {" "}
        </h1>
        </Card>
        
        
        <div className="w-[95vw] mb-5 md:mb-20 relative overflow-hidden">
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <MarQuee>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
            <MarQuee>
            {rowTwoImages.map((i, index) => (
                  <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] -translate-x-72 m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
          </div>
          {/* <div className="mt-10 md:mt-[6.5rem]">
              <MarQuee>
                    <LandingCourseCards items={items}/>
                </MarQuee>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingCourses;


/* 
 */