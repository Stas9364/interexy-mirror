import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { ExpertiseAccordion } from './ExpertiseAccordion';
import type { ExpertiseT } from './expertise-types';

export const Expertise = ({
  title,
  subtitle,
  expertise,
}: {
  title: string;
  subtitle?: string;
  expertise: ExpertiseT[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle subtitle={subtitle} title={title} />

        <ExpertiseAccordion expertise={expertise} />
      </Container>
    </Section>
  );
};
