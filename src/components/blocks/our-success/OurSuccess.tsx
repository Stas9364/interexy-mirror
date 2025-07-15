import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { type Expertise } from './expertiseByYears';

export const OurSuccess = ({
  subtitle,
  title,
  text,
  expertise,
}: {
  title: string;
  subtitle?: string;
  text?: string;
  expertise: Expertise[];
}) => {
  return (
    <Section>
      <Container>
        <div className='mb-[30px] grid-cols-2 gap-x-7 md:mb-[60px] md:grid'>
          <BlockTitle className='mb-4' subtitle={subtitle} title={title} />

          <p className='mt-8'>{text}</p>
        </div>

        <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
          {expertise.map(({ number, title }) => (
            <div key={title} className='flex flex-col gap-[10px] md:w-full'>
              <span className='text-[32px] font-extrabold md:text-[64px]'>{number}+</span>
              <p className='text-secondary text-sm leading-[140%] font-medium md:text-xl'>
                {title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
