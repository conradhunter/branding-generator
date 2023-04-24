import Features from '~/components/home-components/Features';
import Hero from '~/components/home-components/Hero';
import Testimonials from '~/components/home-components/Testimonials';

export default function Home() {
  return (
    <main className='bg-slate-800'>
      <Hero />
      <Testimonials />
      <Features />
    </main>
  );
}
