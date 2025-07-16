import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import type { GoodSolution } from './goodSolution';

export const Reasons = ({ title, items }: { title: string; items: GoodSolution[] }) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} />

        <div className='flex grid-cols-2 flex-col gap-x-6 gap-y-[10px] md:grid md:gap-y-10 xl:gap-y-[80px]'>
          {items.map(({ color, subtitle, title }, idx) => (
            <div
              key={idx}
              className='flex items-center gap-x-5 border-b border-[#fce2fe] pb-5 xl:gap-x-8'
            >
              <div
                className={`flex min-h-[95px] min-w-[95px] items-center justify-center rounded-[20px]`}
                style={{ backgroundColor: color }}
              >
                <span className='flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#ffffffe6] text-xl shadow-[-3px_0_11px_-4px_#292f75]'>
                  0{++idx}
                </span>
              </div>
              <div>
                <p className='text-xl leading-[1.4] font-bold lg:text-2xl xl:text-[28px]'>
                  {title}
                </p>
                {subtitle && <p>{subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
