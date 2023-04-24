import Link from 'next/link';

const AccountSettings = () => {
  return (
    <section className='w-full max-w-[60%] rounded-xl border border-violet-400 p-10'>
      <h1 className='mb-10 text-center text-2xl font-semibold text-gray-100'>
        Settings
      </h1>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center py-2'>
          <span className='mr-4 text-gray-100'>Forgot/Change Password:</span>
          <Link className='text-violet-400 hover:text-violet-300' href='/'>
            Update your password
          </Link>
        </div>
        <div className='flex items-center py-2'>
          <span className='mr-4 text-gray-100'>Update Details:</span>
          <Link className='text-violet-400 hover:text-violet-300' href='/'>
            Update your details
          </Link>
        </div>
        <div className='flex items-center py-2'>
          <span className='mr-4 text-gray-100'>Billing information:</span>
          <Link className='text-violet-400 hover:text-violet-300' href='/'>
            Update your billing information here.
          </Link>
        </div>
        <div className='flex items-center py-2'>delete button</div>
      </div>
    </section>
  );
};

export default AccountSettings;
