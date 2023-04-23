import { Inter } from 'next/font/google';
import Features from '~/components/home-components/Features';
import Hero from '~/components/home-components/Hero';
import Pricing from '~/components/home-components/Pricing';
import Testimonials from '~/components/home-components/Testimonials';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='bg-slate-800'>
      <Hero />
      <Testimonials />
      <Features />
      <Pricing />
    </main>
  );
}
