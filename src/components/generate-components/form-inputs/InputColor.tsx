import React from 'react';

type InputColorProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputColor = ({ value, onChange }: InputColorProps) => {
  return (
    <input
      className='block h-8 w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      type='color'
      required
      value={value}
      onChange={onChange}
    />
  );
};

export default InputColor;
