import { NextResponse, type NextRequest } from 'next/server';

type Post = {
  id: string;
  date: string;
  slug: string;
  modified: string;
};

function createETag(body: string) {
  let hash = 0;
  for (let i = 0; i < body.length; i++) {
    hash = (hash << 5) - hash + body.charCodeAt(i);
    hash |= 0;
  }
  return `W/"${body.length.toString(16)}-${(hash >>> 0).toString(16)}"`;
}

async function getPortfolioCases(): Promise<Post[]> {
  try {
    const res = await fetch(
      'https://interexy.com/wp-json/wp/v2/case?per_page=100&page=1',
      {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
      },
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return (await res.json()) as Post[];
  } catch (error) {
    console.error('Failed to fetch portfolio cases:', error);
    return [];
  }
}

export async function GET(req: NextRequest) {
  const origin = new URL(req.url).origin;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || origin;

  try {
    const cases = await getPortfolioCases();

    const latestTs =
      cases.length > 0
        ? cases
            .map(c => Date.parse(c.modified || c.date))
            .filter(t => Number.isFinite(t))
            .reduce((a, b) => Math.max(a, b), 0)
        : Date.now();
    const lastModifiedDate = new Date(latestTs);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cases
  .map(
    (item: Post) => `  <url>
    <loc>${baseUrl}/case/${item.slug}</loc>
    <lastmod>${new Date(item.modified || item.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

    const etag = createETag(sitemap);
    const ifNoneMatch = req.headers.get('if-none-match');
    const ifModifiedSince = req.headers.get('if-modified-since');

    const headers: Record<string, string> = {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'CDN-Cache-Control': 's-maxage=172800, stale-while-revalidate=86400',
      ETag: etag,
      'Last-Modified': lastModifiedDate.toUTCString(),
      Vary: 'Accept-Encoding',
    };

    if (ifNoneMatch && ifNoneMatch === etag) {
      return new NextResponse(null, { status: 304, headers });
    }
    if (ifModifiedSince && new Date(ifModifiedSince) >= lastModifiedDate) {
      return new NextResponse(null, { status: 304, headers });
    }

    return new NextResponse(sitemap, { status: 200, headers });
  } catch (error) {
    console.error('Error generating portfolio sitemap:', error);
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
    return new NextResponse(emptySitemap, {
      status: 500,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  }
}
