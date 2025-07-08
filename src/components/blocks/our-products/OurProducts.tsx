import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { LazyProductsSlider } from './LazyProductsSlider';

export const OurProducts = () => {
  return (
    <Section>
      <Container>
        <BlockTitle
          title='Explore our recent mobile app designs'
          subtitle='Our product'
        />

        <LazyProductsSlider />
      </Container>
    </Section>
  );
};
