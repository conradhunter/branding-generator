import { SignInButton } from '@clerk/nextjs';

const ButtonSignIn = () => {
  return (
    <SignInButton>
      <button className='uppercase text-white text-sm shadow-lg duration-150 hover:bg-violet-500 py-2 px-3 bg-violet-400 rounded-md'>
        Sign In
      </button>
    </SignInButton>
  );
};

export default ButtonSignIn;
