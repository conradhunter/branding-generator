'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

const PromotionsBar = () => {
  const user = useUser();

  return (
    <>
      {!user.isSignedIn && (
        <div className='w-full bg-gray-700 p-2'>
          <p className='text-center text-xs leading-relaxed text-gray-100 lg:w-4/5 xl:text-lg'>
            🎉 Limited time offer: 100 credits for $25!{' '}
            <Link className='underline' href='/sign-in'>
              Join now!
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default PromotionsBar;
