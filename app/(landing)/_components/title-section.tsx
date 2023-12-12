import { Badge } from '@/components/ui/badge';
import React from 'react';

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill,
}) => {
  return (
    <React.Fragment>
      <section
        className="flex
        flex-col
        gap-4
        justify-center
        items-start
        md:items-center
      "
      >
        <article
          className="rounded-full
          p-[1px]
          text-sm
          dark:bg-gradient-to-r
          dark:from-brand-primaryBlue
          dark:to-brand-primaryPurple
        "
        >
          <Badge className='bg-white text-black'>
            {pill}
          </Badge>
{/*           <div
            className="rounded-full 
            px-3
            py-1
            dark:bg-black"
          >
            
          </div> */}
        </article>
        {subheading ? (
          <>
          <h2 className="text-3xl text-white font-extrabold max-w-3xl py-5 lg:text-5xl mx-auto pb-5">{title}</h2>
            {/* <h2
              className="text-left
              text-3xl
              text-slate-100
              sm:text-5xl
              sm:max-w-[750px]
              md:text-center
              font-semibold
            "
            >
              {title}
            </h2> */}
            <p
              className="text-slate-100 dark:text-washed-purple-700 sm:max-w-[450px]
              md:text-center
            "
            >
              {subheading}
            </p>
          </>
        ) : (
          <h1
            className=" text-left 
            text-4xl
            sm:text-6xl
            sm:max-w-[850px]
            md:text-center
            font-semibold
          "
          >
            {title}
          </h1>
        )}
      </section>
    </React.Fragment>
  );
};

export default TitleSection;