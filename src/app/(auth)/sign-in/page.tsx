import { SignIn } from '@clerk/nextjs/app-beta';

export default function SignInPage() {
  return (
    <div className='flex w-full items-center justify-center py-20'>
      <SignIn signUpUrl='/sign-up' />
    </div>
  );
}
