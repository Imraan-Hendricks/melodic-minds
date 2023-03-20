export function Article() {
  return (
    <section className='px-5 py-24 bg-black'>
      <div className='container mx-auto grid gap-12'>
        <div className='grid gap-5 text-center'>
          <h1 className='text-title text-gray-300'>
            Welcome to <span className='text-white'>Melodic</span>{' '}
            <span className='text-primary-500'>Minds</span>
          </h1>
          <p className='text-subtitle text-primary-400'>
            Your Destination for Professional Sound Production
          </p>
        </div>
        <div className='rounded-md overflow-hidden'>
          <img className='w-full' src='/article/concert.jpg' alt='concert' />
        </div>
        <div className='grid gap-5'>
          <div className='grid gap-2'>
            <h2 className='text-h1 text-gray-300'>
              Experience the Ultimate Recording Studio
            </h2>
            <h2 className='text-subtitle text-gray-400'>
              <span className='text-primary-400'>Your sound, our passion</span>{' '}
              - Professional sound engineering and production.
            </h2>
          </div>
          <div className='grid md:grid-cols-2 gap-5'>
            <p className='text-body text-gray-400'>
              At Melodic Minds, we are dedicated to providing a unique and
              customized recording experience for each of our clients. Our
              state-of-the-art facilities and team of skilled engineers and
              producers are committed to delivering high-quality results that
              exceed expectations. From recording and mixing to mastering and
              post-production, we offer a range of services designed to take
              your music to the next level.
            </p>
            <p className='text-body text-gray-400'>
              With years of experience in the industry, our team is passionate
              about working with talented artists and helping them realize their
              musical vision. We pride ourselves on providing a comfortable and
              inspiring atmosphere for all our clients, ensuring that their time
              at Melodic Minds is both productive and enjoyable. Contact us
              today to see how we can help you achieve your musical goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
