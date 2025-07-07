import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { TechStackTabs } from './TechStackTabs';

export const TechStack = () => {
  return (
    <Section>
      <Container>
        <BlockTitle
          subtitle='Tech stack'
          title='Technologies we use
'
        />

        <TechStackTabs />
      </Container>
    </Section>
  );
};
