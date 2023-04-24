import { NextPage } from 'next';
import GeneratorForm from '~/components/generate-components/GeneratorForm';

const GeneratePage: NextPage = () => {
  return (
    <main className='mx-auto w-[70%] max-w-4xl py-20'>
      {/* <Sidebar /> */}
      <GeneratorForm />
    </main>
  );
};

export default GeneratePage;
