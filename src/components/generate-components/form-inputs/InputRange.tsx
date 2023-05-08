import React from 'react';

type InputRangeProps = {
  min: number;
  max: number;
  defaultValue: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputRange = ({ min, max, defaultValue, onChange }: InputRangeProps) => {
  return (
    <input
      type='range'
      min={min}
      max={max}
      step={0.1}
      onChange={onChange}
      defaultValue={defaultValue}
      className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
    />
  );
};

export default InputRange;
