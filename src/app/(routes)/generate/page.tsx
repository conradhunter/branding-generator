import { NextPage } from 'next';
import Link from 'next/link';
import DisplayCredits from '~/components/DisplayCredits';
import GeneratorForm from '~/components/generate-components/GeneratorForm';
import PreviewGeneratedBranding from '~/components/generate-components/PreviewGeneratedBranding';

const GeneratePage: NextPage = () => {
  return (
    <main className='mx-auto w-[70%] max-w-4xl py-20'>
      {/* <Sidebar /> */}
      <section className='mb-20'>
        <h1 className='mb-10 text-4xl font-medium text-white'>
          Lets generate your logo.
        </h1>

        <p className='mb-6 leading-relaxed text-gray-100 md:mb-9 lg:w-4/5 xl:text-lg'>
          Logo generation costs 5 credits per logo generation.{' '}
          <Link className='underline' href=''>
            Purchase credits here.
          </Link>
        </p>

        <p className='mb-6 leading-relaxed text-gray-100 md:mb-9 lg:w-4/5 xl:text-lg'>
          Although the AI software that we employ for logo creation is a
          powerful tool, it is still in its early stages of development and has
          certain limitations. While the software is designed to generate logos
          that align with your expectations, it&apos;s worth noting that it may
          occasionally generate designs that are not in line with your initial
          vision. However, these AI-generated logos can provide you with a good
          starting point for further refinement.
        </p>

        <DisplayCredits />

        <GeneratorForm />
      </section>
      <PreviewGeneratedBranding />
    </main>
  );
};

export default GeneratePage;
