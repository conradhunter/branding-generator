const Features = () => {
  return (
    <div className='bg-gray-800 py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-6 text-center text-3xl font-bold text-gray-100 md:mb-12 lg:text-4xl'>
            Why choose BrandingGeneratorAI?
          </h2>

          <p className='mx-auto max-w-screen-md text-center text-gray-100 md:text-lg'>
            BrandingGeneratorAI is a Saas platform that helps you generate
            branding for you business in a matter of seconds in a secure and
            professional format.
          </p>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16'>
          <div className='flex gap-4 md:gap-6'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                viewBox='0 0 48 48'
              >
                <rect width='48' height='48' fill='transparent' />
                <text
                  x='50%'
                  y='50%'
                  textAnchor='middle'
                  strokeWidth='2'
                  dy='.3em'
                  fontSize='28'
                  fill='white'
                >
                  HD
                </text>
              </svg>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-semibold text-gray-100 md:text-xl'>
                Choose your resolution
              </h3>
              <p className='mb-2 text-gray-100'>
                Generate high-quality logos in multiple resolutions, including
                256x256, 512x512, and 1024x1024, to cater to various display
                needs.
              </p>
            </div>
          </div>
          <div className='flex gap-4 md:gap-6'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
                />
              </svg>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-semibold text-gray-100 md:text-xl'>
                Cloud
              </h3>
              <p className='mb-2 text-gray-100'>
                Your generated content is securely stored on the cloud, allowing
                you to easily access it whenever you sign in
              </p>
            </div>
          </div>
          <div className='flex gap-4 md:gap-6'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-semibold text-gray-100 md:text-xl'>
                Affordable Prices
              </h3>
              <p className='mb-2 text-gray-100'>
                We provide the most credits compared to other icon generator
                services. Don't get scammed paying $10 for 10 credits.
              </p>
            </div>
          </div>
          <div className='flex gap-4 md:gap-6'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              </svg>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-semibold text-gray-100 md:text-xl'>
                Dark Mode
              </h3>
              <p className='mb-2 text-gray-100'>
                Generate logos in both light and dark modes, tailored to suit
                your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
