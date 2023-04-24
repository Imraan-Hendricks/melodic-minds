export function PrivacyPolicy() {
  return (
    <section>
      <div className='grid gap-8'>
        <div className='grid gap-8'>
          <h2 className='text-subtitle text-primary-500'>Privacy Policy</h2>
          <h1 className='text-title'>
            Melodic <span className='text-primary-500'>Minds</span> is committed
            to protecting your privacy
          </h1>
          <p className='text-body text-gray-500'>
            This Privacy Policy outlines how we collect, use, disclose, and
            protect the personal information of our website visitors and
            customers.
          </p>
          <hr />
        </div>
        <div className='grid gap-8'>
          {[
            {
              title: '1) Information We Collect',
              body: 'We may collect personal information such as your name, email address, and phone number when you visit our website, fill out a contact form, or sign up for our newsletter. We also collect information about your computer, including your IP address, browser type, and operating system.',
            },
            {
              title: '2) How We Use Your Information',
              body: 'We use your personal information to communicate with you, provide you with our services, and improve our website. We may also use your information to send you newsletters, promotional materials, and other updates about our business.',
            },
            {
              title: '3) Disclosure of Your Information',
              body: 'We will not sell, rent, or disclose your personal information to third parties except as described in this Privacy Policy. We may disclose your information to our service providers who assist us with our business operations, such as website hosting, payment processing, and email delivery.',
              body2:
                'We may also disclose your personal information if required to do so by law or if we believe that such action is necessary to comply with legal obligations or to protect our rights and property.',
            },
            {
              title: '4) Security of Your Information',
              body: 'We take reasonable steps to protect your personal information from unauthorized access, disclosure, or modification. However, no security measures are completely foolproof, and we cannot guarantee the security of your information.',
            },
            {
              title: '5) Cookies and Tracking Technologies',
              body: 'We use cookies and similar tracking technologies to collect information about your use of our website. Cookies are small data files that are stored on your device when you visit our website. They help us to provide you with a better experience and to analyze how our website is used.',
            },
            {
              title: '6) Third-Party Links',
              body: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to read their privacy policies.',
            },
            {
              title: '7) Changes to Our Privacy Policy',
              body: 'We reserve the right to modify this Privacy Policy at any time. We will post any changes on this page and update the modification date below.',
            },
            {
              title: '8) Contact Us',
              body: 'If you have any questions about this Privacy Policy, please contact us at info@melodicminds.com.',
              body2: 'Last Updated: 20 April 2023',
            },
          ].map(({ title, body, body2 }) => (
            <div key={title} className='grid gap-4'>
              <h3 className='text-h2'>{title}</h3>
              <p className='text-body text-gray-500'>{body}</p>
              <p className='text-body text-gray-500'>{body2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
