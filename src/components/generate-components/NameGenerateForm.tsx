import React from 'react';
import GenerateNameButton from '../buttons/GenerateName';

const NameGenerateForm = () => {
  return (
    <form action=''>
      <div className='mb-6'>
        <label
          htmlFor='name'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
        >
          Industry
        </label>
        <input
          id='name'
          name='name'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          required
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='name'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
        >
          Product or Service
        </label>
        <input
          id='name'
          name='name'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          required
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='name'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
        >
          Target Audience
        </label>
        <input
          id='name'
          name='name'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          required
        />
      </div>
      <div className='flex w-full items-center justify-center'>
        <GenerateNameButton />
      </div>
    </form>
  );
};

export default NameGenerateForm;
