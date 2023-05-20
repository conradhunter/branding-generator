'use client';

import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface DownloadButtonProps {
  logoImageUrl: string | null;
}

const DownloadButton = ({ logoImageUrl }: DownloadButtonProps) => {
  return (
    <a
      href={logoImageUrl!}
      target='_blank'
    >
      <button className='absolute right-4 top-4 z-10 cursor-pointer text-slate-300 duration-200 hover:text-slate-100'>
        <FileDownloadIcon />
      </button>
    </a>
  );
};

export default DownloadButton;
