import { About } from './About';
import { CustomHead } from '@/components/CustomHead';
import { Hero } from './Hero';

export default function Home() {
  return (
    <main>
      <CustomHead title='Home' />
      <Hero />
      <About />
    </main>
  );
}
