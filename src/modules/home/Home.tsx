import { CustomHead } from '@/components/CustomHead';

export default function Home() {
  return (
    <main>
      <CustomHead title='Home' />
      <section className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-title'>Melodic Minds</h1>
        <p className='text-subtitle text-gray-600 text-center max-w-3xl mt-2'>
          Unleash your creativity and elevate your sound with Melodic Minds -
          the ultimate recording studio for bringing your music to life.
        </p>
      </section>
    </main>
  );
}
