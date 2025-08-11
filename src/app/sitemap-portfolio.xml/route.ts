import { NextResponse } from 'next/server';

type Post = {
  id: string;
  date: string;
  slug: string;
  modified: string;
};

async function getPortfolioCases(): Promise<Post[]> {
  const allCases: Post[] = [];
  const totalPages = 1;
  const fetchPromises = [];

  for (let page = 1; page <= totalPages; page++) {
    const url = `https://interexy.com/wp-json/wp/v2/case?per_page=100&page=${page}`;
    fetchPromises.push(
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then(cases => allCases.push(...cases))
        .catch(error => {
          console.error(`Failed to fetch page ${page}:`, error);
          return [];
        }),
    );
  }

  await Promise.all(fetchPromises);
  return allCases;
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  try {
    const cases = await getPortfolioCases();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cases
  .map(
    (item: Post) => `  <url>
    <loc>${baseUrl}/case/${item.slug}</loc>
    <lastmod>${new Date(item.modified).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=172800, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error generating portfolio sitemap:', error);

    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;

    return new NextResponse(emptySitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-store',
      },
      status: 500,
    });
  }
}
