import { Button } from '@/components/button/Button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export function About() {
  return (
    <section className='px-5 py-24 bg-gray-50'>
      <div className='container mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        <div className='grid gap-8 h-max'>
          <h1 className='text-title max-w-xl'>
            Creating the music you envision
          </h1>
          <p className='text-body text-gray-500'>
            At Melodic Minds, we turn your musical dreams into reality with our
            state-of-the-art facilities and world-class engineering team.
          </p>
          <div className='grid gap-4'>
            <h2 className='text-h2 text-gray-800'>Tailored music production</h2>
            <ul className='grid gap-2'>
              {[
                'Customized recording experience',
                'High-quality sound engineering',
              ].map((solution) => (
                <li
                  key={solution}
                  className='text-body text-gray-500 flex items-center'>
                  <div className='mr-2'>
                    <ChevronRightIcon className='w-5 h-5 text-primary-300' />
                  </div>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
          <Button className='w-max'>Get Started</Button>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 sm:gap-4 md:gap-8'>
          <div className='w-full row-span-2 rounded-md overflow-hidden'>
            <img
              className='w-full'
              src='/about/purple-mic.jpg'
              alt='microphone'
            />
          </div>
          <div className='w-full rounded-md overflow-hidden'>
            <img
              className='h-full'
              src='/about/vocalist-1.jpg'
              alt='vocalist'
            />
          </div>
          <div className='w-full rounded-md overflow-hidden h-full bg-primary-300 flex flex-col justify-center items-center px-4 py-2'>
            <div>
              <h3 className='text-display'>09</h3>
              <p>
                <span className='text-subtitle'>
                  <strong>We Have</strong>
                </span>
                <br />
                <span className='text-subtitle text-gray-100'>
                  Years of Experience
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
