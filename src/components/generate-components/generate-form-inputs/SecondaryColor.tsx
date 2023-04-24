'use client';

import { useRef } from 'react';

const SecondaryColor = () => {
  const secondaryRef = useRef<HTMLInputElement>(null);

  const handleSecondaryColorChange = () => {
    const secondaryColor = secondaryRef.current?.value;
    console.log(secondaryColor);
  };

  return (
    <div className='mb-6'>
      <label
        htmlFor='secondary'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        Secondary Color &#40;optional&#41;
      </label>
      <input
        type='color'
        onChange={handleSecondaryColorChange}
        ref={secondaryRef}
        defaultValue='#ffffff'
        id='secondary'
        className='block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      />
    </div>
  );
};

export default SecondaryColor;
