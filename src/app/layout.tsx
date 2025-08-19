import { Analytics } from '@/components/analytics/Analytics';
import localFont from 'next/font/local';
import './styles/globals.css';

const manrope = localFont({
  src: [
    {
      path: '../../public/fonts/Manrope-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-manrope-sans',
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Interexy',
  alternateName: 'Interexy Software Development',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  logo: {
    '@type': 'ImageObject',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo/logo-purple.svg`,
    width: 300,
    height: 100,
  },
  description:
    'Custom software development company specializing in mobile applications, web development, and digital product creation',
  foundingDate: '2015',
  slogan: 'Transform your business with expert app development services',
  knowsAbout: [
    'Mobile App Development',
    'Web Development',
    'Custom Software Development',
    'React Native',
    'Flutter',
    'Node.js',
    'React',
    'Vue.js',
    'iOS Development',
    'Android Development',
    'UI/UX Design',
    'Product Development',
    'Software Consulting',
  ],
  serviceArea: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BY',
    addressLocality: 'Minsk',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+375-29-XXX-XX-XX',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Russian'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      email: 'sales@interexy.com',
      contactType: 'Sales',
      availableLanguage: ['English', 'Russian'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/interexy',
    'https://clutch.co/profile/interexy',
    'https://www.behance.net/interexy',
    'https://dribbble.com/interexy',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description:
            'Custom iOS and Android mobile application development using React Native and Flutter',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description:
            'Full-stack web application development using modern frameworks like React, Vue.js, and Node.js',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description:
            'Tailored software solutions for business automation and digital transformation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description:
            'User interface and user experience design for mobile and web applications',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  award: ['Top Mobile App Development Company', 'Best React Native Development Team'],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '100',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.variable} antialiased`}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Analytics />

        <div className='flex min-h-screen flex-col'>{children}</div>
      </body>
    </html>
  );
}
