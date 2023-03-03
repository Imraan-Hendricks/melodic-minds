import Head from 'next/head';

interface CustomHeadProps {
  author?: string;
  description?: string;
  keywords?: string;
  title?: string;
}

export function CustomHead({
  author = 'Imraan-Hendricks',
  description = 'Unleash your creativity and elevate your sound with Melodic Minds - the ultimate recording studio for bringing your music to life.',
  keywords,
  title,
}: CustomHeadProps) {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='author' content={author} />
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      <title>{`Melodic Minds${title ? ` | ${title}` : ''}`}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}
