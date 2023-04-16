import { CustomHead } from '@/components/CustomHead';
import { LatestPosts } from './LatestPosts';
import { Post } from '@/api/blog/blog-adapter';

interface BlogProps {
  posts: Post[];
}

export function Blog({ posts }: BlogProps) {
  return (
    <div>
      <CustomHead title='Blog' />
      <LatestPosts posts={posts} />
    </div>
  );
}
