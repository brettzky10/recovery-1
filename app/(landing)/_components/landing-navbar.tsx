"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between mx-auto">
      <Link href="/" className="flex items-center">
        <div className="relative h-16 w-16 mr-2">
          <Image fill alt="Logo" src="/logo-white-2.png" />
        </div>
        <h1 className={cn("text-4xl font-bold text-white", font.className)}>
          Kine<span className="text-slate-400">teck</span>
        </h1>
      </Link>
      <div className="flex items-center just gap-x-2">
        <Link href="/pricing">
          <Button variant="outline" className="rounded-full transition transform active:scale-95 duration-200">
            Pricing
          </Button>
        </Link>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full transition transform active:scale-95 duration-200">
            {isSignedIn ? "Dashboard" : "Sign-up"}
          </Button>
        </Link>
      </div>
    </nav>
  )
}