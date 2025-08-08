import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `https://interexy-mirror.vercel.app/sitemap-static/sitemap.xml` },
    { url: `https://interexy-mirror.vercel.app/sitemap-blog/sitemap.xml` },
    { url: `https://interexy-mirror.vercel.app/sitemap-portfolio/sitemap.xml` },
  ];
}
