import { Blog } from '@/modules/blog/Blog';
import { getPosts } from '@/api/blog/blog-adapter';

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
