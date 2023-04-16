import Link from 'next/link';
import { Post } from '@/api/blog/blog-adapter';

interface MorePostsProps {
  posts: Post[];
}

export function MorePosts({ posts }: MorePostsProps) {
  return (
    <section className='py-24 px-5'>
      <div className='container mx-auto grid gap-8'>
        <div>
          <h1 className='text-subtitle'>More Posts</h1>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
          {posts
            .slice(4, 8)
            .map(({ date, title, description, location, img }) => (
              <Link key={title} href={location}>
                <div className='group grid gap-4'>
                  <div className='rounded overflow-hidden relative'>
                    <div className='absolute group-hover:bg-black/25 h-full w-full inset-0 transition-colors' />
                    <img src={img.src} alt={img.alt} />
                  </div>
                  <div className='grid gap-2'>
                    <h3 className='text-fineprint text-primary-700 group-hover:text-black transition-colors'>
                      {date}
                    </h3>
                    <h2 className='text-h3 group-hover:text-primary-500 transition-colors'>
                      {title}
                    </h2>
                    <p className='text-fineprint text-gray-700 group-hover:text-black transition-colors'>
                      {description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
