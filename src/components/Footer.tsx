import Link from 'next/link';
import React, { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
  return (
    <footer className='bg-white rounded-lg shadow m-4 dark:bg-gray-700'>
      <div className='w-full p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <a href='' className='hover:underline'>
            BrandingGeneratorAI™
          </a>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link href='/generate' className='mr-4 hover:underline md:mr-6 '>
              Generate
            </Link>
          </li>
          <li>
            <Link href='' className='mr-4 hover:underline md:mr-6'>
              Pricing
            </Link>
          </li>
          <li>
            <Link href='' className='mr-4 hover:underline md:mr-6'>
              Account
            </Link>
          </li>
          <li>
            <Link href='' className='hover:underline'>
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
