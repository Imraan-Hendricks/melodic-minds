import { MapPinIcon } from '@heroicons/react/24/outline';

export function Locations() {
  return (
    <section className='px-5 py-24'>
      <div className='container mx-auto grid gap-12'>
        <div className='grid gap-8'>
          <h2 className='text-subtitle text-primary-400'>Our Locations</h2>
          <h1 className='text-title'>Find a studio near you</h1>
          <p className='text-body text-gray-500 max-w-4xl'>
            Explore Melodic Minds' Network of Cutting-Edge Recording Studios and
            Production Facilities Across the Country, and Find the One Nearest
            to You!
          </p>
        </div>
        <ul className='grid lg:grid-cols-2 gap-12'>
          {[
            {
              title: 'Cape Town Branch',
              body: 'Experience World-Class Sound in the Heart of the Mother City',
              email: 'capetown@melodicminds.com',
              contact: '074 548 6584',
            },
            {
              title: 'Johannesburg Branch',
              body: 'Unleash Your Creativity at Our High-Tech Recording Studio in Jozi',
              email: 'jhb@melodicminds.com',
              contact: '083 546 8454',
            },
            {
              title: 'Durban Branch',
              body: 'Create Magic with Our State-of-the-Art Recording Facilities in Durbs',
              email: 'durban@melodicminds.com',
              contact: '072 546 4523',
            },
            {
              title: 'Pretoria Branch',
              body: 'Elevate Your Sound in the Capital City with Our Expert Producers',
              email: 'pretoria@melodicminds.com',
              contact: '084 475 6521',
            },
          ].map(({ title, body, email, contact }) => (
            <li
              key={title}
              className='grid gap-6 justify-items-center border p-8'>
              <div>
                <MapPinIcon className='w-10 h-10 text-primary-400' />
              </div>
              <div className='grid gap-4 text-center'>
                <h3 className='text-h2'>{title}</h3>
                <p className='text-body text-gray-500 max-w-md'>{body}</p>
              </div>
              <div className='grid gap-1 justify-items-center'>
                <p className='text-body text-gray-700'>
                  <strong className='text-primary-500'>Email:</strong> {email}
                </p>
                <p className='text-body text-gray-700'>
                  <strong className='text-primary-500'>Contact:</strong>{' '}
                  {contact}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
