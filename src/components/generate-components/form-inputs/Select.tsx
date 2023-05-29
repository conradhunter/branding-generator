import React from 'react';

type SelectProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <select
      name=''
      id=''
      onChange={onChange}
      required
      value={value}
      className='block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm  text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
