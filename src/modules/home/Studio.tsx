import Image from 'next/image';
import MixingBoardImage from '../../../public/home/studio/mixing-board.jpg';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export function Studio() {
  return (
    <section className='bg-black'>
      <div className='grid 2xl:grid-cols-2 gap-8 items-center'>
        <div className='grid gap-16 h-max container 2xl:max-w-3xl mx-auto py-24 px-5'>
          <div className='grid gap-8'>
            <h2 className='text-subtitle text-primary-500'>Recording Studio</h2>
            <h1 className='text-title text-gray-200'>
              Experience Unmatched Recording Quality
            </h1>
          </div>
          <hr className='border-primary-500' />
          <p className='text-body text-gray-400'>
            With a team of experienced engineers and producers, Melodic Minds
            offers a collaborative environment where musicians can feel
            comfortable and confident in their creative process. Whether{' '}
            {`you're`}
            looking to record a single or a full-length album, Melodic Minds is
            the perfect place to bring your music to life.
          </p>
          <ul className='grid gap-4'>
            {[
              'Our studio is stocked with a wide variety of top-quality microphones, from classic vintage models to the latest in digital recording technology.',
              'We use industry-standard software like Pro Tools, Logic Pro, and Ableton Live to ensure ',
              'Our studio is designed to be versatile and flexible, with multiple soundproofed rooms that can be configured to suit your unique needs and preferences.',
            ].map((text) => (
              <li key={text} className='flex items-center'>
                <div className='mr-4'>
                  <CheckCircleIcon className='w-8 h-8 text-primary-500' />
                </div>
                <span className='text-body text-gray-400'>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='relative'>
            <Image
              className='absolute inset-0 object-cover w-full h-full'
              src={MixingBoardImage}
              alt='mixing-board'
            />
            <div className='relative bg-black/50'>
              <Image
                className='w-full invisible'
                src={MixingBoardImage}
                alt='mixing-board'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
