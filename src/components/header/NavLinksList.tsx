'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import ButtonSignIn from '../buttons/ButtonSignIn';
import ButtonLoading from '../buttons/ButtonLoading';
import BuyCreditsButton from '../buttons/BuyCreditsButton';
import Link from 'next/link';
import CaretDown from '../icons/CaretDown';
import { useState } from 'react';

const NavLinksList = () => {
  const user = useUser();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ul className='mt-4 flex items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
      <li className='text-gray-100'>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='flex items-center'
        >
          Generate <CaretDown />
        </button>
        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute ${
            isHovered ? 'block' : 'hidden'
          } flex min-w-[125px] flex-col rounded bg-gray-700 p-2 text-gray-100`}
        >
          <li className='rounded p-2 duration-150 hover:bg-gray-600'>
            <Link href='/generate/name'>Name</Link>
          </li>
          <li className='rounded p-2 duration-150 hover:bg-gray-600'>
            <Link href='/generate/logo'>Logo</Link>
          </li>
          <li className='rounded p-2 duration-150 hover:bg-gray-600'>
            <Link href='/generate/slogan'>Slogan</Link>
          </li>
        </ul>
      </li>
      <li className='text-gray-100 hover:text-gray-300/75'>
        <Link href='/examples'>Examples</Link>
      </li>
      <li className='text-gray-100'>
        {user.isSignedIn && <BuyCreditsButton />}
        {user.isLoaded ? (
          <>{user.isSignedIn == false && <ButtonSignIn />}</>
        ) : (
          <ButtonLoading />
        )}
      </li>
      {user.isSignedIn && (
        <li>
          <UserButton />
        </li>
      )}
    </ul>
  );
};

export default NavLinksList;
