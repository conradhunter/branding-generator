'use client';

import BackArrow from '../icons/BackArrow';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='absolute left-10 top-10 flex items-center rounded-md bg-violet-400 px-3 py-2 text-sm text-white shadow-lg duration-150 hover:bg-violet-500'
    >
      <BackArrow /> Go Back
    </button>
  );
};

export default BackButton;
