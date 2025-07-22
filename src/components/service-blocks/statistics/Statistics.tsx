import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import type { ProgressItem, SocialFact } from './types';

export const Statistics = ({
  progress,
  addFacts,
}: {
  progress: ProgressItem[];
  addFacts: SocialFact[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title='Social media users worldwide from 2010 to 2021'>
          <p>
            As an integral part of daily internet usage social networking apps attract
            millions of users every day.
          </p>
        </BlockTitle>

        <div className='flex flex-col items-center'>
          <div className='mx-auto flex w-full max-w-[688px] flex-row flex-wrap justify-between border-b border-[#c5c5c5] pb-3'>
            {progress.map(({ height, value, year }) => (
              <div key={year} className='flex flex-col items-center text-center'>
                <div className='mt-10 mb-3 text-[clamp(13px,1.5vw,16px)] font-semibold'>
                  {value}
                </div>
                <div className='mb-3 flex min-h-[187px] w-[31px] items-end rounded-lg bg-[#f7f8fc]'>
                  <div
                    className='bg-accent w-[31px] rounded-lg'
                    style={{ height: `${height}px` }}
                  />
                </div>
                <div className='text-[clamp(13px,1.5vw,16px)] font-light'>{year}</div>
              </div>
            ))}
          </div>

          <div className='mt-3 mb-10 flex w-full max-w-[688px] flex-row justify-between'>
            <div className='mt-3 flex max-w-[185px] flex-row items-center'>
              <div className='bg-accent] mr-3 h-[31px] w-[31px] rounded-lg' />
              <div className='text-[clamp(13px,1.5vw,16px)] font-semibold'>
                Users in billions
              </div>
            </div>
            <div className='mt-3 flex max-w-[120px] items-center text-[clamp(13px,1.5vw,16px)] font-semibold'>
              Source <span className='text-accent ml-1'>Statista</span>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          {addFacts.map(({ description, subtitle, title }, idx) => (
            <div key={idx} className='w-full px-4 sm:w-1/2 lg:w-1/4'>
              <div className='mt-10 min-h-[232px] w-full rounded-[32px] bg-[#f7f8fc] p-6'>
                <div className='mb-2 text-[clamp(28px,3vw,40px)] leading-[49px] font-bold'>
                  {title}
                </div>
                <div className='text-accent mb-2 text-[clamp(18px,2vw,22px)] leading-[27px] font-bold'>
                  {subtitle}
                </div>
                <div className='text-[clamp(13px,1.5vw,16px)] leading-[19px] font-normal'>
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
