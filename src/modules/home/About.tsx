import Image from 'next/image';
import MicImage from '../../../public/home/about/purple-mic.jpg';
import VocalistImage from '../../../public/home/about/vocalist-1.jpg';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export function About() {
  return (
    <section className='px-5 py-24'>
      <div className='container mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        <div className='grid gap-8 h-max'>
          <h1 className='text-title max-w-xl'>
            Creating the music you envision
          </h1>
          <p className='text-body text-gray-500'>
            At Melodic Minds, we turn your musical dreams into reality with our
            state-of-the-art facilities and world-class engineering team. Our
            engineers and producers have years of experience and are skilled in
            capturing the essence of your unique sound.
          </p>
          <div className='grid gap-4'>
            <h2 className='text-h2 text-gray-800'>Tailored music production</h2>
            <ul className='grid gap-2'>
              {[
                'Range of Comprehensive Production Services',
                'Mastering and Post-Production Services',
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
          <Link href='/contact'>
            <Button className='w-max' variant='contained'>
              Get Started
            </Button>
          </Link>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 sm:gap-4 md:gap-8'>
          <div className='w-full row-span-2 rounded-md overflow-hidden'>
            <Image
              placeholder='blur'
              className='w-full'
              src={MicImage}
              alt='microphone'
            />
          </div>
          <div className='w-full rounded-md overflow-hidden'>
            <Image
              placeholder='blur'
              className='h-full'
              src={VocalistImage}
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
