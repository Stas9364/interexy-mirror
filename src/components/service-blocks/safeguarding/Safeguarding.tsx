import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import type { SafeguardingT } from './safeguarding-types';

export const Safeguarding = ({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: SafeguardingT[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle subtitle={subtitle} title={title} />

        <div className='flex grid-cols-3 gap-5 overflow-x-auto xl:grid'>
          {items.map(({ title, description }, idx) => (
            <div
              key={idx}
              className='group flex min-w-[260px] cursor-pointer flex-col items-start justify-stretch gap-y-3 border-[#D6D6D6] bg-[#F0F1F7] px-5 pt-5 pb-[50px] select-none xl:border xl:bg-transparent xl:pb-[55px]'
            >
              <span className='text-accent bg-[#F0F1F7] text-lg xl:rounded-full xl:px-4 xl:py-3 xl:text-2xl'>
                0{idx + 1}
              </span>

              <h3 className='text-accent xl:text-primary xl:group-hover:text-accent text-lg font-medium transition-colors duration-300 xl:text-2xl'>
                {title}
              </h3>

              <p className='text-secondary text-base leading-[1.6] font-normal transition-opacity duration-300 group-hover:opacity-100 xl:text-lg xl:opacity-0'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
