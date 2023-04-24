import Link from 'next/link';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';

export function Footer() {
  return (
    <footer className='bg-black'>
      <div className='container mx-auto px-5 py-12'>
        <div className='grid grid-cols-1 gap-10 lg:gap-8'>
          <div className='grid grid-cols-8 gap-10 lg:gap-5'>
            <div className='col-span-8 lg:col-span-4'>
              <div className='grid grid-cols-1 gap-5'>
                <div className='flex items-center'>
                  <MusicalNoteIcon className='h-8 w-auto sm:h-10 mr-3 text-primary-400' />
                  <h1 className='text-h1 text-gray-200'>
                    Melodic <span className='text-primary-500'>Minds</span>
                  </h1>
                </div>
                <p className='text-body text-gray-400 pr-0 xs:pr-12 sm:pr-28 md:pr-36 lg:pr-32'>
                  Experience the power of professional sound engineering and
                  production.
                </p>
                <p className='text-body text-gray-400 pr-0 xs:pr-12 sm:pr-28 md:pr-36 lg:pr-32'>
                  We are passionate about working with talented artists and
                  helping them realize their musical vision.
                </p>
              </div>
            </div>
            <div className='col-span-8 sm:col-span-4 lg:col-span-2'>
              <div className='grid grid-cols-1 gap-5'>
                <h2 className='text-h2 text-gray-200'>Contacts</h2>
                {[
                  { name: 'Phone:', value: '074 5554 848' },
                  { name: 'Email:', value: 'info@melodicminds.com' },
                  { name: 'Address:', value: '312 Kloof Street, CPT' },
                ].map(({ name, value }) => (
                  <p key={name} className='text-body text-gray-400'>
                    {name} <span className='text-primary-400'>{value}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className='col-span-8 sm:col-span-4 lg:col-span-2'>
              <div className='grid grid-cols-1 gap-5'>
                <h2 className='text-h2 text-gray-200'>Social</h2>
                <div className='flex items-center space-x-3'>
                  {[
                    { icon: faTwitter, href: 'https://www.twitter.com' },
                    { icon: faInstagram, href: 'https://www.instagram.com' },
                    { icon: faFacebook, href: 'https://www.facebook.com' },
                  ].map(({ icon, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className='group text-gray-500 transition-colors duration-300 hover:text-primary-500'>
                      <FontAwesomeIcon
                        icon={icon}
                        className='w-6 h-6 text-primary-500 group-hover:text-gray-50'
                      />
                    </Link>
                  ))}
                </div>
                <p className='text-body text-gray-400'>
                  Follow us on social media to join our community of music
                  lovers.
                </p>
              </div>
            </div>
          </div>
          <hr className='border-gray-600' />
          <div className='flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center'>
            <p className='text-fineprint text-gray-400 mb-5 md:mb-0'>
              © Copyright 2023 <span className='text-gray-50'>Melodic</span>{' '}
              <span className='text-primary-400'>Minds</span>. All rights
              reserved.
            </p>
            <div className='flex'>
              {[
                { name: 'F.A.Q', href: '/contact?navigate=FAQ' },
                { name: 'Privacy Policy', href: '/legal/privacy-policy' },
                {
                  name: 'Terms & Conditions',
                  href: '/legal/terms-and-conditions',
                },
              ].map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className='text-fineprint text-gray-400 mr-5 cursor-pointer hover:text-gray-50'>
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
