'use client';

import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { ServicesTabs } from './ServicesTabs';
import { MobileServicesTabs } from './MobileServicesTabs';


export const OurServices = () => {

  return (
    <Section>
      <Container>
        <BlockTitle subtitle='Our services' title='Services' />

        <ServicesTabs />

        <MobileServicesTabs/>
      </Container>
    </Section>
  );
};
