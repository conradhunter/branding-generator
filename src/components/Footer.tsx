import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import logo from '../../public/logo.png';

export const Footer: FunctionComponent = () => {
  return (
    <footer className='m-4 rounded-lg bg-white shadow dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link href='/' className='mb-4 flex items-center sm:mb-0'>
            <Image
              src={logo}
              className='mr-3 h-8 w-8 rounded-lg'
              alt='Flowbite Logo'
            />
            <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
              BrandingGeneratorAI
            </span>
          </Link>
          <ul className='mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0'>
            <li>
              <Link href='/generate' className='mr-4 hover:underline md:mr-6 '>
                Generate
              </Link>
            </li>
            <li>
              <Link href='' className='mr-4 hover:underline md:mr-6 '>
                Examples
              </Link>
            </li>
            <li>
              <Link href='' className='mr-4 hover:underline md:mr-6 '>
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
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          © 2023 BrandingGeneratorAI™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
