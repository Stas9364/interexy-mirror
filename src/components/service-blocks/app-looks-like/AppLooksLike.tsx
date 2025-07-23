'use client';

import { Container, Section } from '@/components/layout';
import { BlockTitle } from '@/components/block-title/BlockTitle';
import Image from 'next/image';
import { useState } from 'react';
import { MoveRight } from 'lucide-react';

const tabs = [
  { key: 'forCustomers', label: 'For customer' },
  { key: 'forPartners', label: 'For partner' },
] as const;

export const AppLooksLike = ({
  title,
  forCustomers,
  forPartners,
}: {
  title: string;
  forCustomers: string[];
  forPartners: string[];
}) => {
  const [type, setType] = useState<(typeof tabs)[number]['key']>('forCustomers');

  const images = type === 'forCustomers' ? forCustomers : forPartners;

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
              {tabs.map(tab => (
                <li
                  key={tab.key}
                  className='relative flex cursor-pointer items-center gap-x-[8px] px-10 py-[12px] text-lg leading-[1.4] font-normal'
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

          <div className='flex flex-wrap justify-center gap-y-5'>
            {images.map((item, idx) => (
              <div
                key={idx}
                className='relative mx-4 h-[433px] w-[200px] min-w-[200px] shadow-[0_0_15px_rgba(62,52,101,0.08)] xl:mx-[35px]'
              >
                <Image
                  fill
                  src={item}
                  alt={`${type === 'forCustomers' ? 'For customer' : 'For partner'} ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
