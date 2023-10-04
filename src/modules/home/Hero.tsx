import Link from 'next/link';
import { BsSoundwave } from 'react-icons/bs';
import { Button } from '@/components/Button';

export function Hero() {
  return (
    <section className='bg-black px-5 py-12 sm:py-24'>
      <div className='container max-w-5xl mx-auto'>
        <div className='grid gap-8 content-center'>
          <div className='grid gap-5 h-max'>
            <h1 className='text-title text-gray-50 text-center'>
              Melodic <span className='text-primary-500'>Minds</span>
            </h1>
            <p className='text-subtitle text-gray-400 max-w-3xl text-center mx-auto'>
              Unleash your creativity and elevate your sound with Melodic Minds
              - the ultimate recording studio for bringing your music to life.
            </p>
          </div>
          <hr className='border-primary-400' />
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 sm:gap-y-8 mx-auto'>
            {[
              'Pro-level gear',
              'Expert engineers',
              'Creative space',
              'Soundproof rooms',
              'Customized setups',
              'Acoustic perfection',
            ].map((feature) => (
              <li
                key={feature}
                className='text-body flex flex-col sm:flex-row items-center text-gray-50 gap-2'>
                <div className='sm:mr-4 bg-primary-700 w-max rounded-sm p-1.5'>
                  <BsSoundwave className='w-6 h-6 text-white' />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <hr className='border-primary-400' />
          <div className='flex gap-3 mx-auto'>
            <Link href='/services'>
              <Button variant='contained'>Explore Services</Button>
            </Link>
            <Link href='/contact'>
              <Button
                className='text-white active:text-white'
                variant='outlined'>
                Book Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
