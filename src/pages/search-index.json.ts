import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const searchIndex = posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    slug: post.slug
  }));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
