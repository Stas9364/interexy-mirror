'use client';

import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { ReviewsSlider } from './ReviewsSlider';

export const Reviews = () => {
  return (
    <Section>
      <Container>
        <BlockTitle title='Highly satisfied clients' subtitle='Reviews' />

        <ReviewsSlider />
      </Container>
    </Section>
  );
};
