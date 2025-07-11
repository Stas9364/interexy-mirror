import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { CEO } from './CEO';
import { Team } from './Team';

export const OurTeam = () => {
  return (
    <Section>
      <Container>
        <BlockTitle subtitle='Our team' title='Meet our leadership team' />

        <CEO />

        <Team />
      </Container>
    </Section>
  );
};
