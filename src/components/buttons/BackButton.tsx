import Link from 'next/link';

const BackButton = () => {
  return (
    <button className='absolute left-10 top-10 rounded-md bg-violet-400 px-3 py-2 text-sm text-white shadow-lg duration-150 hover:bg-violet-500'>
      <Link href='/'>Go Back</Link>
    </button>
  );
};

export default BackButton;
