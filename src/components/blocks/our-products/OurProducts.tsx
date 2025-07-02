import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { ProductsSlider } from './ProductsSlider';

export const OurProducts = () => {
  return (
    <Section>
      <Container>
        <BlockTitle
          title='Explore our recent mobile app designs'
          subtitle='Our product'
        />

        <ProductsSlider />
      </Container>
    </Section>
  );
};
