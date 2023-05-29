'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import ButtonSignIn from '../buttons/ButtonSignIn';
import ButtonLoading from '../buttons/ButtonLoading';
import BuyCreditsButton from '../buttons/BuyCreditsButton';
import Link from 'next/link';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
    <ul className='mt-4 flex items-center rounded-lg border border-gray-700 bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-900 md:p-0'>
      <li className='text-gray-100'>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='flex items-center'
        >
          Generate <KeyboardArrowDownIcon />
        </button>
        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute ${
            isHovered ? 'block' : 'hidden'
          } flex min-w-[125px] flex-col rounded bg-gray-700 p-2 text-gray-100`}
        >
          <Link href='/generate/name'>
            <li className='rounded p-2 duration-150 hover:bg-gray-600'>Name</li>
          </Link>
          <Link href='/generate/logo'>
            <li className='rounded p-2 duration-150 hover:bg-gray-600'>Logo</li>
          </Link>
          <Link href='/generate/slogan'>
            <li className='rounded p-2 duration-150 hover:bg-gray-600'>
              Slogan
            </li>
          </Link>
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
