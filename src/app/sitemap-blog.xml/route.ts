import { NextResponse } from 'next/server';

type Post = {
  id: string;
  date: string;
  slug: string;
  modified: string;
  title?: { rendered?: string };
};

async function getBlogPosts() {
  const allPosts: Post[] = [];
  const totalPages = 3;
  const fetchPromises = [];

  for (let page = 1; page <= totalPages; page++) {
    const url = `https://interexy.com/wp-json/wp/v2/posts?per_page=35&page=${page}`;
    fetchPromises.push(
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then(posts => allPosts.push(...posts))
        .catch(error => {
          console.error(`Failed to fetch page ${page}:`, error);
          return [];
        }),
    );
  }

  await Promise.all(fetchPromises);
  return allPosts;
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  try {
    const posts = await getBlogPosts();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts
  .map(
    (post: Post) => `  <url>
    <loc>${baseUrl}/${post.slug}</loc>
    <lastmod>${new Date(post.modified).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
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
    console.error('Error generating blog sitemap:', error);

    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

    return new NextResponse(emptySitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
      status: 500,
    });
  }
}
