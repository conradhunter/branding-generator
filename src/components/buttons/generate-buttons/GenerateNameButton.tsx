'use client';

import { SignInButton, useUser } from '@clerk/nextjs';
import { generateBusinessName } from '~/utils/openAI/init';

type GenerateNameButtonProps = {
  finalNamePrompt: string;
  generateNames: (prompt: string) => void;
};

const GenerateNameButton = ({
  finalNamePrompt,
  generateNames,
}: GenerateNameButtonProps) => {
  const user = useUser();

  const credits = user.user?.publicMetadata.credits || 0;

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
          onClick={() => generateNames(finalNamePrompt)}
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

export default GenerateNameButton;
