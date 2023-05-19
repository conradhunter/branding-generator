'use client';

import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { type } from 'os';

type CloseProps = {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
};

const Close = ({ setIsMobileMenuOpen, isMobileMenuOpen }: CloseProps) => {
  return (
    <>
      <CloseIcon
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className='absolute right-6 top-6 cursor-pointer text-gray-100'
      />
    </>
  );
};

export default Close;
