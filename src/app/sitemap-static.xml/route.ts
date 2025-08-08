import { NextResponse } from 'next/server';

const staticPages = [
  'about-us',
  'contact-us',
  'referral',
  'process',
  'complaints-procedure',
  'privacy-policy',
  'terms-and-conditions',
  'cookie-policy',
  'augmented-and-virtual-reality-ar-vr-app-development-services',
  'blockchain-app-development-services',
  'cannabis-apps',
  'cryptocurrency-app-development-services',
  'custom-web3-development-app-solutions',
  'delivery-app-development-services',
  'educational-mobile-app-development-services',
  'empower-your-product-with-chatgpt-development-solutions',
  'fintech-app-development-services',
  'fitness-app-development',
  'full-cycle-app-development-services',
  'healthcare-it-consulting-services',
  'healthcare-mobile-app-development-services',
  'iot-development-services',
  'kotlin',
  'machine-learning-and-ai-app-development-services',
  'marketplace-app-development-services',
  'metaverse-development-services',
  'mobile-app-launch-and-publishing-services',
  'nft-marketplace-app-development-service',
  'non-fungible-token-nft-development-services',
  'pharmacy-app-development-services',
  'real-estate-app-development-services',
  'real-estate-tokenization-services',
  'smart-contract-development-services',
  'social-media-application-development-services',
  'staff-augmentation-services-for-software-development',
  'taxi-app-development-services',
  'telemedicine-app-development',
  'web-to-app-solutions',
];

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  try {
    const currentDate = new Date().toISOString();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>
${staticPages
  .map(
    page => `  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control':
          'public, max-age=86400, max-age=172800, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error generating static sitemap:', error);

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
