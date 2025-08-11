import { DevelopmentTimeline, HowWeWork } from '@/components/blocks';
import { Container, Section } from '@/components/layout';
import { SupportPackages } from '@/components/service-blocks';
import type { Metadata } from 'next';
import { howWeWork, howWeWork2 } from './data';

export const metadata: Metadata = {
  title: 'Our Process | Interexy',
  description:
    'Read about Interexy’s workflow. ✅ Software Specifications & Estimation Presentation, Development, QA testing, Support & Launch (App Store & Google Play)',
  authors: [
    {
      name: 'Stan Sakharchuk',
      url: '',
    },
  ],
  openGraph: {
    type: 'article',
    title: 'Our Process | Interexy',
    description:
      'Read about Interexy’s workflow. ✅ Software Specifications & Estimation Presentation, Development, QA testing, Support & Launch (App Store & Google Play)',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blocks/hero/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'Our Process Image',
      },
    ],
    siteName: 'Our Process | Interexy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | Interexy',
    description:
      'Read about Interexy’s workflow. ✅ Software Specifications & Estimation Presentation, Development, QA testing, Support & Launch (App Store & Google Play)',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blocks/hero/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'Our Process Image',
      },
    ],
  },
};

export default function Process() {
  return (
    <>
      <Section className='pt-[100px]'>
        <Container>
          <div className='flex justify-center'>
            <h1 className='mb-5 text-4xl leading-[1.2] font-extrabold md:mb-10 md:text-5xl xl:text-[64px]'>
              How we work
            </h1>
          </div>
        </Container>
      </Section>

      <HowWeWork howWeWork={howWeWork} />

      <DevelopmentTimeline />

      <HowWeWork howWeWork={howWeWork2} />

      <SupportPackages />
    </>
  );
}
