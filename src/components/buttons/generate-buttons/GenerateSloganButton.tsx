'use client';

import { SignInButton, useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

type GenerateSloganButtonProps = {
  sloganPrompt: string;
  generateSloganHandler: (prompt: string) => void;
};

const GenerateSloganButton = ({
  sloganPrompt,
  generateSloganHandler,
}: GenerateSloganButtonProps) => {
  const user = useUser();
  const [credits, setCredits] = useState();

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
          setCredits(data.credits);
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
          onClick={() => generateSloganHandler(sloganPrompt)}
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

export default GenerateSloganButton;
