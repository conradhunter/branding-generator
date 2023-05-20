import Image from 'next/image';
import { testimonial } from '~/lib/types/types';

const Testimonials = () => {
  const testimonialsData: testimonial[] = [
    // FAKE DATA
    {
      name: 'Liam Anderson',
      review:
        'BrandingGeneratorAI made branding a breeze! Quick, easy, and professional results that helped me develop my branding..',
      rating: 5,
      profileImage:
        'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112',
    },
    {
      name: 'Ava Thompson',
      review:
        'Impressive branding made simple with BrandingGeneratorAI. A must-have for any entrepreneur!',
      rating: 5,
      profileImage:
        'https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      name: 'Noah Mitchell',
      review:
        'Branding on demand! BrandingGeneratorAI is a time-saving gem for my business and let me worry about other things.',
      rating: 4,
      profileImage:
        'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
    {
      name: 'Olivia Roberts',
      review:
        'Effortless branding perfection! BrandingGeneratorAI has exceeded my expectations.',
      rating: 5,
      profileImage:
        'https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
  ];

  return (
    <section className='mb-10'>
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
                      <Image
                        src={testimonial.profileImage}
                        loading='lazy'
                        alt=''
                        height={100}
                        width={100}
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
