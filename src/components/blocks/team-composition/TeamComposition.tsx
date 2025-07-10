import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';

export const TeamComposition = () => {
  return (
    <Section className='relative mb-10 bg-[url(/blocks/team-composition/bg.webp)] bg-cover bg-no-repeat py-[40px] md:mb-[60px] md:py-[60px] xl:mb-[80px] xl:py-[80px]'>
      <Container>
        <BlockTitle title='Interexy’s Team Composition' className='text-center' />
        <picture>
          <source
            media='(max-width: 600px)'
            srcSet='/blocks/team-composition/Info.webp'
          />
          <Image
            src='/blocks/team-composition/chart-2.webp'
            alt='team composition'
            width={1530}
            height={738}
          />
        </picture>
      </Container>
    </Section>
  );
};
