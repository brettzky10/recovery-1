import React from 'react'
import { LandingHero } from './_components/landing-hero'
import Image from 'next/image'
import { LandingDiagnose } from './_components/landing-dianose'
import LandingCourses from './_components/landing-courses'
import { Category, Course } from '@prisma/client'
import { getLandingCourses } from '@/actions/get-landing-courses'
import { Separator } from '@/components/ui/separator'
/* import PromptCard from "./_components/landing-prompt-card";
import BestSellers from ./_components/landing-bestsellers"; */
import Future from "./_components/landing-future";
import Partners from "./_components/landing-partners";
/* import SellersBanner from "@/components/Shop/SellersBanner"; */
import Footer from "./_components/landing-footer";




const LandingPage = async () => {

  const trending = true;

/*   const {
    trendingCourses,
  } = await getLandingCourses(trending);
 */


    return ( 
      <div className="relative isolate">
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl mx-auto  dark:bg-gray-900 shadow-2xl" aria-hidden="true">
  
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          />
        </div>
          <div className="py-12 sm:py-20 lg:pb-40 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <LandingHero/>
              </div>
              {/* <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
                  <Image
                    unoptimized
                    src="/example-1.png"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
  
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          />
        </div>
        <div>
          <div className='absolute inset-x-0 top-z-10 transform-gpu overflow-hidden rounded-lg blur-xl'>
              <Image src="/bg-tilt-web.png" fill alt="background image" className='relative w-full'/>
          </div>
          <div>
            
          </div>
          <div className='absolute w-full'>
          <div className='h-[600px] transform-gpu overflow-hidden rounded-lg blur-xl'>
              <Image src="/bg-tilt-web.png" fill alt="background image" className='relative w-full'/>
          </div>
          </div>
        </div>
         <div className='flex flex-col'>

         
        <div className='absolute top-[800px]'>
           {/* items={[...items]} */}
        
          <LandingCourses />
            {/* <Partners />
            <Image
                src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
                width={120}
                height={120}
                alt=""
                className="absolute right-[-30px]"
              />
             <SellersBanner /> */}
            <br />
            <br />
            <Separator/>
            {/* <Divider className="bg-[#ffffff23]" /> */}
            <Footer />
          </div>
          </div>
    </div>
  )
}

export default LandingPage



        {/* <div className='w-full absolute'>
              <LandingDiagnose/>
              
          </div> */}
          