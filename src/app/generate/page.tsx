import { NextPage } from 'next';
import GeneratorForm from '~/components/generate-components/GeneratorForm';

const GeneratePage: NextPage = () => {
  return (
    <main>
      {/* <Sidebar /> */}
      <GeneratorForm />
    </main>
  );
};

export default GeneratePage;
