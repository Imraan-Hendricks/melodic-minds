import { clsx } from 'clsx';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsAndConditions } from './TermsAndConditions';
import { useRouter } from 'next/router';

export function Legal() {
  const { push, query } = useRouter();
  const option = query.option as string;

  return (
    <section className='px-5 py-24'>
      <div className='container max-w-7xl mx-auto flex flex-col xl:flex-row gap-12'>
        <ul className='grid grid-cols-2 xl:grid-cols-1 gap-2 h-max xl:min-w-[12rem] w-max'>
          {[
            {
              name: 'Privacy Policy',
              reference: 'privacy-policy',
              href: '/legal/privacy-policy',
            },
            {
              name: 'Terms and Conditions',
              reference: 'terms-and-conditions',
              href: '/legal/terms-and-conditions',
            },
          ].map(({ name, reference, href }) => (
            <li
              key={reference}
              onClick={() => push(href)}
              className={clsx(
                'text-body text-gray-500 cursor-pointer hover:text-black active:text-gray-600 transition-colors',
                option === reference &&
                  'text-primary-500 cursor-auto hover:text-primary-500 active:text-primary-500'
              )}>
              {name}
            </li>
          ))}
        </ul>
        <div>
          {option === 'privacy-policy' ? (
            <PrivacyPolicy />
          ) : option === 'terms-and-conditions' ? (
            <TermsAndConditions />
          ) : (
            <p>Select an option</p>
          )}
        </div>
      </div>
    </section>
  );
}
