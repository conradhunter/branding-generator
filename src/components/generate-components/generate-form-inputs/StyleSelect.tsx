'use client';

const StyleSelect = () => {
  return (
    <div className='mb-6'>
      <label
        htmlFor='countries'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        Logo Style
      </label>
      <select
        id='countries'
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      >
        <option selected>Choose a style</option>
        <option value='modern'>Modern</option>
        <option value='cartoon'>Cartoon</option>
        <option value='hand-drawn'>Hand Drawn</option>
        <option value='vintage'>Vintage</option>
        <option value='abstract'>Abstract</option>
        <option value='elegant'>Elegant</option>
      </select>
    </div>
  );
};

export default StyleSelect;
