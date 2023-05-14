'use client';

import { SignInButton, useUser } from '@clerk/nextjs';

type GenerateSloganButtonProps = {
  sloganPrompt: string;
  temperature: number;
  generateSlogan: (prompt: string, temperature: number) => void;
};

const GenerateSloganButton = ({
  sloganPrompt,
  temperature,
  generateSlogan,
}: GenerateSloganButtonProps) => {
  const user = useUser();

  const credits = user.user?.publicMetadata.credits || 0;

  const canGenerate =
    user.isSignedIn && typeof credits === 'number' && credits > 0;

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
          onClick={() => generateSlogan(sloganPrompt, temperature)}
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
