import { SignUp } from '@clerk/nextjs/app-beta';
import { NextPage } from 'next';
import BackButton from '~/components/buttons/BackButton';

export const metadata = {
  title: 'Sign-up',
};

const SignUpPage: NextPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center py-20'>
      <BackButton />
      <SignUp signInUrl='/sign-in' />
    </main>
  );
};

export default SignUpPage;
