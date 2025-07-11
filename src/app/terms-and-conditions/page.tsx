import { HeroPolicy } from '@/components/blocks/hero-policy/HeroPolicy';
import { Container, Section } from '@/components/layout';
import { PolicySidebar } from '@/components/policy-sidebar/PolicySidebar';
import type { Metadata } from 'next';
import { termsContent } from './terms-content';

export const metadata: Metadata = {
  title: 'Terms & Conditions: Usage, Rights & Policies | Interexy',
  description:
    "Explore Interexy's Terms & Conditions: understand your rights, responsibilities, and our policies on usage and more when using our services",
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
