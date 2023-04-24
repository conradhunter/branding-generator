'use client';

import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useUser } from '@clerk/nextjs';

const UserInformation = () => {
  const user = useUser();

  return (
    <section className='w-full max-w-[60%] rounded-xl border border-violet-400 p-10'>
      <h1 className='mb-10 text-center text-2xl font-semibold text-gray-100'>
        Hi Conrad!
      </h1>
      <div className='flex w-full items-center justify-center'>
        <div className='mr-16'>
          <img
            src={user.user?.profileImageUrl}
            className='h-16 w-16 rounded-full'
            alt=''
          />
        </div>
        <div className='flex items-center gap-12'>
          <div className='flex flex-col'>
            <label className='text-gray-100' htmlFor=''>
              Name:
            </label>
            <span className='text-gray-100'>{user.user?.firstName}</span>
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-100' htmlFor=''>
              Email:
            </label>
            <span className='text-gray-100'>
              {user.user?.primaryEmailAddress?.emailAddress}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInformation;
