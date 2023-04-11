import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export function FAQ() {
  return (
    <section className='px-5 py-24 bg-gray-50'>
      <div className='container mx-auto max-w-7xl grid gap-16'>
        <div className='grid gap-4'>
          <h2 className='text-subtitle text-primary-400 text-center'>FAQ</h2>
          <h1 className='text-title text-center'>Frequently ask questions</h1>
          <p className='text-body text-gray-500 max-w-4xl mx-auto'>
            Find the Answers You're Looking For About Our Recording Facilities
          </p>
        </div>
        <ul className='grid lg:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-16 xl:gap-y-20 2xl:gap-y-24'>
          {[
            {
              title: 'What services do you offer at Melodic Minds?',
              body: 'We offer a range of professional recording services, including studio time, mixing, mastering, and production assistance.',
            },
            {
              title: 'What types of music do you work with?',
              body: 'We work with artists in all genres of music, from pop to rock, hip-hop to jazz, and everything in between.',
            },
            {
              title: 'How long are your recording sessions?',
              body: 'Our recording sessions are typically 4-6 hours long, but we can customize session lengths to fit your needs.',
            },
            {
              title:
                'Do you offer package deals or discounts for multiple sessions?',
              body: 'Yes, we offer package deals and discounts for clients who book multiple sessions with us.',
            },
            {
              title: 'Can I bring my own engineer or producer to the studio?',
              body: 'Absolutely. While our in-house team of engineers and producers are available to assist you, you are welcome to bring your own team as well.',
            },
            {
              title: 'How do I book a session at Melodic Minds?',
              body: 'You can book a session by contacting us through our website, emailing us, or giving us a call.',
            },
          ].map(({ title, body }) => (
            <li key={title} className='flex'>
              <div className='bg-primary-200 w-max h-max rounded-lg p-2 mr-4 lg:mr-8'>
                <QuestionMarkCircleIcon className='w-8 h-8 text-gray-900' />
              </div>
              <div className='grid gap-2 h-max'>
                <h3 className='text-h2'>{title}</h3>
                <p className='text-body text-gray-500'>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
