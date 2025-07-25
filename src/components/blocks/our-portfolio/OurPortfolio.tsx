import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { LazyPortfolioSlider } from './LazyPortfolioSlider';
import type { CaseT } from './cases-list';

export const OurPortfolio = ({
  title,
  subtitle,
  titleChildren,
  cases,
}: {
  title: string;
  subtitle?: string;
  titleChildren?: React.ReactNode;
  cases: CaseT[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} subtitle={subtitle}>
          {titleChildren}
        </BlockTitle>
      </Container>

      <LazyPortfolioSlider cases={cases} />
    </Section>
  );
};
