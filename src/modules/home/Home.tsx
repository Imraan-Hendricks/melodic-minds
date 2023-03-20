import { About } from './About';
import { CustomHead } from '@/components/CustomHead';
import { Hero } from './Hero';

export default function Home() {
  return (
    <div>
      <CustomHead title='Home' />
      <Hero />
      <About />
    </div>
  );
}
