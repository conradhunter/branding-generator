'use client';

import { NextPage } from 'next';
import { generateLogo } from '~/app/api/openAI/server';

const ExamplesPage: NextPage = () => {
  const images = [
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
    'https://images.clerk.dev/uploaded/img_2OrJXHrjQjZoUA1eeuhGzfGkeUh.png?width=160',
  ];

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
