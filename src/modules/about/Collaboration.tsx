const features = [
  {
    title: 'Power of Collaboration',
    body: 'At Melodic Minds, we believe in the power of collaboration to produce exceptional music.',
    img: {
      src: '/collaboration/vocalist-1.jpg',
      alt: 'vocalist-1',
    },
  },
  {
    title: 'Range of Services',
    body: 'Our services include group recording sessions, songwriting, and artist development workshops.',
    img: {
      src: '/collaboration/vocalist-2.jpg',
      alt: 'vocalist-2',
    },
  },
  {
    title: 'Create Something Special',
    body: 'Collaborate with other artists, expand your network, learn new skills, and create something truly special.',
    img: {
      src: '/collaboration/vocalist-3.jpg',
      alt: 'vocalist-3',
    },
  },
];

export function Collaboration() {
  return (
    <section className='py-24 px-5'>
      <div className='container mx-auto grid gap-12'>
        <div className='grid gap-5 text-center'>
          <h1 className='text-title'>
            Collaborate and Create with Melodic Minds
          </h1>

          <p className='text-subtitle text-primary-600'>
            Join forces with talented artists and elevate your sound to new
            heights
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map(({ title, body, img }) => (
            <div key={title} className='grid gap-5 h-max'>
              <div className='rounded-md overflow-hidden'>
                <img className='w-full' src={img.src} alt={img.alt} />
              </div>
              <div key={title} className='grid gap-2 xl:gap-4'>
                <h2 className='text-h2'>{title}</h2>
                <p className='text-body text-gray-700'>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
