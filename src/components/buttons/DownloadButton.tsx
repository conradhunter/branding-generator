'use client';

import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface DownloadButtonProps {
  logoImageUrl: string | null;
}

const DownloadButton = ({ logoImageUrl }: DownloadButtonProps) => {
  const handleDownload = async () => {
    if (logoImageUrl) {
      try {
        const response = await fetch(logoImageUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'logo.png';
        link.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    }
  };

  return (
    <button
      onClick={handleDownload}
      className='absolute right-4 top-4 z-10 cursor-pointer text-slate-300 duration-200 hover:text-slate-100'
    >
      <FileDownloadIcon />
    </button>
  );
};

export default DownloadButton;
