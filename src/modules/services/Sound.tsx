import Image from 'next/image';
import AKGLogo from '../../../public/services/sound/akg-logo.png';
import SennheiserLogo from '../../../public/services/sound/sennheiser-logo.png';
import ShureLogo from '../../../public/services/sound/shure-logo.png';
import ElectroVoiceLogo from '../../../public/services/sound/electro-voice-logo.png';
import RodeLogo from '../../../public/services/sound/rode-logo.png';
import Link from 'next/link';
import {
  AcademicCapIcon,
  AdjustmentsVerticalIcon,
  ComputerDesktopIcon,
  FilmIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  PhoneIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import { isEven } from '@/utils/common';

export function Sound() {
  return (
    <section className='py-24 px-5'>
      <div className='container mx-auto grid gap-12'>
        <div className='grid gap-5 text-center'>
          <div className='grid gap-2'>
            <h2 className='text-body text-primary-500'>Sound Services</h2>
            <h1 className='text-title'>
              Elevate Your Music with Melodic Minds
            </h1>
          </div>
          <p className='text-subtitle text-gray-500'>
            Experience the power of professional sound engineering and
            production
          </p>
        </div>
        <hr />
        <div className='grid lg:grid-cols-3 gap-y-12 lg:gap-y-24 gap-x-8 justify-items-center'>
          {[
            {
              Icon: MicrophoneIcon,
              title: 'Recording',
              body: 'High-quality sound in a state-of-the-art facility',
              link: { text: 'Learn more about recording', href: '/' },
            },
            {
              Icon: AdjustmentsVerticalIcon,
              title: 'Mixing',
              body: 'Perfectly balance elements to create a polished sound',
              link: {
                text: 'Learn more about mixing',
                href: '/',
              },
            },
            {
              Icon: ComputerDesktopIcon,
              title: 'Mastering',
              body: 'Make your tracks loud, clear, and ready for distribution',
              link: { text: 'Learn more about mastering', href: '/' },
            },
            {
              Icon: MegaphoneIcon,
              title: 'Vocal Production',
              body: 'Enhance your vocals with dedicated recording and engineers',
              link: { text: 'Learn more about vocal production', href: '/' },
            },
            {
              Icon: MusicalNoteIcon,
              title: 'Music Production',
              body: 'Transform your ideas into fully-realized productions',
              link: { text: 'Learn more about music production', href: '/' },
            },
            {
              Icon: SpeakerWaveIcon,
              title: 'Sound Design',
              body: 'Create custom sounds to add a special touch',
              link: { text: 'Learn more about sound design', href: '/' },
            },
            {
              Icon: FilmIcon,
              title: 'Post-Production',
              body: 'Audio for film, TV, and video games',
              link: { text: 'Learn more about post-production', href: '/' },
            },
            {
              Icon: AcademicCapIcon,
              title: 'Studio Musicians',
              body: 'Add instrumentation to bring your songs to life',
              link: {
                text: 'Learn more about studio musicians',
                href: '/',
              },
            },
            {
              Icon: PhoneIcon,
              title: 'Consultation',
              body: 'Get guidance on songwriting, branding, and promotion',
              link: { text: 'Learn more about consultations', href: '/' },
            },
          ].map(({ Icon, title, body, link }, i) => (
            <div
              key={title}
              className={clsx(
                'grid gap-5 text-center border px-5 py-8 rounded-md w-full',
                isEven(i)
                  ? 'bg-primary-100 lg:bg-white'
                  : 'bg-white lg:bg-primary-100'
              )}>
              <div className='mx-auto bg-primary-100 w-max h-max p-2 rounded-md'>
                <Icon className='w-8 h-8 text-primary-500' />
              </div>
              <h2 className='text-h2'>{title}</h2>
              <p className='text-body text-gray-500 max-w-md mx-auto'>{body}</p>
              <Link
                className='text-body text-primary-500 hover:text-primary-400'
                href={link.href}>
                {link.text}
              </Link>
            </div>
          ))}
        </div>
        <div className='pt-8'>
          <hr />
        </div>
        <div className='container mx-auto grid sm:grid-cols-5 gap-12 sm:gap-6 md:gap-9 lg:gap-12 justify-center items-center'>
          {[
            { src: AKGLogo, alt: 'akg' },

            { src: SennheiserLogo, alt: 'sennheiser' },
            { src: ShureLogo, alt: 'shure' },
            {
              src: ElectroVoiceLogo,
              alt: 'electro-voice',
            },
            { src: RodeLogo, alt: 'rode' },
          ].map(({ src, alt }) => (
            <div className='mx-32 sm:mx-0' key={alt}>
              <Image className='w-ful' src={src} alt={alt} placeholder='blur' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
