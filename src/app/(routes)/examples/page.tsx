'use client';

import { NextPage } from 'next';
import { generateLogo } from '~/app/api/openAI/server';

const ExamplesPage: NextPage = () => {
  // Fetch examples from s3 bucket and display them here in a grid
  // with pagination and a filter input (filter color etc)

  return (
    <main>
      <h1>The</h1>
      <h1>Examples Page</h1>
      <button
        onClick={generateLogo}
        className={`rounded-md bg-violet-400 px-6 py-2 text-lg uppercase text-white shadow-lg duration-150 ${'hover:bg-violet-500'}`}
      >
        Generate
      </button>
    </main>
  );
};

export default ExamplesPage;
