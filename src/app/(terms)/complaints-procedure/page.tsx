import { HeroPolicy } from '@/components/blocks/hero-policy/HeroPolicy';
import { Container, Section } from '@/components/layout';
import { PolicySidebar } from '@/components/policy-sidebar/PolicySidebar';
import type { Metadata } from 'next';
import { complaintsContent } from './complaints-content';

export const metadata: Metadata = {
  title: "Interexy's Complaints Procedure | Interexy",
  description:
    'Learn how to submit a complaint with Interexy, our escalation process, and how we ensure confidentiality and fair resolution of issues',
  authors: [
    {
      name: 'Stan Sakharchuk',
      url: '',
    },
  ],
  openGraph: {
    type: 'article',
    title: "Interexy's Complaints Procedure | Interexy",
    description:
      'Learn how to submit a complaint with Interexy, our escalation process, and how we ensure confidentiality and fair resolution of issues',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/complaints-procedure`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo/logo-purple.svg`,
        width: 1200,
        height: 630,
        alt: 'Logo Image',
      },
    ],
    siteName: "Interexy's Complaints Procedure | Interexy",
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: "Interexy's Complaints Procedure | Interexy",
    description:
      'Learn how to submit a complaint with Interexy, our escalation process, and how we ensure confidentiality and fair resolution of issues',
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

export default function ComplaintsProcedure() {
  return (
    <>
      <HeroPolicy title='Complaints Procedure' last_updated='March 24, 2025' />

      <Section>
        <Container>
          <div className='flex grid-cols-[166px_auto_100px] flex-col gap-x-6 lg:grid 2xl:grid-cols-[240px_auto_240px]'>
            <PolicySidebar content={complaintsContent} />

            <article className='policy'>{complaintsContent}</article>
          </div>
        </Container>
      </Section>
    </>
  );
}
