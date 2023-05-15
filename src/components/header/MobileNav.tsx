import Link from 'next/link';
import React from 'react';
import CaretDown from '../icons/CaretDown';
import Close from '../icons/Close';

interface MobileNavProps {
  isMobileMenuOpen: boolean;
}

const MobileNav = ({ isMobileMenuOpen }: MobileNavProps) => {
  return (
    <div
      className={`border-1 ${
        isMobileMenuOpen ? 'block' : 'hidden'
      } absolute right-0 top-[72px] h-[calc(100vh-72px)] w-2/3 max-w-xs rounded-b-lg border-slate-900 bg-slate-700 py-10 text-center shadow-sm`}
    >
      <Close />
      <ul className='flex flex-col gap-3 text-gray-100'>
        <Link href='/'>
          <li>Home</li>
        </Link>
        <Link href='/'>
          <li>
            Generate <CaretDown />
          </li>
        </Link>
        <Link href='/'>
          <li>Examples</li>
        </Link>
        <Link href='/'>
          <li>Buy Credits</li>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNav;
