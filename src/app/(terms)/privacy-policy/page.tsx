import { HeroPolicy } from '@/components/blocks/hero-policy/HeroPolicy';
import { Container, Section } from '@/components/layout';
import { PolicySidebar } from '@/components/policy-sidebar/PolicySidebar';
import type { Metadata } from 'next';
import { privacyContent } from './privacy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy: How We Collect, Use &Protect Data | Interexy',
  description:
    "Discover Interexy's Privacy Notice: learn how we collect, use, store, and shares your personal information when you interact with our services",
  authors: [
    {
      name: 'Stan Sakharchuk',
      url: '',
    },
  ],
  openGraph: {
    type: 'article',
    title: 'Privacy Policy: How We Collect, Use &Protect Data | Interexy',
    description:
      "Discover Interexy's Privacy Notice: learn how we collect, use, store, and shares your personal information when you interact with our services",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/privacy-policy`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo/logo-purple.svg`,
        width: 1200,
        height: 630,
        alt: 'Logo Image',
      },
    ],
    siteName: 'Privacy Policy: How We Collect, Use &Protect Data | Interexy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy: How We Collect, Use &Protect Data | Interexy',
    description:
      "Discover Interexy's Privacy Notice: learn how we collect, use, store, and shares your personal information when you interact with our services",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo/logo-purple.svg`,
        width: 1200,
        height: 630,
        alt: 'Logo Image',
      },
    ],
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <HeroPolicy title='Privacy Policy' last_updated='March 24, 2025' />

      <Section>
        <Container>
          <div className='flex grid-cols-[166px_auto_100px] flex-col gap-x-6 lg:grid 2xl:grid-cols-[240px_auto_240px]'>
            <PolicySidebar content={privacyContent} />

            <article className='policy'>{privacyContent}</article>
          </div>
        </Container>
      </Section>
    </>
  );
}
