'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const SuccessButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/generate/name')}
      className='text-md rounded-md bg-violet-400 px-3 py-2 uppercase text-white shadow-lg duration-150 hover:bg-violet-500'
    >
      Generate
    </button>
  );
};

export default SuccessButton;
