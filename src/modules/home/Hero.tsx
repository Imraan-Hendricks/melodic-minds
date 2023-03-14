import { CheckIcon } from '@heroicons/react/24/outline';

export function Hero() {
  return (
    <section className='bg-black px-5'>
      <div className='flex flex-col md:flex-row justify-evenly items-center pb-12 md:pb-0'>
        <div>
          <img src='/hero/mic.jpg' alt='microphone' />
        </div>
        <div className='grid gap-8 content-center'>
          <div className='grid gap-5 h-max'>
            <h1 className='text-title text-gray-50'>
              Melodic <span className='text-primary-500'>Minds</span>
            </h1>
            <hr className='border-primary-400' />
            <p className='text-subtitle text-gray-400 max-w-3xl'>
              Unleash your creativity and elevate your sound with Melodic Minds
              - the ultimate recording studio for bringing your music to life.
            </p>
          </div>
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-8'>
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
                className='text-body flex items-center text-gray-50'>
                <div className='mr-4 bg-primary-400 w-max rounded-full p-1'>
                  <CheckIcon className='w-4 h-4 text-black' />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
