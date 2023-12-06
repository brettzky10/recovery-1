"use client"

import React from 'react'
import { ActionMovingCards } from './_components/action-moving-cards'


const LandingPage = () => {
  return (
    <div className="h-screen  flex flex-col antialiased  bg-slate-900 items-center justify-center relative overflow-hidden">
          <ActionMovingCards direction="left" speed="slow" />
          
    </div>  
  )
}

export default LandingPage