"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Lottie from 'lottie-react';

import fireAnimation from '@/public/animations/fire.json';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const LandingDiagnose = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="absolute w-full">
      
      
      
    <div className="relative text-white font-bold pb-28 text-center z-10 -top-96">
    <div className="-top-80 pb-48 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      </div>
      <Card className="mx-auto max-w-6xl border-0 bg-black/40 p-10">
        <CardContent>

      <div className="mx-auto max-w-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-5 font-extrabold">
        <h1 className="text-white">Talk to our<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><span className="text-purple-500"> Ai</span>ssistants </span>to determine what local type of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">people specialists </span>you&apos;ll need.</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-5">
          Let&apos;s chat!
        </div>
      </div>
      <div className="text-xs md:text-sm font-light text-zinc-400">
        All data is deleted after. To save an Aissistant that knows you, head to <span className="text-purple-400">dashboard</span>
      </div>
      
      </CardContent>
      <CardContent className="w-full flex-1">
        <CardContent className="flex-1 justify-start">
          
          </CardContent>
        <Card className="bg-slate-200 rounded-xl z-40 mx-auto max-w-6xl h-[200px]">
          <CardContent className="pt-5">
          <TypewriterComponent
            options={{
              strings: [
                "I have a pain in my wrist.",
                "Does my tongue position matter?",
                "Is my knee pain caused by my ankles and hips?",
                "I need to correct my sitting habits."
              ],
              autoStart: true,
              loop: true,
            }}
          />
            <div className="flex flex-row mt-5 max-w-4xl justify-center">
            <Input contentEditable={false} placeholder="Type your prompt here..." />
            <Button className="mx-5">
              Ask
            </Button>
            </div>
            
            
          </CardContent>
          
        </Card>
      </CardContent>
      </Card>
    </div>
    <div className="mx-auto max-w-5xl items-center justify-center h-[400px] w-full relative text-center">
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
    </div>
    
  );
};