import {
  AcademicCapIcon,
  ClipboardIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

export function Studio() {
  return (
    <div className='relative'>
      <img
        className='absolute inset-0 object-cover w-full h-full'
        src='/home/studio/recording-studio.jpg'
        alt='recording studio'
      />
      <div className='relative bg-black/90'>
        <section className='py-24 px-5'>
          <div className='container mx-auto grid gap-12'>
            <div className='grid lg:grid-cols-2 gap-y-24 gap-x-12'>
              <h1 className='text-title text-gray-50 text-center lg:text-start'>
                Explore Our <br />{' '}
                <span className='text-primary-400'>World-Class Facilities</span>
              </h1>
              {[
                {
                  Icon: MusicalNoteIcon,
                  title: 'Versatile Recording Spaces',
                  body: 'Our state-of-the-art facilities offer versatile recording spaces, including live rooms and isolation booths, to capture any sound.',
                },
                {
                  Icon: AcademicCapIcon,
                  title: 'High-end Equipment',
                  body: 'Our cutting-edge equipment ensures that every recording is of the highest quality, from microphones to monitors.',
                },
                {
                  Icon: ClipboardIcon,
                  title: 'Skilled Engineers',
                  body: 'Our experienced engineers provide world-class expertise and guidance to help bring your musical vision to life.',
                },
                {
                  Icon: ComputerDesktopIcon,
                  title: 'Creative Environment',
                  body: 'Our creative and collaborative environment inspires artists to reach new heights and create something truly special.',
                },
                {
                  Icon: StarIcon,
                  title: 'Personalized Approach',
                  body: `We offer a personalized approach to every recording project, ensuring that each artist's unique vision and style is captured and brought to life.`,
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className='flex flex-col lg:flex-row'>
                  <div className='bg-primary-400 p-2 rounded-md w-max h-max mx-auto lg:mx-0 mb-5 lg:mb:0'>
                    <Icon className='w-8 h-8 text-gray-900' />
                  </div>
                  <div className='lg:ml-8 grid gap-5 lg:gap-3 text-center lg:text-start'>
                    <h2 className='text-h2 text-gray-200'>{title}</h2>
                    <p className='text-body text-gray-400 max-w-lg mx-auto lg:mx-0'>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
