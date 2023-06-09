import { NextPage } from 'next';
import React from 'react';
import BuyCreditsLink from '~/components/buttons/BuyCreditsLink';
import DisplayCredits from '~/components/generate-components/DisplayCredits';
import SloganGeneratorForm from '~/components/generate-components/forms/SloganGeneratorForm';

export const metadata = {
  title: 'Generate Slogan',
};

const SloganGeneratorPage: NextPage = () => {
  return (
    <main className='mx-auto w-[70%] max-w-4xl py-20'>
      <section>
        <h1 className='mb-10 text-4xl font-medium text-white'>
          Lets generate your businesses slogan.
        </h1>

        <p className='mb-6 leading-relaxed text-gray-100 md:mb-9 lg:w-4/5 xl:text-lg'>
          Slogan generation costs 5 credits. <BuyCreditsLink />
        </p>

        <DisplayCredits />

        <SloganGeneratorForm />
      </section>
    </main>
  );
};

export default SloganGeneratorPage;
