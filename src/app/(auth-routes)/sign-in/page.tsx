import { SignIn } from '@clerk/nextjs/app-beta';
import { NextPage } from 'next';
import BackButton from '~/components/buttons/BackButton';

const SignInPage: NextPage = () => {
  return (
    <main className='relative flex h-screen w-full items-center justify-center py-20'>
      <BackButton />
      <SignIn signUpUrl='/sign-up' />
    </main>
  );
};

export default SignInPage;
