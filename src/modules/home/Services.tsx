import Link from 'next/link';
import { Button } from '@/components/button/Button';
import {
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

export function Services() {
  return (
    <section className='py-24 px-5'>
      <div className='container mx-auto grid xl:grid-cols-2 gap-16'>
        <div className='grid gap-8 h-max'>
          <h1 className='text-title text-center xl:text-start'>
            Expert Services at Our Premier Studio
          </h1>
          <p className='text-body text-gray-500 text-center xl:text-start'>
            Discover How Melodic Minds Can Help You Create Your Best Sound Yet -
            Explore Our Comprehensive Range of Features for Professional
            Recording Services, Designed to Elevate Your Music to the Next
            Level.
          </p>
          <Link href='/services'>
            <Button className='w-max mx-auto xl:mx-0' variant='contained'>
              Services
            </Button>
          </Link>
        </div>
        <div>
          {[
            {
              Icon: TrophyIcon,
              title: 'Professional Production Assistance',
              body: 'Our experienced producers work with you to bring your musical vision to life, with personalized guidance and attention to detail.',
            },
            {
              Icon: CalendarDaysIcon,
              title: 'Flexible Scheduling',
              body: 'We work around your schedule to provide convenient booking options, including weekend and evening sessions.',
            },
            {
              Icon: ClipboardDocumentListIcon,
              title: 'Customizable Packages',
              body: 'We offer customizable packages and discounts for multiple sessions to fit your unique needs and budget, without sacrificing quality.',
            },
          ].map(({ Icon, title, body }) => (
            <div key={title} className='grid gap-16 mb-16'>
              <hr />
              <div className='grid grid-cols-4'>
                <div className='bg-primary-300 p-2 rounded-md w-max h-max'>
                  <Icon className='w-8 h-8 text-gray-900' />
                </div>
                <div className='col-span-3 grid gap-2'>
                  <h2 className='text-h2'>{title}</h2>
                  <p className='text-body text-gray-500'>{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
