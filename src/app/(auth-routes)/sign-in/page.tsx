import { SignIn } from '@clerk/nextjs/app-beta';
import BackButton from '~/components/buttons/BackButton';

export default function SignInPage() {
  return (
    <main className='relative flex h-screen w-full items-center justify-center py-20'>
      <BackButton />
      <SignIn signUpUrl='/sign-up' />
    </main>
  );
}
