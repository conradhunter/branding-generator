import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import NavLinksList from './NavLinksList';
import Hamburger from '../buttons/Hamburger';

export const NavBar: FunctionComponent = () => {
  return (
    <nav className='border-b-2 border-gray-800 bg-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-8 py-4'>
        <Link
          href='/'
          className='flex items-center'
        >
          <Image
            src={logo}
            className='mr-3 h-10 w-10 rounded-lg'
            alt='Flowbite Logo'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
            BrandingGeneratorAI
          </span>
        </Link>
        <Hamburger />
        <div className='hidden w-full md:block md:w-auto'>
          <NavLinksList />
        </div>
      </div>
    </nav>
  );
};
