import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { LazyPortfolioSlider } from './LazyPortfolioSlider';

export const OurPortfolio = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} subtitle={subtitle}>
          {children}
        </BlockTitle>
      </Container>

      <LazyPortfolioSlider />
    </Section>
  );
};
