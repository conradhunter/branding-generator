import GenerateButton from '../buttons/GenerateButton';
import ResolutionSelect from './generate-form-inputs/DepthSelect';
import NameInput from './generate-form-inputs/NameInput';
import PrimaryColor from './generate-form-inputs/PrimaryColor';
import PromptsInput from './generate-form-inputs/PromptsInput';
import SecondaryColor from './generate-form-inputs/SecondaryColor';
import StyleSelect from './generate-form-inputs/StyleSelect';

const GeneratorForm = () => {
  // TODO: add a small box to the right of box color inputs which show the user the color
  // TODO chosen rather than chaging background color of the input

  // ! Add resolution input component

  return (
    <main className='mx-auto w-[70%] max-w-4xl py-20'>
      <section className='mb-20 w-full'>
        <h1 className='mb-10 text-4xl font-medium text-white'>
          Lets generate your logo.
        </h1>
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

      <section>
        <h1 className='mb-10 text-4xl font-medium text-white'>
          Preview generated logo.
        </h1>
      </section>
      {/* // TODO: Below form add a section with a preview of the logo generated skeleton loading */}
    </main>
  );
};

export default GeneratorForm;
