import { SignOutButton } from '@clerk/nextjs';

const ButtonSignOut = () => {
  return (
    <SignOutButton>
      <button className='uppercase text-white text-sm shadow-lg duration-150 hover:bg-violet-500 py-2 px-3 bg-violet-400 rounded-md'>
        Sign Out
      </button>
    </SignOutButton>
  );
};

export default ButtonSignOut;
