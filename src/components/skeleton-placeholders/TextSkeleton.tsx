const TextSkeleton = () => {
  return (
    <div
      role='status'
      className='max-w-lg animate-pulse space-y-2.5'
    >
      <div className='flex w-full items-center space-x-2'>
        <div className='h-2.5 w-16 rounded-full bg-gray-600 sm:w-20 md:w-32'></div>
        <div className='h-2.5 w-12 rounded-full bg-gray-500 sm:w-16 md:w-24'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
      </div>
      <div className='flex w-full items-center space-x-2'>
        <div className='h-2.5 w-full rounded-full bg-gray-600'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-12 rounded-full bg-gray-500 sm:w-16 md:w-24'></div>
      </div>
      <div className='flex w-full items-center space-x-2'>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-40 rounded-full bg-gray-600 sm:w-52 md:w-80'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
      </div>
      <div className='flex w-full items-center space-x-2'>
        <div className='h-2.5 w-full rounded-full bg-gray-600'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-12 rounded-full bg-gray-500 sm:w-16 md:w-24'></div>
      </div>
      <div className='flex w-full items-center space-x-2'>
        <div className='h-2.5 w-16 rounded-full bg-gray-500 sm:w-20 md:w-32'></div>
        <div className='h-2.5 w-12 rounded-full bg-gray-500 sm:w-16 md:w-24'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-600'></div>
      </div>
      <div className='flex w-full items-center space-x-2'>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-40 rounded-full bg-gray-600 sm:w-52 md:w-80'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default TextSkeleton;
