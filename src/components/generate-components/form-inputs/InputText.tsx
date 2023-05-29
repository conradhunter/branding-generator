import React, { ChangeEvent } from 'react';

type InputTextProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputText = ({ value, onChange, placeholder }: InputTextProps) => {
  return (
    <input
      className='block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
      type='text'
      required
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputText;
