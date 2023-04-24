import { ClerkLoading } from '@clerk/nextjs';
import { SignUp } from '@clerk/nextjs/app-beta';
import BackButton from '~/components/buttons/BackButton';

export default function SignUpPage() {
  return (
    <main className='flex h-screen w-full items-center justify-center py-20'>
      <BackButton />
      <SignUp signInUrl='/sign-in' />
    </main>
  );
}
