import { DevelopmentTimeline, HowWeWork } from '@/components/blocks';
import { Container, Section } from '@/components/layout';
import { SupportPackages } from '@/components/service-blocks';
import type { Metadata } from 'next';
import { howWeWork, howWeWork2 } from './data';

export const metadata: Metadata = {
  title: 'Our Process | Interexy',
  description:
    'Read about Interexy’s workflow. ✅ Software Specifications & Estimation Presentation, Development, QA testing, Support & Launch (App Store & Google Play)',
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
