import Cloud from '../icons/Cloud';
import DarkMode from '../icons/DarkMode';
import Dollar from '../icons/Dollar';

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

        <div className='mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 md:gap-12 xl:gap-16'>
          <div className='flex gap-4 md:gap-6'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'>
              <span>HD</span>
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
              <Cloud />
            </div>

            <div>
              <h3 className='mb-2 text-lg font-semibold text-gray-100 md:text-xl'>
                Cloud
              </h3>
              <p className='mb-2 text-gray-100'>
                Your generated content is securely stored on the cloud, allowing
                you to easily access it whenever you sign in.
              </p>
            </div>
          </div>
          <div className='flex gap-4 md:gap-6'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'>
              <Dollar />
            </div>

            <div>
              <h3 className='mb-2 text-lg font-semibold text-gray-100 md:text-xl'>
                Affordable Prices
              </h3>
              <p className='mb-2 text-gray-100'>
                We provide the most credits compared to other icon generator
                services. Don&apos;t get scammed paying $10 for 10 credits.
              </p>
            </div>
          </div>
          <div className='flex gap-4 md:gap-6'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'>
              <DarkMode />
            </div>

            <div>
              <h3 className='mb-2 text-lg font-semibold text-gray-100 md:text-xl'>
                Versatile Branding
              </h3>
              <p className='mb-2 text-gray-100'>
                Empower Your Brand with Custom Logos, Names, and Slogans
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
