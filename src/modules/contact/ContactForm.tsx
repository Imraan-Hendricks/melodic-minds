import { Button } from '@/components/button/Button';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { TextArea } from '@/components/form/TextArea';
import { TextField } from '@/components/form/TextField';

export function ContactForm() {
  return (
    <div className='relative'>
      <img
        className='absolute inset-0 object-cover w-full h-full'
        src='/contact/recording-studio.jpg'
        alt='recording studio'
      />
      <div className='relative bg-black/90'>
        <section className='px-5 py-24'>
          <div className='container mx-auto grid xl:grid-cols-2 gap-12 items-center justify-center'>
            <div className='grid gap-8 h-max'>
              <h2 className='text-subtitle text-primary-500'>Contact Us</h2>
              <h1 className='text-title text-gray-50'>Get in touch with us</h1>
              <p className='text-body text-gray-400 max-w-lg '>
                Contact us today to schedule a consultation. Our team is always
                ready to answer any questions you may have and help you create
                the perfect recording experience.
              </p>
              <ul className='grid gap-12'>
                {[
                  {
                    Icon: MapPinIcon,
                    name: 'Head Office',
                    value: '312 Kloof Street, Cape Town',
                  },
                  {
                    Icon: PhoneIcon,
                    name: 'Phone Number',
                    value: '073 458 2154',
                  },
                  {
                    Icon: EnvelopeIcon,
                    name: 'Email Address',
                    value: 'info@melodicminds.com',
                  },
                ].map(({ Icon, name, value }) => (
                  <li key={name} className='flex items-center'>
                    <div className='bg-primary-400 p-3 rounded-md w-max h-max mr-4'>
                      <Icon className='w-8 h-8 text-gray-900' />
                    </div>
                    <div>
                      <h3 className='text-h2 text-gray-50'>{name}</h3>
                      <p className='text-body text-gray-400'>{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <form className='grid gap-8 text-white'>
              <TextField
                light
                name='Name'
                label='Name'
                placeholder='Enter name'
              />
              <TextField
                light
                name='Email'
                label='Email'
                placeholder='Enter Email'
              />
              <TextArea
                light
                name='Message'
                label='Message'
                placeholder='Enter message'
                rows={5}
              />
              <Button className=' min-h-[3.25rem]' variant='contained'>
                Send Enquiry
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
