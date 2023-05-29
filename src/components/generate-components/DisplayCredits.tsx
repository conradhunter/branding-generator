'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const DisplayCredits = () => {
  const user = useUser();
  const [credits, setCredits] = useState<number>(0);

  useEffect(() => {
    if (user.isSignedIn) {
      fetch('/api/db/get-users-credits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.user.id }),
      })
        .then((res) => res.json())
        .then((data) => {
          setCredits(data.credits);
        });
    }
  });

  if (user.isSignedIn && credits !== undefined && credits !== 0) {
    return (
      <p className='mb-6 max-w-fit rounded-md bg-violet-400 p-4 font-medium leading-relaxed text-gray-100 shadow-lg md:mb-9 lg:w-4/5 xl:text-lg'>
        You have {credits} credits
      </p>
    );
  } else {
    return (
      <p className='mb-6 max-w-fit rounded-md bg-violet-400 p-4 font-medium leading-relaxed text-gray-100 shadow-lg md:mb-9 lg:w-4/5 xl:text-lg'>
        You have no credits
      </p>
    );
  }
};

export default DisplayCredits;
