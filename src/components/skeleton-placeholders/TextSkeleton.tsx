const TextSkeleton = () => {
  return (
    <div
      role='status'
      className='max-w-lg animate-pulse space-y-2.5'
    >
      <div className='flex w-full items-center space-x-2'>
        <div className='h-2.5 w-32 rounded-full bg-gray-600'></div>
        <div className='h-2.5 w-24 rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
      </div>
      <div className='flex w-full max-w-[480px] items-center space-x-2'>
        <div className='h-2.5 w-full rounded-full bg-gray-600'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-24 rounded-full bg-gray-500'></div>
      </div>
      <div className='flex w-full max-w-[400px] items-center space-x-2'>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-80 rounded-full bg-gray-600'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
      </div>
      <div className='flex w-full max-w-[480px] items-center space-x-2'>
        <div className='h-2.5 w-full rounded-full bg-gray-600'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-24 rounded-full bg-gray-500'></div>
      </div>
      <div className='flex w-full max-w-[440px] items-center space-x-2'>
        <div className='h-2.5 w-32 rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-24 rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-600'></div>
      </div>
      <div className='flex w-full max-w-[360px] items-center space-x-2'>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
        <div className='h-2.5 w-80 rounded-full bg-gray-600'></div>
        <div className='h-2.5 w-full rounded-full bg-gray-500'></div>
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default TextSkeleton;
