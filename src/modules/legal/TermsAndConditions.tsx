import { ChevronRightIcon } from '@heroicons/react/24/outline';

export function TermsAndConditions() {
  return (
    <section>
      <div className='grid gap-8'>
        <div className='grid gap-8'>
          <h2 className='text-subtitle text-primary-500'>
            Terms and Conditions
          </h2>
          <h1 className='text-title'>
            Terms and Conditions for the Use of the Melodic{' '}
            <span className='text-primary-500'>Minds</span> Services
          </h1>
          <p className='text-body text-gray-500'>
            These terms and conditions govern your use of the Melodic Minds
            Studio website. By using our website, you accept these terms and
            conditions in full. If you disagree with these terms and conditions,
            you must not use our website.
          </p>
          <hr />
        </div>
        <div className='grid xl:grid-cols-2 gap-8'>
          {[
            {
              title: '1) Intellectual Property',
              body: 'Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all our intellectual property rights are reserved.',
            },
            {
              title: '2) License to use website',
              body: 'You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.',
            },
            {
              title: '3) Restrictions',
              body: 'You must not:',
              items: [
                'Republish material from this website without permission',
                'Sell, rent or sub-license material from this website',
                'Reproduce, duplicate or copy material from this website',
                'Edit or otherwise modify any material on the website',
              ],
            },
            {
              title: '4) Acceptable use',
              body: 'You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.',
            },
            {
              title: '5) Privacy policy',
              body: 'Your privacy is important to us. Our privacy policy governs the collection, use, and disclosure of your personal information.',
            },
            {
              title: '6) Limitations of liability',
              body: 'We will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special, or consequential loss.',
            },
            {
              title: '7) Variation',
              body: 'We may revise these terms and conditions from time-to-time. The revised terms and conditions shall apply to the use of our website from the date of publication of the revised terms and conditions on our website.',
            },
            {
              title: '8) Entire agreement',
              body: 'These terms and conditions, together with our privacy policy, constitute the entire agreement between you and us in relation to your use of our website.',
            },
          ].map(({ title, body, items }) => (
            <div key={title} className='grid gap-4'>
              <h3 className='text-h2'>{title}</h3>
              <p className='text-body text-gray-500'>{body}</p>
              <ul>
                {items?.map((item) => (
                  <li key={item} className='flex gap-2 items-center'>
                    <ChevronRightIcon className='w-4 h-4 text-primary-500' />
                    <span className='text-body text-gray-500'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
