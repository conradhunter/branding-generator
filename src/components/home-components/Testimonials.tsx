import { testimonialsData } from '../../../data/testimonials';

const Testimonials = () => {
  return (
    <section>
      <div className='py-6 sm:py-8 lg:pb-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <h2 className='mb-6 text-center text-3xl font-bold text-gray-100 md:mb-12 lg:text-4xl'>
            What others say about us
          </h2>

          <div className='grid gap-4 md:grid-cols-2 md:gap-8'>
            {testimonialsData.map((testimonial) => {
              return (
                <div
                  key={testimonial.name}
                  className='flex flex-col items-center gap-4 rounded-lg border border-violet-400 bg-gray-700 px-8 py-6 md:gap-6'
                >
                  <div className='max-w-md text-center text-white lg:text-lg'>
                    “{testimonial.review}”
                  </div>

                  <div className='flex flex-col items-center gap-2 sm:flex-row md:gap-3'>
                    <div className='h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14'>
                      <img
                        src={testimonial.profileImage}
                        loading='lazy'
                        alt=''
                        height={100}
                        className='h-full w-full object-cover object-center'
                      />
                    </div>

                    <div>
                      <div className='text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base'>
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
