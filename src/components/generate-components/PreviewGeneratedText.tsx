'use client';

import { useState } from 'react';
import CopyToClipboard from '../icons/CopyToClipboard';
import TextSkeleton from '../skeleton-placeholders/TextSkeleton';

type PreviewGeneratedTextProps = {
  name: string;
  generated: string[];
};

const PreviewGeneratedText = ({
  name,
  generated,
}: PreviewGeneratedTextProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  if (generated) setLoading(false);

  return (
    <section>
      <h1 className='mb-10 text-4xl font-medium text-white'>
        Preview generated {name}.
      </h1>
      {loading ? (
        <p className='mb-6 leading-relaxed text-gray-100 md:mb-9 lg:w-4/5 xl:text-lg'>
          After generating a {name}, the preview will be displayed below for
          easy review.
        </p>
      ) : (
        <p className='mb-6 leading-relaxed text-gray-100 md:mb-9 lg:w-4/5 xl:text-lg'>
          Your {name} is ready for review. Click the copy to clipboard button
          located at the top right of the preview. If you are unsatisfied with
          the {name}, you can refine your prompts and try generating again.
        </p>
      )}
      <div className='flex w-full items-center justify-center rounded-2xl bg-gray-700 py-10 shadow-xl'>
        <div className='relative'>
          {!loading && (
            <button className='absolute right-4 top-4 z-10 cursor-pointer text-slate-300 duration-200 hover:text-slate-100'>
              <CopyToClipboard />
            </button>
          )}
          {generated ? (
            <pre>{JSON.stringify(generated, null, 2)}</pre>
          ) : (
            <TextSkeleton />
          )}
        </div>
      </div>
    </section>
  );
};

export default PreviewGeneratedText;
