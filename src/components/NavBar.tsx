'use client';

import { SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { useUser } from '@clerk/nextjs';

export const NavBar: FunctionComponent = () => {
  const user = useUser();

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
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
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li className='text-gray-100 hover:text-gray-300/75'>
              <Link href='/generate'>Generate</Link>
            </li>
            <li className='text-gray-100 hover:text-gray-300/75'>
              <Link href=''>Pricing</Link>
            </li>
            <li className='text-gray-100 hover:text-gray-300/75'>
              <Link href=''>Account</Link>
            </li>
            <li className='text-gray-100'>
              {user.isSignedIn && (
                <SignOutButton>
                  <button className='uppercase text-sm hover:bg-slate-600 py-2 px-3 bg-slate-700 rounded-md'>
                    Sign Out
                  </button>
                </SignOutButton>
              )}
              {user.isSignedIn == false && (
                <SignInButton>
                  <button className='uppercase text-sm hover:bg-slate-600 py-2 px-3 bg-slate-700 rounded-md'>
                    Sign In
                  </button>
                </SignInButton>
              )}
            </li>
            {/* {user.isSignedIn && <UserButton />} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
