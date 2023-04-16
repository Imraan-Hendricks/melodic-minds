import Link from 'next/link';
import { Button } from '@/components/Button';
import { Post } from '@/api/blog/blog-adapter';

interface LatestPostsProps {
  posts: Post[];
}

export function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className='py-24 px-5 bg-black'>
      <div className='container mx-auto grid gap-8'>
        <div className='grid xl:grid-cols-2 gap-16'>
          <div className='grid gap-8 h-max'>
            <Link href={posts[0].location}>
              <div className='rounded overflow-hidden relative'>
                <div className='absolute hover:bg-black/25 h-full w-full inset-0 transition-colors' />
                <img src={posts[0].img.src} alt={posts[0].img.alt} />
              </div>
            </Link>
            <div className='grid gap-2'>
              <h3 className='text-body text-primary-500'>{posts[0].date}</h3>
              <h1 className='text-h1 text-white'>{posts[0].title}</h1>
            </div>
            <p className='text-body text-gray-400'>{posts[0].description}</p>
            <Link href={posts[0].location}>
              <Button className='w-max' variant='contained'>
                Read more
              </Button>
            </Link>
          </div>
          <div className='grid sm:grid-cols-2 xl:grid-cols-1 gap-8'>
            {posts.slice(1, 4).map(({ date, title, location, img }) => (
              <Link key={title} href={location}>
                <div className='group grid xl:grid-cols-2 gap-4 items-center'>
                  <div className='rounded overflow-hidden relative'>
                    <div className='absolute group-hover:bg-black/25 h-full w-full inset-0 transition-colors' />
                    <img src={img.src} alt={img.alt} />
                  </div>
                  <div className='grid gap-2'>
                    <h3 className='text-fineprint text-primary-500 group-hover:text-primary-400 transition-colors'>
                      {date}
                    </h3>
                    <h1 className='text-h2 text-gray-400 max-w-xs group-hover:text-white transition-colors'>
                      {title}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
