'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import CaretDown from '../icons/CaretDown';
import Close from '../icons/Close';
import { useUser } from '@clerk/nextjs';
import { SignInButton, SignOutButton } from '@clerk/clerk-react';

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileNavProps) => {
  const user = useUser();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div
      className={`border-1 ${
        isMobileMenuOpen ? 'block' : 'hidden'
      } absolute right-6 top-24 h-fit w-2/3 max-w-sm rounded-2xl border-slate-900 bg-slate-700 px-14 py-16 shadow-sm`}
    >
      <Close
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <ul className='mb-10 flex flex-col text-lg text-gray-100'>
        <Link href='/'>
          <li className='mb-4'>Home</li>
        </Link>
        <li
          className={`cursor-pointer ${isDropdownOpen ? 'mb-0' : 'mb-4'}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Generate <CaretDown isDropdownOpen={isDropdownOpen} />
        </li>
        <ul
          className={`${
            isDropdownOpen ? 'submenu-open' : 'hidden'
          } ml-4 py-2 text-base text-gray-100/75`}
        >
          <Link href='/generate/name'>
            <li className=''>Name</li>
          </Link>
          <Link href='/generate/logo'>
            <li className=''>Logo</li>
          </Link>
          <Link href='/generate/slogan'>
            <li className=''>Slogan</li>
          </Link>
        </ul>
        <Link href='/'>
          <li className='mb-4'>Examples</li>
        </Link>
        <Link href='/'>
          <li className='mb-4'>Buy Credits</li>
        </Link>
      </ul>
      {user.isSignedIn ? (
        <SignOutButton>
          <button className='mx-auto rounded-md bg-violet-400 px-3 py-2 uppercase text-white shadow-lg duration-150 hover:bg-violet-500'>
            Sign Out
          </button>
        </SignOutButton>
      ) : (
        <SignInButton>
          <button className='mx-auto rounded-md bg-violet-400 px-3 py-2 uppercase text-white shadow-lg duration-150 hover:bg-violet-500'>
            Sign In
          </button>
        </SignInButton>
      )}
    </div>
  );
};

export default MobileNav;
