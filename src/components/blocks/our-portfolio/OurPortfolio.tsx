import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { LazyPortfolioSlider } from './LazyPortfolioSlider';

export const OurPortfolio = () => {
  return (
    <Section>
      <Container>
        <BlockTitle title='Software that helps you succeed' subtitle='Our portfolio'>
          <p className='text-secondary text-base leading-[1.4] font-medium md:text-lg'>
            Our user-centered design encourages productivity and boosts revenue.
          </p>
        </BlockTitle>
      </Container>

      <LazyPortfolioSlider />
    </Section>
  );
};
