import React from 'react';

const InputRange = () => {
  return (
    <input
      id='minmax-range'
      type='range'
      min={0}
      max={20}
      value={10}
      className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
    />
  );
};

export default InputRange;
