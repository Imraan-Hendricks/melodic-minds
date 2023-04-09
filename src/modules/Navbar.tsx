import Link from 'next/link';
import {
  Bars3Icon,
  MusicalNoteIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export function Navbar() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/Blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <Popover as='header' className='relative bg-black'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between border-b border-gray-600 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <MusicalNoteIcon className='h-8 w-auto sm:h-10 text-primary-400' />
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-primary-500 p-2 text-white hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
            {links.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className='text-body text-gray-400 hover:text-gray-50'>
                {name}
              </Link>
            ))}
          </Popover.Group>
          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <Link
              href='/auth/signin'
              className='text-button whitespace-nowrap text-gray-400 hover:text-gray-50'>
              Sign in
            </Link>
            <Link
              href='/auth/signup'
              className='text-button ml-8 inline-flex items-center justify-center whitespace-nowrap rounded border border-transparent bg-primary-500 px-4 py-2 text-white shadow-sm hover:bg-primary-700'>
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'>
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <MusicalNoteIcon className='h-8 w-auto sm:h-10 text-primary-400' />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='space-y-6 py-6 px-5'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                {links.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className='text-body text-gray-500 hover:text-gray-900'>
                    {name}
                  </Link>
                ))}
              </div>
              <div>
                <Link
                  href='/auth/signup'
                  className='text-button flex w-full items-center justify-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-white shadow-sm hover:bg-primary-700'>
                  Sign up
                </Link>
                <p className='text-body mt-6 text-center text-gray-500'>
                  Existing customer?{' '}
                  <Link
                    href='/auth/signin'
                    className='text-primary-500 hover:text-primary-400'>
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
