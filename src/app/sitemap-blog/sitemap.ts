import { MetadataRoute } from 'next';

type Post = { id: string; date: string; slug: string; modified: string };

async function getBlogPosts() {
  const allPosts: Post[] = [];
  const totalPages = 3;

  const fetchPromises = [];

  for (let page = 1; page <= totalPages; page++) {
    const url = `https://interexy.com/wp-json/wp/v2/posts?per_page=35&page=${page}`;
    fetchPromises.push(
      fetch(url)
        .then(res => res.json())
        .then(posts => allPosts.push(...posts))
        .catch(error => console.error(`Failed to fetch page ${page}:`, error)),
    );
  }

  await Promise.all(fetchPromises);

  return allPosts.map((item: Post) => ({
    url: `https://interexy.com/${item.slug}`,
    lastModified: new Date(item.modified),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogRoutes = await getBlogPosts();
  return blogRoutes;
}
