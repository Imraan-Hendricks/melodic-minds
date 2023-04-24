export function Testimonials() {
  return (
    <section className='bg-primary-100 py-24 px-5 h-auto lg:p-main'>
      <div className='container mx-auto grid gap-16'>
        <div className='grid gap-8'>
          <h1 className='text-subtitle text-primary-500'>Testimonials</h1>
          <h1 className='text-title max-w-3xl'>
            Melodic Minds in the Words of Our Clients
          </h1>
        </div>
        <div className='grid gap-4 2xl:grid-cols-4 h-full'>
          <article className='relative article bg-primary-500 lg:col-span-2 rounded-lg px-5 py-5 grid gap-5'>
            <div className='absolute right-12 top-2 z-0 hidden md:block'>
              <svg
                className='fill-primary-400'
                xmlns='http://www.w3.org/2000/svg'
                width='104'
                height='102'>
                <path
                  d='M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z'
                  fillRule='nonzero'
                />
              </svg>
            </div>
            <div className='z-10 grid gap-5'>
              <div className='flex items-center gap-4'>
                <img
                  className='w-10 h-10 rounded-full border-2'
                  src='./home/testimonials/sofia-rodriguez.jpg'
                  alt='client-profile'
                />
                <div>
                  <h1 className='text-h3 text-gray-100'>Sofia Rodriguez</h1>
                  <p className='text-fineprint text-gray-100/80'>Musician</p>
                </div>
              </div>
              <div className='grid gap-5'>
                <p className='text-largeprint text-white font-bold'>
                  Melodic Minds: Where Musical Dreams Come to Life
                </p>
                <p className='text-body text-gray-100/80'>
                  “ As a seasoned musician with over a decade of experience,
                  I've worked with my fair share of recording studios. But
                  Melodic Minds truly stands out as the best of the best. From
                  the moment I stepped into their studio, I was blown away by
                  their attention to detail and commitment to excellence. The
                  engineers are true experts in their field, and the equipment
                  is second to none. ”
                </p>
              </div>
            </div>
          </article>

          <article className='article bg-gray-600 rounded-lg px-5 py-5 grid gap-5'>
            <div className='flex items-center gap-4'>
              <img
                className='w-10 h-10 rounded-full border-2'
                src='./home/testimonials/tom-green.jpg'
                alt='client-profile'
              />
              <div>
                <h1 className='text-h3 text-gray-100'>Tom Green</h1>
                <p className='text-fineprint text-gray-100/80'>Vocalist</p>
              </div>
            </div>
            <div className='grid gap-5'>
              <p className='text-largeprint text-white font-bold'>
                Unleashing My Creativity with Melodic Minds
              </p>
              <p className='text-body text-gray-100/80'>
                “ I was blown away by the exceptional quality of production
                provided by Melodic Minds. They really know how to bring out the
                best in every recording. ”
              </p>
            </div>
          </article>

          <article className='article bg-White lg:order-4 rounded-lg px-5 py-5 grid gap-5'>
            <div className='flex items-center gap-4'>
              <img
                className='w-10 h-10 rounded-full border-2'
                src='./home/testimonials/brian-lee.jpg'
                alt='client-profile'
              />
              <div>
                <h1 className='text-h3 text-gray-900'>Brian Lee</h1>
                <p className='text-fineprint text-gray-900/80'>Producer</p>
              </div>
            </div>
            <div className='grid gap-5'>
              <p className='text-largeprint text-gray-900 font-bold'>
                A Recording Studio That Understands Musicians: Melodic Minds
              </p>
              <p className='text-body text-gray-900/80'>
                “ Melodic Minds provided professional and efficient service
                during my recording session. Their expertise in audio
                engineering ensured a seamless process from start to finish. ”
              </p>
            </div>
          </article>

          <article className='article bg-gray-900 lg:col-span-2 lg:order-5 rounded-lg px-5 py-5 grid gap-5'>
            <div className='flex items-center gap-4'>
              <img
                className='w-10 h-10 rounded-full border-2 border-primary-500'
                src='./home/testimonials/sara-thompson.jpg'
                alt='client-profile'
              />
              <div>
                <h1 className='text-h3 text-gray-100'>Sara Thompson</h1>
                <p className='text-fineprint text-gray-100/70'>Song Writer</p>
              </div>
            </div>
            <div className='grid gap-5'>
              <p className='text-largeprint text-white font-bold'>
                From Idea to Masterpiece: My Experience with Melodic Minds
              </p>
              <p className='text-body text-gray-100/70'>
                “ As an up-and-coming singer-songwriter, I was looking for a
                studio that could bring my vision to life. Melodic Minds
                exceeded my expectations in every way possible. From the
                state-of-the-art equipment to the world-class engineers,
                everything was top-notch. But what truly sets Melodic Minds
                apart is their passion and dedication to helping artists like me
                achieve their dreams. I couldn't be more grateful for the
                incredible experience I had at Melodic Minds. ”
              </p>
            </div>
          </article>

          <article className='article bg-White lg:row-span-2 lg:order-3 rounded-lg px-5 py-5 grid gap-5'>
            <div className='flex items-center gap-4'>
              <img
                className='w-10 h-10 rounded-full border-2 border-gray-400'
                src='./home/testimonials/samantha-johnson.jpg'
                alt='client-profile'
              />
              <div>
                <h1 className='text-h3 text-gray-900'>Samantha Johnson</h1>
                <p className='text-fineprint text-gray-900/80'>
                  Recording Artist
                </p>
              </div>
            </div>
            <div className='grid gap-5'>
              <p className='text-largeprint font-bold text-gray-900'>
                Incredible Studio, Incredible Experience: Melodic Minds
              </p>
              <p className='text-body text-gray-900/80'>
                “ I cannot recommend Melodic Minds enough! The studio
                environment is warm and inviting, and the engineers are
                top-notch professionals. The team really took the time to
                understand my vision and translate it into a sonically stunning
                final product. From the choice of microphones and preamps to the
                quality of the mixes, everything exceeded my expectations. I
                particularly appreciated how the team made me feel comfortable
                during the recording process, offering constructive feedback and
                guidance when needed. They also have a great selection of gear
                that really helped me to achieve the sound I was looking for.
                Overall, Melodic Minds is the perfect choice for any artist
                looking for a truly exceptional recording experience. ”
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
