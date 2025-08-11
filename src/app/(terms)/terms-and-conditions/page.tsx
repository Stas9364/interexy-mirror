import { HeroPolicy } from '@/components/blocks/hero-policy/HeroPolicy';
import { Container, Section } from '@/components/layout';
import { PolicySidebar } from '@/components/policy-sidebar/PolicySidebar';
import type { Metadata } from 'next';
import { termsContent } from './terms-content';

export const metadata: Metadata = {
  title: 'Terms & Conditions: Usage, Rights & Policies | Interexy',
  description:
    "Explore Interexy's Terms & Conditions: understand your rights, responsibilities, and our policies on usage and more when using our services",
  authors: [
    {
      name: 'Stan Sakharchuk',
      url: '',
    },
  ],
  openGraph: {
    type: 'article',
    title: 'Terms & Conditions: Usage, Rights & Policies | Interexy',
    description:
      "Explore Interexy's Terms & Conditions: understand your rights, responsibilities, and our policies on usage and more when using our services",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/terms-and-conditions`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo/logo-purple.svg`,
        width: 1200,
        height: 630,
        alt: 'Logo Image',
      },
    ],
    siteName: 'Terms & Conditions: Usage, Rights & Policies | Interexy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions: Usage, Rights & Policies | Interexy',
    description:
      "Explore Interexy's Terms & Conditions: understand your rights, responsibilities, and our policies on usage and more when using our services",
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

export default function TermsAndConditions() {
  return (
    <>
      <HeroPolicy title='Terms & Conditions' last_updated='March 24, 2025' />

      <Section>
        <Container>
          <div className='flex grid-cols-[166px_auto_100px] flex-col gap-x-6 lg:grid 2xl:grid-cols-[240px_auto_240px]'>
            <PolicySidebar content={termsContent} />

            <article className='policy'>{termsContent}</article>
          </div>
        </Container>
      </Section>
    </>
  );
}
