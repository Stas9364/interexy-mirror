import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/sitemap-static/sitemap.xml` },
    { url: `${baseUrl}/sitemap-blog/sitemap.xml` },
    { url: `${baseUrl}/sitemap-portfolio/sitemap.xml` },
  ];
}
