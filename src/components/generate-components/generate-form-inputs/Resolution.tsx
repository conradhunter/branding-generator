'use client';

import { ChangeEvent } from 'react';
import { InputProps, LogoPromptData } from '../GeneratorForm';

const ResolutionSelect = ({ updateProperty }: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    updateProperty(name as keyof LogoPromptData, value);
  };
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
        name='resolution'
        onChange={handleChange}
        required
        defaultValue={'selected'}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      >
        <option value='selected'>Choose a resolution</option>
        <option value='256x256'>256 x 256</option>
        <option value='512x512'>512 x 512</option>
        <option value='1024x1024'>1024 x 1024</option>
      </select>
    </div>
  );
};

export default ResolutionSelect;
