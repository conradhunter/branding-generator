'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

const PromotionsBar = () => {
  const user = useUser();

  return (
    <>
      {!user.isSignedIn && (
        <div className='w-full bg-gray-700 p-2'>
          <p className='text-center text-xs leading-relaxed text-gray-100 '>
            🎉 Limited time offer: 100 credits for $25!{' '}
            <Link className='underline' href='/sign-up'>
              Join now!
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default PromotionsBar;
