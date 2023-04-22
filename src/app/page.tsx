import { Inter } from 'next/font/google';
import Hero from '~/components/home/Hero';
import Testimonials from '~/components/home/Testimonials';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='bg-slate-800'>
      <Hero />
      <Testimonials />
    </main>
  );
}
