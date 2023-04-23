'use client';

const ResolutionSelect = () => {
  return (
    <div className='mb-6'>
      <label
        htmlFor='resolution'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        Logo Resolution
      </label>
      <select
        id='resolution'
        defaultValue={'selected'}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      >
        <option value='selected'>Choose a resolution</option>
        <option value='2D'>256x256</option>
        <option value='3D'>512x512</option>
        <option value='3D'>1024x1024</option>
      </select>
    </div>
  );
};

export default ResolutionSelect;
