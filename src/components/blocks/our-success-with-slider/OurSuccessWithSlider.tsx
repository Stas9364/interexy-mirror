'use client';

import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { expertiseByYears } from '../our-success/expertiseByYears';
import { LazyOurSuccessSlider } from './LazyOurSuccessSlider';

export const OurSuccessWithSlider = () => {
  return (
    <Section className='mt-[80px]'>
      <Container>
        <div className='flex flex-col gap-x-[30px] xl:flex-row'>
          <div className='w-full min-w-0 xl:max-w-[850px]'>
            <BlockTitle title='Expertise backed by years' subtitle='Our success'>
              <p className='text-secondary text-xl leading-[1.4] font-light xl:text-2xl'>
                Interexy is a Miami-headquartered custom software development and IT
                consulting company with a deep expertise in Blockchain & Healthcare
                industries offering innovative solutions for market giants such as SAP,
                Pampers, General Electric and fastest-growing web3 startups.
              </p>
            </BlockTitle>

            <LazyOurSuccessSlider />
          </div>

          <div className='mt-10 grid grid-cols-2 flex-col justify-center gap-x-5 gap-y-5 md:gap-y-10 xl:flex xl:min-w-[400px] xl:pl-[50px] 2xl:min-w-[40%] 2xl:pl-[78px]'>
            {expertiseByYears.map(({ number, title }) => (
              <div key={title} className='flex flex-col gap-[10px] md:w-full'>
                <span className='text-secondary text-[34px] font-extrabold md:text-5xl xl:text-[64px]'>
                  {number}+
                </span>
                <p className='text-secondary text-sm leading-[140%] font-medium md:text-xl'>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
