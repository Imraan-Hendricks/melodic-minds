import { About } from './About';
import { CustomHead } from '@/components/CustomHead';
import { Hero } from './Hero';
import { Services } from './Services';
import { Studio } from './Studio';
import { Testimonials } from './Testimonials';

export default function Home() {
  return (
    <div>
      <CustomHead title='Home' />
      <Hero />
      <About />
      <Studio />
      <Services />
      <Testimonials />
    </div>
  );
}
