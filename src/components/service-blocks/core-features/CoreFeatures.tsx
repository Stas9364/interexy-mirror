'use client';

import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { MoveRight } from 'lucide-react';
import { useState } from 'react';
import type { Data } from './core-features-types';

export const CoreFeatures = ({ title, data }: { title: string; data: Data }) => {
  const [type, setType] = useState<(typeof data.tabs)[number]['key']>(data.tabs[0].key);

  return (
    <Section>
      <Container>
        <BlockTitle title={title} />

        <div>
          <div className='flex justify-center'>
            <ul
              className='mx-auto mb-10 flex flex-col items-center justify-center rounded-2xl bg-white px-2.5 shadow-[0_0_15px_rgba(62,52,101,0.08)] md:mb-[78px] md:inline-flex md:flex-row'
              role='tablist'
            >
              {data.tabs.map(tab => (
                <li
                  key={tab.key}
                  className='relative flex cursor-pointer items-center gap-x-[8px] px-10 py-[12px] text-lg leading-[1.4] font-normal select-none'
                  style={{
                    color: type === tab.key ? '#5067f4' : '#101018',
                  }}
                  onClick={() => setType(tab.key)}
                  role='tab'
                  aria-selected={type === tab.key}
                  tabIndex={0}
                >
                  {type === tab.key && (
                    <MoveRight
                      className='absolute top-1/2 left-[10px] -translate-y-1/2'
                      size={16}
                      strokeWidth={2}
                    />
                  )}
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4'>
            {data.content[type].map(({ title, description }, index) => (
              <div
                key={index}
                className='flex flex-col gap-y-5 rounded-[20px] bg-[#F5F7FB] p-[15px]'
              >
                <h3 className='text-xl leading-[1.4] font-bold'>{title}</h3>
                <p className='text-secondary text-lg leading-[1.4]'>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
