import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='flex h-[calc(100vh-72px)] w-full items-center justify-center bg-slate-800 p-20 md:mx-auto'>
      <div>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='mx-auto my-6 h-16 w-16 rounded-full bg-red-600'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            id='SVGRepo_bgCarrier'
            stroke-width='0'
          ></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <path
              d='M16 8L8 16M8.00001 8L16 16'
              stroke='#1E293B'
              stroke-width='1.508'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>{' '}
          </g>
        </svg>
        <div className='text-center'>
          <h3 className='text-center text-base font-semibold text-gray-200 md:text-2xl'>
            Order Cancelled.
          </h3>
          <p className='mb-6 mt-2 text-gray-100'>
            Having trouble? Please contact us at our{' '}
            <Link
              href='/contact'
              className='underline'
            >
              support
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
