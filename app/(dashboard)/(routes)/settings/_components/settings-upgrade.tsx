import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import React from 'react'

const SettingsUpgrade = () => {
  return (
    <div className='absolute'>
        {/* <Image src="/bg-tilt-web.png" alt="bg image"/> */}
        <div className='flex flex-col relative z-0'>
            <div className='grid grid-cols-2'>
                <Skeleton className='h-12 w-12 rounded-full'/>
                <Skeleton className='h-12 w-72 rounded-xl'/>
            </div>
            <div className='flex flex-row'>
                <Skeleton className='h-12 w-12 rounded-full'/>
                <Skeleton className='h-12 w-25 rounded-xl'/>
            </div>
            <div className='flex flex-row'>
                <Skeleton className='h-12 w-12 rounded-full'/>
                <Skeleton className='h-12 w-25 rounded-xl'/>
            </div>
        </div>
        <div className='relative rounded-xl bg-white/20'>

        </div>
    </div>
  )
}

export default SettingsUpgrade