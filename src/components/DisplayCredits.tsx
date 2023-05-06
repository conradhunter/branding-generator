'use client';

import { useUser } from '@clerk/nextjs';

const DisplayCredits = () => {
  const user = useUser();

  const credits: any = user.user?.unsafeMetadata.credits;

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
