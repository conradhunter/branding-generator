import Image from 'next/image';
import React from 'react';

const loading = () => {
  return (
    <section className='flex h-[calc(100vh-72px)] items-center justify-center bg-slate-800'>
      <h1 className='text-3xl text-white'>Loading...</h1>
      <div className='container flex items-center justify-center'>
        <Image
          src='./loading-undraw_2.svg'
          alt='Coming soon...'
          width={300}
          placeholder='blur'
          height={300}
        />
      </div>
    </section>
  );
};

export default loading;
