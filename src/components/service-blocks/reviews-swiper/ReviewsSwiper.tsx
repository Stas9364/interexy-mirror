import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import type { Review } from './review-type';
import { LazyReviewSwiper } from './LazyReviewSwiper';

export const ReviewsSwiper = ({
  title,
  reviewsData,
}: {
  title: string;
  reviewsData: Review[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} />

        <div className='mx-auto w-full max-w-7xl px-4 py-12'>
          <LazyReviewSwiper reviewsData={reviewsData} />
        </div>
      </Container>
    </Section>
  );
};
