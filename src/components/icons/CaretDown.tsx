'use client';

import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type CaretDownProps = {
  isDropdownOpen: boolean;
};

const CaretDown = ({ isDropdownOpen }: CaretDownProps) => {
  return (
    <KeyboardArrowDownIcon
      className={`transform transition-transform duration-150 ${
        isDropdownOpen ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
      }`}
    />
  );
};

export default CaretDown;
