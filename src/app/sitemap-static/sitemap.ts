import { MetadataRoute } from 'next';

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const homePage = {
    url: 'https://interexy.com/',
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 1,
  };

  const routes = staticPages.map(page => ({
    url: `https://interexy.com/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [homePage, ...routes];
}
