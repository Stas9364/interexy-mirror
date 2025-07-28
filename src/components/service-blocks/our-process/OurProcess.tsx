'use client';

import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import React from 'react';
import type { Process } from './our-process-types';

export const OurProcess = ({ title, process }: { title: string; process: Process[] }) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} />

        <div className='flex flex-wrap'>
          {process.map(
            ({ color, subtitle, title }, idx) =>
              idx === 0 && (
                <React.Fragment key={idx}>
                  <div className='flex w-full flex-wrap items-center text-center'>
                    <div
                      className='mr-5 flex h-[53px] w-[53px] items-center justify-center rounded-full text-center text-xl font-medium'
                      style={{ backgroundColor: color }}
                    >
                      {idx + 1}
                    </div>
                    <div
                      className='flex w-full items-center justify-center rounded-[100px] px-8 py-6 lg:max-w-[920px] xl:max-w-[967px]'
                      style={{ backgroundColor: color }}
                    >
                      <div className='text-xl leading-[1.2] font-bold'>{title}</div>
                    </div>
                  </div>
                  <div className='h-auto w-full bg-contain bg-no-repeat pt-8 lg:mt-[64px] lg:h-[555px] lg:w-[400px] lg:bg-[url(/services/real-estate-tokenization-services/line.svg)]'>
                    <p className='w-full text-lg leading-[2] font-light lg:max-w-[327px]'>
                      {subtitle}
                    </p>
                  </div>
                </React.Fragment>
              ),
          )}

          <div className='relative mt-[64px] w-full max-w-[100%] lg:max-w-[590px] xl:max-w-[630px]'>
            <div className='w-full lg:pl-[35px]'>
              {process.slice(1).map(({ color, subtitle, title }, idx) => (
                <div key={title}>
                  <div
                    className='relative flex h-[77px] flex-row items-center justify-center rounded-[100px] px-8 text-center'
                    style={{ backgroundColor: color }}
                  >
                    <div
                      className='absolute top-[-57%] left-0 flex h-[44px] w-[44px] items-center justify-center rounded-full text-xl leading-[1.2] font-medium lg:top-[20%] lg:left-[-11%]'
                      style={{ backgroundColor: color }}
                    >
                      {idx + 2}
                    </div>
                    <div className='text-xl leading-[1.2] font-medium'>{title}</div>
                  </div>
                  <div className='mt-[30px] mb-[60px] text-lg leading-[2] font-light'>
                    {subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
