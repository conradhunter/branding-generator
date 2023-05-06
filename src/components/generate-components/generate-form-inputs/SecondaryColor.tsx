'use client';

import { ChangeEvent, useRef } from 'react';
import { InputProps, LogoPromptData } from '../GeneratorForm';

const SecondaryColor = ({ updateProperty }: InputProps) => {
  const secondaryRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateProperty(name as keyof LogoPromptData, value);
    const handleSecondaryColorChange = () => {
      secondaryRef.current?.value;
    };
    handleSecondaryColorChange();
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
        onChange={handleChange}
        name='secondaryColor'
        ref={secondaryRef}
        defaultValue='#ffffff'
        id='secondary'
        className='block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      />
    </div>
  );
};

export default SecondaryColor;
