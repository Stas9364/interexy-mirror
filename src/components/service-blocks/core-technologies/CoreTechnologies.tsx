import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';

export const CoreTechnologies = ({
  technologies,
}: {
  technologies: Array<{ src: string; alt: string }>;
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title='Core technologies used to build functional AI & ML mobile solutions' />

        <div className='flex w-full flex-wrap justify-center gap-y-5 xl:justify-between'>
          {technologies.map(({ src, alt }) => (
            <Image
              src={src}
              alt={alt}
              key={alt}
              width={261}
              height={110}
              className='max-w-[235px]'
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
