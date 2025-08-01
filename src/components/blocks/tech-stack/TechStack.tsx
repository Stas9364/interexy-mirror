import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { TechStackTabs } from './TechStackTabs';
import type { TechStackT } from './tech-stack-types';

export const TechStack = ({
  title,
  subtitle,
  techStack,
}: {
  title: string;
  subtitle?: string;
  techStack: TechStackT;
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle subtitle={subtitle} title={title} />

        <TechStackTabs techStack={techStack} />
      </Container>
    </Section>
  );
};
