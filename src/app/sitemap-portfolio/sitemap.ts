import { MetadataRoute } from 'next';

type Post = { id: string; date: string; slug: string; modified: string };

async function getPortfolioCases() {
  const cases = await fetch(
    'https://interexy.com/wp-json/wp/v2/case?per_page=100&page=1',
  ).then(res => res.json());

  return cases.map((item: Post) => ({
    url: `https://interexy.com/case/${item.slug}`,
    lastModified: new Date(item.modified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolioRoutes = await getPortfolioCases();
  return portfolioRoutes;
}
