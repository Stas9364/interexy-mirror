import { Metadata } from 'next';

interface PageMetaData {
  title: string;
  description: string;
  slug: string;
  imagePath?: string;
  imageAlt?: string;
  author?: {
    name: string;
    url?: string;
  };
  type?: 'website' | 'article';
}

export function generateMetadata({
  title,
  description,
  slug,
  imagePath,
  imageAlt = 'Page Image',
  author = { name: 'Stan Sakharchuk', url: '' },
  type = 'article',
}: PageMetaData): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const fullUrl = `${baseUrl}${slug.startsWith('/') ? slug : `/${slug}`}`;
  const defaultImage = `${baseUrl}/logo/logo-purple.svg`;
  const imageUrl = imagePath ? `${baseUrl}${imagePath}` : defaultImage;

  return {
    title,
    description,
    authors: [author],
    openGraph: {
      type,
      title,
      description,
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 700,
          height: 550,
          alt: imageAlt,
        },
      ],
      siteName: 'Interexy',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 700,
          height: 550,
          alt: imageAlt,
        },
      ],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
