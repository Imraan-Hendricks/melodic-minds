import Image from 'next/image';
import { Article } from '@/components/Article';
import { Post } from '@/api/blog/blog-adapter';

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className='py-24 px-5 bg-black'>
      <div className='container mx-auto'>
        <div className='md:w-3/4 lg:w-2/4 mx-auto rounded overflow-hidden'>
          <Image
            src={post.img.src}
            alt={post.img.alt}
            width={1536}
            height={864}
          />
        </div>
        <Article className='py-12 mx-auto' filename={post.markdown} />
      </div>
    </div>
  );
}
