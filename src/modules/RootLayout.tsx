import { clsx } from 'clsx';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Noto_Sans } from 'next/font/google';
import { PropsWithChildren } from 'react';

const noto_Sans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  display: 'swap',
});

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className={clsx('flex flex-col h-screen', noto_Sans.className)}>
      <header>
        <Navbar />
      </header>
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  );
}
