'use client';

const NameInput = () => {
  return (
    <div className='mb-6'>
      <label
        htmlFor='email'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        Business/Company Name
      </label>
      <input
        type='email'
        id='email'
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        required
      />
    </div>
  );
};

export default NameInput;
