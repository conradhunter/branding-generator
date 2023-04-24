import DisplayCredits from '../DisplayCredits';
import GenerateButton from '../buttons/GenerateButton';
import PreviewGeneratedBranding from './PreviewGeneratedBranding';
import ResolutionSelect from './generate-form-inputs/DepthSelect';
import NameInput from './generate-form-inputs/NameInput';
import PrimaryColor from './generate-form-inputs/PrimaryColor';
import PromptsInput from './generate-form-inputs/PromptsInput';
import SecondaryColor from './generate-form-inputs/SecondaryColor';
import StyleSelect from './generate-form-inputs/StyleSelect';
import Link from 'next/link';

const GeneratorForm = () => {
  // TODO: add a small box to the right of box color inputs which show the user the color
  // TODO chosen rather than chaging background color of the input

  return (
    <>
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

        <DisplayCredits />

        <form action='' className=''>
          <div className='mb-6 grid gap-6 md:grid-cols-2'>
            <NameInput />
            <PromptsInput />
            <StyleSelect />
            <ResolutionSelect />
            <PrimaryColor />
            <SecondaryColor />
          </div>
          <div className='flex w-full items-center justify-center'>
            <GenerateButton />
          </div>
        </form>
      </section>

      <PreviewGeneratedBranding />
    </>
  );
};

export default GeneratorForm;
