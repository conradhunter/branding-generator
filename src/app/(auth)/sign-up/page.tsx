import { SignUp } from '@clerk/nextjs/app-beta';

export default function SignUpPage() {
  return (
    <div className='flex w-full items-center justify-center py-20'>
      <SignUp signInUrl='/sign-in' />
    </div>
  );
}
