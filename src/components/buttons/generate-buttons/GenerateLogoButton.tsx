'use client';

import { SignInButton, useUser } from '@clerk/nextjs';
import { generateLogo } from '~/utils/openAI/generate';

interface promptProps {
  logoPrompt: string;
  resolution: string;
}

const GenerateButton = (props: promptProps) => {
  const user = useUser();

  const credits = user.user?.publicMetadata.credits || 0;

  const canGenerate =
    user.isSignedIn && typeof credits === 'number' && credits > 0;

  const userId: any = user.user?.id;

  async function deductCredits() {}

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
          onClick={() =>
            generateLogo(props.logoPrompt, props.resolution, deductCredits)
          }
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
