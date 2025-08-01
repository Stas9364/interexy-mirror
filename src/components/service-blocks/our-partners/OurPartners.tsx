import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import type { PartnersType } from './our-partners-types';

export const OurPartners = ({
  title,
  subtitle,
  partners,
}: {
  title: string;
  subtitle?: string;
  partners: PartnersType[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle subtitle={subtitle} title={title} />

        <div className='flex grid-cols-3 gap-5 overflow-x-auto xl:grid'>
          {partners.map(({ title, description }, idx) => (
            <div
              key={idx}
              className='flex min-w-[260px] flex-col items-start justify-stretch gap-y-3 border-[#D6D6D6] bg-[#F0F1F7] px-5 pt-5 pb-[50px] xl:border-b xl:bg-transparent xl:pb-[55px]'
            >
              <div className='flex flex-col gap-x-5 gap-y-6 text-lg xl:flex-row xl:items-center xl:gap-y-0 xl:text-2xl'>
                <span className='text-accent bg-[#F0F1F7] font-bold xl:rounded-full xl:px-4 xl:py-3'>
                  0{idx + 1}
                </span>
                <h3 className='text-accent xl:text-primary font-medium'>{title}</h3>
              </div>
              <p className='text-secondary text-base leading-[1.6] font-normal xl:text-lg'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
