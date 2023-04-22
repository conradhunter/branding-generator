'use client';

import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { useUser } from '@clerk/nextjs';
import ButtonSignIn from './buttons/ButtonSignIn';
import ButtonSignOut from './buttons/ButtonSignOut';
import Image from 'next/image';
import logo from '../../public/logo.png';
import BuyCreditsButton from './buttons/BuyCreditsButton';

export const NavBar: FunctionComponent = () => {
  const user = useUser();
  // TODO: Hold user/useUser() in a client component so the nav can be a server component
  // TODO: Loading state for auth buttons

  return (
    <nav className='border-b-2 border-gray-800 bg-white dark:bg-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-8 py-4'>
        <Link href='/' className='flex items-center'>
          <Image
            src={logo}
            className='mr-3 h-10 w-10 rounded-lg'
            alt='Flowbite Logo'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            BrandingGeneratorAI
          </span>
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='h-6 w-6'
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
          <ul className='mt-4 flex items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
            <li className='text-gray-100 hover:text-gray-300/75'>
              <Link href='/generate'>Generate</Link>
            </li>
            <li className='text-gray-100 hover:text-gray-300/75'>
              <Link href='/examples'>Examples</Link>
            </li>
            {user.isSignedIn && (
              <li className='text-gray-100 hover:text-gray-300/75'>
                <Link href='/account'>Account</Link>
              </li>
            )}
            {user.isSignedIn && <BuyCreditsButton />}
            {user.isLoaded ? (
              <li className='text-gray-100'>
                {user.isSignedIn && <ButtonSignOut />}
                {user.isSignedIn == false && <ButtonSignIn />}
              </li>
            ) : (
              <li className='text-gray-100'>
                <button className='flex w-28 items-center justify-center rounded-md bg-violet-400 px-3 py-2 text-sm uppercase text-white shadow-lg duration-150 hover:bg-violet-500'>
                  <div role='status'>
                    <svg
                      aria-hidden='true'
                      className='mr-2 h-6 w-6 animate-spin fill-violet-400 text-gray-200 dark:text-gray-600'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='currentColor'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentFill'
                      />
                    </svg>
                    <span className='sr-only'>Loading...</span>
                  </div>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
