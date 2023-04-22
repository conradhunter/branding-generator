import Link from 'next/link';
import { FunctionComponent } from 'react';

const Sidebar: FunctionComponent = () => {
  return (
    <aside className='w-[25%] bg-gray-900 p-6 min-h-screen max-w-[300px]'>
      <h6 className='text-lg text-gray-100 mb-3'>Basic</h6>
      <ul className='flex flex-col gap-3 mb-7 text-gray-300'>
        <li className='hover:bg-gray-800 py-2 px-3 duration-150 border-b border-gray-700 text-sm hover:text-white'>
          <Link href=''>Logos</Link>
        </li>
        <li className='hover:bg-gray-800 py-2 px-3 duration-150 border-b border-gray-700 text-sm hover:text-white'>
          <Link href=''>Names</Link>
        </li>
        <li className='hover:bg-gray-800 py-2 px-3 duration-150 border-b border-gray-700 text-sm hover:text-white'>
          <Link href=''>Slogan</Link>
        </li>
        <li className='hover:bg-gray-800 py-2 px-3 duration-150 border-b border-gray-700 text-sm hover:text-white'>
          <Link href=''>Typography</Link>
        </li>
        <li className='hover:bg-gray-800 py-2 px-3 duration-150 border-b border-gray-700 text-sm hover:text-white'>
          <Link href=''>Color Palette</Link>
        </li>
      </ul>

      <h6 className='text-lg text-gray-100 mb-3'>Packages</h6>
      <ul className='flex flex-col gap-3 text-gray-300'>
        <li className='hover:bg-gray-800 py-2 px-3 duration-150 border-b border-gray-700 text-sm'>
          <Link href=''>Style Guide</Link>
        </li>
        <li className='hover:bg-gray-800 py-2 px-3 duration-150 border-b border-gray-700 text-sm'>
          <Link href=''>Identity Package</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
