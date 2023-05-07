'use client';

import { useEffect, useState } from 'react';
import ImageSkeleton from '../skeleton-placeholders/ImageSkeleton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { imageUrl } from '~/app/api/generate';
import Image from 'next/image';

const PreviewGeneratedLogo = () => {
  const [loading, setLoading] = useState<boolean>(true);

  function handleDisplayPreview() {
    if (imageUrl) {
      setLoading(false);
      return (
        <Image src={imageUrl} alt='Generated logo' width={500} height={500} />
      );
    } else {
      return <ImageSkeleton />;
    }
  }

  return (
    <section>
      <h1 className='mb-10 text-4xl font-medium text-white'>
        Preview generated logo.
      </h1>

      {loading ? (
        <p className='mb-6 leading-relaxed text-gray-100 md:mb-9 lg:w-4/5 xl:text-lg'>
          After generating a logo, the preview will be displayed below for easy
          download.
        </p>
      ) : (
        <p className='mb-6 leading-relaxed text-gray-100 md:mb-9 lg:w-4/5 xl:text-lg'>
          Your logo is ready for download. Click the download button located at
          the top right of the logo. If you are unsatisfied with the logo, you
          can refine your prompts and try generating again.
        </p>
      )}

      <div className='flex w-full items-center justify-center rounded-2xl bg-gray-700 py-10 shadow-xl'>
        <div className='relative'>
          {!loading && (
            <button className='absolute right-4 top-4 z-10 cursor-pointer text-slate-300 duration-200 hover:text-slate-100'>
              <FileDownloadIcon />
            </button>
          )}
          <ImageSkeleton />
        </div>
      </div>
    </section>
  );
};

export default PreviewGeneratedLogo;