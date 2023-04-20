import { BlogPost } from '@/modules/blog/posts/BlogPost';
import { getPostByName, getPosts } from '@/api/blog/blog-adapter';

export async function getStaticProps({ params }: { params: { name: string } }) {
  const post = await getPostByName(params.name);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(({ name }) => ({ params: { name } }));

  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
