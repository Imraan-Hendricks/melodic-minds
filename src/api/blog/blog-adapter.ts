export interface Post {
  date: string;
  name: string;
  title: string;
  description: string;
  location: string;
  markdown: string;
  img: {
    src: string;
    alt: string;
  };
}

export function getPosts() {
  return new Promise<Post[]>((res, rej) => {
    res(posts);
  });
}

const posts = [
  {
    date: '12 April 2023',
    name: 'inside-the-studio-with-midnight-mirage',
    title: 'Inside the Studio with Midnight Mirage',
    description:
      'Midnight Mirage teamed up with Melodic Minds to record their latest single. Follow their journey from start to finish.',
    location: '/blog/posts/inside-the-studio-with-midnight-mirage',
    markdown: '/blog/inside-the-studio-with-midnight-mirage.md',
    img: {
      src: '/blog/inside-the-studio-with-midnight-mirage.jpg',
      alt: 'midnight-mirage',
    },
  },
  {
    date: '4 April 2023',
    name: 'its-show-time-with-alex-andrews',
    title: 'Its show time with Alex Andrews',
    description:
      'Join us for an inside look at the recording process with up-and-coming artist Alex James. From songwriting to mastering, we take you through every step.',
    location: '/blog/posts/its-show-time-with-alex-andrews',
    markdown: '/blog/its-show-time-with-alex-andrews.md',
    img: {
      src: '/blog/its-show-time-with-alex-andrews.jpg',
      alt: 'alex-andrew',
    },
  },
  {
    date: '21 March 2023',
    name: 'the-melodic-minds-studio-rig',
    title: 'The Melodic Minds Studio Rig',
    description:
      'Take a tour of our studio rig and show you the gear that makes our productions stand out.',
    location: '/blog/posts/the-melodic-minds-studio-rig',
    markdown: '/blog/the-melodic-minds-studio-rig.md',
    img: { src: '/blog/the-melodic-minds-studio-rig.jpg', alt: 'studio-rig' },
  },
  {
    date: '2 March 2023',
    name: 'rocking-out-with-firefly',
    title: 'Rocking Out with Firefly',
    description:
      'Firefly, an up-and-coming alternative rock artist, recently worked with Melodic Minds to record her latest EP.',
    location: '/blog/posts/rocking-out-with-firefly',
    markdown: '/blog/rocking-out-with-firefly.md',
    img: { src: '/blog/rocking-out-with-firefly.jpg', alt: 'firefly' },
  },
  {
    date: '21 March 2023',
    name: 'jackson-parker-a-country-music-sensation',
    title: 'Jackson Parker: A Country Music Sensation',
    description:
      'Jackson Parker is a rising star in the country music scene, and Melodic Minds was lucky enough to have him in the studio to record his highly anticipated new album.',
    location: '/blog/posts/jackson-parker-a-country-music-sensation',
    markdown: '/blog/jackson-parker-a-country-music-sensation.md',
    img: {
      src: '/blog/jackson-parker-a-country-music-sensation.jpg',
      alt: 'jackson-parker',
    },
  },
  {
    date: '21 March 2023',
    name: 'ava-sky-from-instagram-to-the-studio',
    title: 'Ava Sky: From Instagram to the Studio',
    description: `Rising social media star Ava Sky is hitting the studio for the first time to record her latest single and we're excited to be a part of her journey.`,
    location: '/blog/posts/ava-sky-from-instagram-to-the-studio',
    markdown: '/blog/ava-sky-from-instagram-to-the-studio.md',
    img: {
      src: '/blog/ava-sky-from-instagram-to-the-studio.jpg',
      alt: 'ava-sky',
    },
  },
  {
    date: '2 March 2023',
    name: 'capturing-the-beat',
    title: 'Capturing the Beat',
    description:
      'From the natural acoustics of our state-of-the-art facilities to our world-class gear and software, we provide the perfect environment to record drums in any genre.',
    location: '/blog/posts/capturing-the-beat',
    markdown: '/blog/capturing-the-beat.md',
    img: { src: '/blog/capturing-the-beat.jpg', alt: 'drumset' },
  },
  {
    date: '2 March 2023',
    name: 'the-ultimate-vocal-booth',
    title: 'The Ultimate Vocal Booth',
    description:
      'From acoustic treatment to microphone selection, discover the secrets of recording professional-quality vocals at Melodic Minds state-of-the-art vocal booth.',
    location: '/blog/posts/the-ultimate-vocal-booth',
    markdown: '/blog/the-ultimate-vocal-booth.md',
    img: { src: '/blog/the-ultimate-vocal-booth.jpg', alt: 'vocal-booth' },
  },
];
