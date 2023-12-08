"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Lottie from 'lottie-react';

import fireAnimation from '@/public/animations/fire.json';
import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>A <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> 30 second </span>exam could help you fix your broken...</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-5">
          <TypewriterComponent
            options={{
              strings: [
                "Knee.",
                "Shoulder.",
                "Ankle.",
                "Wrist."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        We offer courses from top kinesiologists and fitness nerds that will not only help you recover, but help you fix the root cause. <span className="text-pink-300">Let us show you how</span>
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/start"}>
          <Button size="lg" className="w-60 mt-10 py-5 text-xl animate__animated animate__infinite animate__pulse rounded-full shadow-lg mx-auto bg-gradient-to-r from-purple-500 to-red-500 font-bold">
            {isSignedIn ? 
            "Dashboard"
            : 
            <div className="flex flex-row">
            Try Now
            <Lottie loop animationData={fireAnimation} className="ml-3 w-6" />
           </div>}
            
          </Button>
        </Link>
       {/*  <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold transition transform active:scale-95 duration-200">
            Start Creating For Free
          </Button>
        </Link> */}
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        {isSignedIn ? "No credit card required." : " "}
      </div>
    </div>
  );
};