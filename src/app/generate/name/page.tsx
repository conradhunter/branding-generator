import { NextPage } from 'next';
import React from 'react';
import BuyCreditsLink from '~/components/buttons/BuyCreditsLink';
import DisplayCredits from '~/components/generate-components/DisplayCredits';
import NameGenerateForm from '~/components/generate-components/forms/NameGenerateForm';

export const metadata = {
  title: 'Generate Name',
};

const NameGeneratorPage: NextPage = () => {
  return (
    <main className='mx-auto w-[70%] max-w-4xl py-20'>
      <h1 className='mb-10 text-4xl font-medium text-white'>
        Lets generate your businesses name.
      </h1>

      <p className='mb-6 leading-relaxed text-gray-100 md:mb-9 lg:w-4/5 xl:text-lg'>
        Name generation costs 5 credits per name suggestion. <BuyCreditsLink />
      </p>

      <DisplayCredits />

      <NameGenerateForm />
    </main>
  );
};

export default NameGeneratorPage;
