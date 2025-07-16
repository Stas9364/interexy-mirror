import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';

export const CoreTechnologies = ({
  title,
  technologies,
  sectionClassName,
}: {
  title: string;
  technologies: Array<{ src: string; alt: string; width: number; height: number }>;
  sectionClassName?: string;
}) => {
  return (
    <Section className={sectionClassName}>
      <Container>
        <BlockTitle title={title} />

        <div className='flex w-full flex-wrap justify-center gap-y-5 xl:justify-between'>
          {technologies.map(({ src, alt, width, height }) => (
            <Image
              src={src}
              alt={alt}
              key={alt}
              width={width}
              height={height}
              // className='max-w-[235px]'
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
