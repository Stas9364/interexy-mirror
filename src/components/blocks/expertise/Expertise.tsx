import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { ExpertiseAccordion } from './ExpertiseAccordion';

export const Expertise = () => {
  return (
    <Section>
      <Container>
        <BlockTitle subtitle='Expertise' title='Areas of expertise' />

        <ExpertiseAccordion />
      </Container>
    </Section>
  );
};
