'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import ButtonSignIn from '../buttons/ButtonSignIn';
import ButtonLoading from '../buttons/ButtonLoading';
import BuyCreditsButton from '../buttons/BuyCreditsButton';
import Link from 'next/link';

const NavLinksList = () => {
  const user = useUser();
  return (
    <ul className='mt-4 flex items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
      <li className='text-gray-100 hover:text-gray-300/75'>
        <Link href='/generate'>Generate</Link>
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
