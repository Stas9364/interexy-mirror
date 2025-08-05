import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { FullCycleItem } from './types';

export const FullCycleDevelopment = ({
  title,
  items,
}: {
  title: string;
  items: FullCycleItem[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} />

        <div className='grid grid-cols-1 gap-y-[80px]'>
          {items.map(({ title, tags, description, points, btn, src_img }, idx) => (
            <div
              key={title}
              className={`flex ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
            >
              <div className='flex flex-col justify-center lg:w-1/2'>
                <h3 className='mb-[15px] text-4xl leading-[1.4] font-bold lg:text-5xl'>
                  {title}
                </h3>

                {tags.length > 0 && (
                  <div className='mb-6 flex flex-wrap gap-3'>
                    {tags.map(tag => (
                      <span
                        key={tag}
                        className='rounded-[10px] border-1 px-6 py-3 text-base leading-[1.4] font-medium lg:text-lg'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className='text-lg leading-[1.4] font-medium'>{description}</p>

                <div>
                  {points.map(({ title, description }) => (
                    <div key={title}>
                      <h4 className='pt-7 pb-4 text-[28px] leading-[1.4] font-bold'>
                        {title}
                      </h4>
                      <p className='text-lg leading-[1.4] font-normal'>{description}</p>
                    </div>
                  ))}
                </div>

                {btn.link && (
                  <InterexyLink
                    className='mt-[30px] max-w-[180px]'
                    variant={'primary'}
                    text={btn.title}
                    href={btn.link}
                  />
                )}
              </div>
              <div className='flex lg:w-1/2'>
                <div className='relative mt-4 block aspect-square h-[500px] w-full lg:h-[711px]'>
                  <Image
                    src={src_img}
                    fill
                    alt={title}
                    sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'
                    className={cn('object-contain')}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-[60px] flex justify-center'>
          <InterexyLink
            className='max-w-[180px]'
            variant={'primary'}
            text={'All cases'}
            href={'https://interexy.com/portfolio/'}
          />
        </div>
      </Container>
    </Section>
  );
};
