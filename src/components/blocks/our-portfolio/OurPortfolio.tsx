import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { LazyPortfolioSlider } from './LazyPortfolioSlider';
import type { CaseT } from './cases-list';

export const OurPortfolio = ({
  title,
  subtitle,
  children,
  cases,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  cases: CaseT[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} subtitle={subtitle}>
          {children}
        </BlockTitle>
      </Container>

      <LazyPortfolioSlider cases={cases} />
    </Section>
  );
};
