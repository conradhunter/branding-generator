'use client';

import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { useUser } from '@clerk/nextjs';
import ButtonSignIn from './buttons/ButtonSignIn';
import ButtonSignOut from './buttons/ButtonSignOut';

export const NavBar: FunctionComponent = () => {
  const user = useUser();
  // TODO: Hold user/useUser() in a client component so the nav can be a server component

  return (
    <nav className='bg-white dark:bg-gray-900 border-b-2 border-gray-800'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8 mr-3'
            alt='Flowbite Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            BrandingGeneratorAI
          </span>
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className='font-medium flex items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li className='text-gray-100 hover:text-gray-300/75'>
              <Link href='/generate'>Generate</Link>
            </li>
            <li className='text-gray-100 hover:text-gray-300/75'>
              <Link href='/examples'>Examples</Link>
            </li>
            <li className='text-gray-100 hover:text-gray-300/75'>
              <Link href='/pricing'>Pricing</Link>
            </li>
            <li className='text-gray-100 hover:text-gray-300/75'>
              <Link href='/account'>Account</Link>
            </li>
            <li className='text-gray-100'>
              {user.isSignedIn && <ButtonSignOut />}
              {user.isSignedIn == false && <ButtonSignIn />}
            </li>
            {/* {user.isSignedIn && <UserButton />} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
