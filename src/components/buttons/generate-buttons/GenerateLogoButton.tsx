'use client';

import { SignInButton, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { generateLogo } from '~/utils/openAI/init';

interface promptProps {
  logoPrompt: string;
  resolution: string;
}

const GenerateButton = (props: promptProps) => {
  const user = useUser();
  let credits;

  useEffect(() => {
    if (user.isSignedIn) {
      fetch('https://brandinggeneratorai.com/api/db/get-users-credits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.user.id }),
      })
        .then((res) => res.json())
        .then((data) => {
          credits = data.credits;
        });
    }
  }, [user]);

  const canGenerate =
    user.isSignedIn && typeof credits === 'number' && credits >= 5;

  return (
    <>
      {user.isSignedIn ? (
        <button
          className={`rounded-md bg-violet-400 px-6 py-2 text-lg uppercase text-white shadow-lg duration-150 ${
            canGenerate
              ? 'hover:bg-violet-500'
              : 'cursor-not-allowed opacity-50'
          }`}
          disabled={!canGenerate}
          onClick={() => generateLogo(props.logoPrompt, props.resolution)}
        >
          Generate
        </button>
      ) : (
        <SignInButton>
          <button className='rounded-md bg-violet-400 px-6 py-2 text-lg uppercase text-white shadow-lg duration-150 hover:bg-violet-500'>
            Sign In
          </button>
        </SignInButton>
      )}
    </>
  );
};

export default GenerateButton;
