import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';

export const CoreTechnologies = ({
  title,
  technologies,
  sectionClassName,
  titleChild,
}: {
  title: string;
  technologies: Array<{ src: string; alt: string; width: number; height: number }>;
  sectionClassName?: string;
  titleChild?: React.ReactNode;
}) => {
  return (
    <Section className={sectionClassName}>
      <Container>
        <BlockTitle title={title}>{titleChild}</BlockTitle>

        <div className='flex w-full flex-wrap justify-center gap-x-5 gap-y-5 xl:justify-between'>
          {technologies.map(({ src, alt, width, height }) => (
            <Image
              src={src}
              alt={alt}
              key={alt}
              width={width}
              height={height}
              className='min-w-[100px] object-contain'
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
