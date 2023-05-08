'use client';

import { SignInButton, useUser } from '@clerk/nextjs';
import { generateSlogan } from '~/app/api/generate';

type GenerateSloganButtonProps = {
  sloganPrompt: string;
  temperature: number;
};

const GenerateSloganButton = ({
  sloganPrompt,
  temperature,
}: GenerateSloganButtonProps) => {
  const user = useUser();

  const credits = user.user?.unsafeMetadata.credits || 0;

  const canGenerate =
    user.isSignedIn && typeof credits === 'number' && credits > 0;

  function deductCredits() {
    if (
      user &&
      user.user?.unsafeMetadata &&
      typeof user.user.unsafeMetadata.credits === 'number'
    ) {
      const updatedCredits = user.user.unsafeMetadata.credits - 5;

      user.user?.update({
        unsafeMetadata: {
          credits: updatedCredits,
        },
      });
    } else {
      console.error(
        'User, unsafeMetadata, or credits is not properly defined.'
      );
    }
  }

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
