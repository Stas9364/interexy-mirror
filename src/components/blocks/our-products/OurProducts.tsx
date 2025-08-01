import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { LazyProductsSlider } from './LazyProductsSlider';
import type { Slide } from './slide-types';

export const OurProducts = ({
  title,
  subtitle,
  products,
}: {
  title: string;
  subtitle?: string;
  products: Slide[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} subtitle={subtitle} />

        <LazyProductsSlider products={products} />
      </Container>
    </Section>
  );
};
