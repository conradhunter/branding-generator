import React from 'react';

type LabelProps = {
  content: string;
};

const Label = ({ content }: LabelProps) => {
  return (
    <label
      className='mb-2 block text-base font-medium text-gray-100'
      htmlFor=''
    >
      {content}
    </label>
  );
};

export default Label;
