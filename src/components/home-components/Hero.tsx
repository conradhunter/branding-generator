'use client';

import Image from 'next/image';
import undrawAI from '../../../public/AI-undraw.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='m-20 mb-32 pb-6 sm:pb-8 lg:pb-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <section className='flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row'>
          <div className='flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-7/12 xl:py-24'>
            <h1 className='mb-8 text-3xl font-bold text-gray-100 sm:text-5xl md:mb-12 md:text-6xl'>
              Create AI generated branding to kickstart your business
            </h1>

            <p className='mb-8 leading-relaxed text-gray-100 md:mb-12 lg:w-4/5 xl:text-lg'>
              BrandingGeneratorAI: Create pro-grade branding in seconds with AI.
              Get 100 credits for $10. Limited time offer! Purchase now!
            </p>

            <div className='flex flex-col gap-5 sm:flex-row sm:justify-center lg:justify-start'>
              <button className='min-w-[120px] rounded-md bg-violet-400 px-3 py-2 text-sm font-medium uppercase text-white shadow-lg duration-150 hover:bg-violet-500'>
                <Link href='/generate/name'>Get Started</Link>
              </button>

              <button className='min-w-[120px] rounded-md border border-violet-400 px-3 py-2 text-sm font-medium uppercase text-white shadow-lg duration-150 hover:bg-violet-400'>
                <Link href='/examples'>Explore</Link>
              </button>
            </div>
          </div>
          <div className='h-48 overflow-hidden rounded-lg lg:h-auto xl:w-5/12'>
            <Image
              src={undrawAI}
              alt=''
              className='h-full w-full'
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
