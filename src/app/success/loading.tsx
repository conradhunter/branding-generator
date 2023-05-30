import Image from 'next/image';
import React from 'react';
import loading2 from '../../../public/loading_undraw_2.svg';

const loading = () => {
  return (
    <section className='flex h-[calc(100vh-72px)] items-center justify-center bg-slate-800'>
      <h1 className='text-3xl text-white'>Loading...</h1>
      <div className='container flex items-center justify-center'>
        <Image
          src={loading2}
          alt='Loading...'
          priority={true}
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default loading;
