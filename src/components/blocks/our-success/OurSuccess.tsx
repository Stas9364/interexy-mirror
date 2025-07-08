import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { expertiseByYears } from './expertiseByYears';

export const OurSuccess = () => {
  return (
    <Section>
      <Container>
        <div className='mb-[30px] grid-cols-2 gap-x-7 md:mb-[60px] md:grid'>
          <BlockTitle
            className='mb-4'
            subtitle='Our success'
            title='Expertise backed by years'
          />

          <p className='mt-8'>
            Interexy is a custom software development and IT consulting company founded in
            2017 and headquartered in Miami. We boast extensive expertise in Healthcare,
            Blockchain, FinTech, AI, ML, EdTech, E-Commerce, etc. We deliver innovative
            solutions for giants like SAP, PwC, Pampers, General Electric, Next Street &
            fastest-growing companies across industries.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
          {expertiseByYears.map(({ number, title }) => (
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
