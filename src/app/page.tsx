import { NextPage } from 'next';
import Features from '~/components/home-components/Features';
import Hero from '~/components/home-components/Hero';
import Testimonials from '~/components/home-components/Testimonials';

const Home: NextPage = () => {
  return (
    <main className='bg-slate-800'>
      <Hero />
      <Testimonials />
      <Features />
    </main>
  );
};

export default Home;
