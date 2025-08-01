'use client';

import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { LazyReviewsSlider } from './LazyReviewsSlider';
import type { Review } from './review-types';

export const Reviews = ({
  title,
  subtitle,
  reviews,
}: {
  title: string;
  subtitle: string;
  reviews: Review[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} subtitle={subtitle} />

        <LazyReviewsSlider reviews={reviews} />
      </Container>
    </Section>
  );
};
