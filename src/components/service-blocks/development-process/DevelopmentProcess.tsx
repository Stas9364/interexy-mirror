'use client';

import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { useState } from 'react';
import { processSteps } from './items';
import React from 'react';

export const DevelopmentProcess = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <Section>
      <Container>
        <BlockTitle title={title} subtitle={subtitle} />

        <div className='flex grid-cols-[1fr_2fr] flex-col-reverse gap-10 md:grid'>
          {processSteps.map(
            ({ title, description, idx }) =>
              currentTab === idx && (
                <div key={idx} className='flex min-h-[336px] flex-col gap-y-5'>
                  <span className='text-5xl font-bold text-[#DEDCF3]'>0{idx}.</span>
                  <h3 className='text-[26px] leading-[1.3] font-semibold'>{title}</h3>
                  <p className='text-secondary max-w-[700px] text-lg leading-[1.6] font-normal'>
                    {description}
                  </p>

                  <div>
                    <InterexyLink
                      href='/contact-us'
                      text='Estimate project'
                      variant='primary'
                    />
                  </div>
                </div>
              ),
          )}

          <div className='mobile_btns block overflow-x-auto md:hidden'>
            <ul className='flex gap-x-[10px] pl-[5px]'>
              {processSteps.map(({ title, idx }) => (
                <li key={idx} className='flex justify-center'>
                  <button
                    onClick={() => setCurrentTab(idx)}
                    className='w-full min-w-[200px] cursor-pointer rounded-[5px] border-t-2 border-none p-3 text-base whitespace-nowrap'
                    style={{
                      backgroundColor: currentTab === idx ? '#5067f4' : '#f1f1f1',
                      color: currentTab === idx ? 'white' : '#101018',
                    }}
                  >
                    0{idx}. {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className='mx-auto mt-5 grid w-full max-w-[1200px] grid-cols-[1fr_160px_1fr] grid-rows-[repeat(6,50px)] items-center gap-x-10 md:mt-0'>
            {processSteps.map(({ title, idx }) => {
              const gridRow = 7 - idx;
              const isRightSide = idx % 2 === 0;

              return isRightSide ? (
                <React.Fragment key={idx}>
                  <div style={{ gridRow }}></div>
                  <div style={{ gridRow }}>
                    <svg
                      onClick={() => setCurrentTab(idx)}
                      className='relative cursor-pointer'
                      style={{ zIndex: 8 + idx }}
                      data-step='0'
                      width='161'
                      height='96'
                      viewBox='0 0 161 96'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M80.7464 83.3854L160.04 39.9078L80.7464 0.0107422L1.45312 39.9078L80.7464 83.3854Z'
                        fill={currentTab === idx ? '#B7C5FF' : '#EFF0FF'}
                      ></path>
                      <path
                        d='M1.45295 39.9077L0.941406 51.7574L80.7462 95.235V83.3853L1.45295 39.9077Z'
                        fill={currentTab === idx ? '#839AFE' : '#DFE3F9'}
                      ></path>
                      <path
                        d='M160.039 39.9077L160.551 51.7574L80.7461 95.235V83.3853Z'
                        fill={currentTab === idx ? '#436AFD' : '#C4C9EE'}
                      ></path>
                    </svg>
                  </div>
                  <div className='relative flex justify-end' style={{ gridRow }}>
                    <div className='absolute top-1/2 right-[110px] z-0 ml-2 hidden w-[150px] -translate-y-1/2 border-t border-dotted border-[#bbb] md:block lg:w-[200px]'></div>
                    <button
                      onClick={() => setCurrentTab(idx)}
                      className='relative z-10 hidden cursor-pointer rounded-[5px] border-t-2 border-none px-[11px] py-3 text-base md:block'
                      style={{
                        backgroundColor: currentTab === idx ? '#5067f4' : '#f1f1f1',
                        color: currentTab === idx ? 'white' : '#101018',
                      }}
                    >
                      0{idx}. {title}
                    </button>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment key={idx}>
                  <div className='relative flex justify-start' style={{ gridRow }}>
                    <div className='absolute top-1/2 right-[-50px] z-0 ml-2 hidden w-[150px] -translate-y-1/2 border-t border-dotted border-[#bbb] md:block lg:w-[200px]'></div>
                    <button
                      onClick={() => setCurrentTab(idx)}
                      className='relative z-10 hidden cursor-pointer rounded-[5px] border-t-2 border-none px-[11px] py-3 text-base md:block'
                      style={{
                        backgroundColor: currentTab === idx ? '#5067f4' : '#f1f1f1',
                        color: currentTab === idx ? 'white' : '#101018',
                      }}
                    >
                      0{idx}. {title}
                    </button>
                  </div>
                  <div style={{ gridRow }}>
                    <svg
                      onClick={() => setCurrentTab(idx)}
                      className='relative cursor-pointer'
                      style={{ zIndex: 8 + idx }}
                      data-step='0'
                      width='161'
                      height='96'
                      viewBox='0 0 161 96'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M80.7464 83.3854L160.04 39.9078L80.7464 0.0107422L1.45312 39.9078L80.7464 83.3854Z'
                        fill={currentTab === idx ? '#B7C5FF' : '#EFF0FF'}
                      ></path>
                      <path
                        d='M1.45295 39.9077L0.941406 51.7574L80.7462 95.235V83.3853L1.45295 39.9077Z'
                        fill={currentTab === idx ? '#839AFE' : '#DFE3F9'}
                      ></path>
                      <path
                        d='M160.039 39.9077L160.551 51.7574L80.7461 95.235V83.3853Z'
                        fill={currentTab === idx ? '#436AFD' : '#C4C9EE'}
                      ></path>
                    </svg>
                  </div>
                  <div style={{ gridRow }}></div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
