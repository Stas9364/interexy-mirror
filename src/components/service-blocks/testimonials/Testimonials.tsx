import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LazyTestimonialSwiper } from './LazyTestimonialSwiper';
import './style.css';

export const Testimonials = ({ title }: { title: string }) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} />

        <LazyTestimonialSwiper />
      </Container>
    </Section>
  );
};
