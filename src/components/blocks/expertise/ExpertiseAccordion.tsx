'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { MoveUpRight, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { ExpertiseT } from './expertise-types';

export const ExpertiseAccordion = ({ expertise }: { expertise: ExpertiseT[] }) => {
  const [imgSrc, setImgSrc] = useState(expertise[0].img_src);

  return (
    <div className='flex flex-col gap-x-[60px] lg:flex-row xl:gap-x-[130px]'>
      <div className='relative hidden w-full items-start justify-center pt-5 lg:flex lg:w-1/2'>
        <div className='relative flex aspect-square w-full items-center justify-center lg:sticky lg:top-[100px]'>
          {expertise.map(
            ({ title, img_src }) =>
              img_src &&
              imgSrc === img_src && (
                <ExpertiseImg key={title} img_src={img_src} title={title} />
              ),
          )}
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <Accordion type='single' collapsible>
          {expertise.map(({ title, text, link, img_src }) => (
            <AccordionItem
              key={title}
              value={title}
              className='border-b border-[#E0E0E0] last:border-b-0'
            >
              <AccordionTrigger
                chevronIcon={
                  <Plus className='pointer-events-none translate-y-0.5 transition-transform duration-200' />
                }
                className='hover:text-accent cursor-pointer py-4 text-base leading-[1.4] font-bold hover:bg-[#F0F1F7] md:px-[10px] lg:py-5 lg:text-[22px] xl:py-8 xl:text-2xl'
                onClick={() => setImgSrc(img_src)}
              >
                {title}
              </AccordionTrigger>
              <AccordionContent className='ml-auto flex w-full flex-col gap-y-[10px] pb-8 lg:w-[61%]'>
                <p className='text-lg leading-[1.4] font-medium text-[#555] xl:text-xl'>
                  {text}
                </p>
                {link && (
                  <Link
                    className='text-accent flex items-center gap-x-2 text-base leading-[1.3] font-bold xl:text-lg'
                    href={link}
                  >
                    Learn more
                    <MoveUpRight
                      size={18}
                      color='#5067f4'
                      strokeWidth={2}
                      className='color-accent min-h-5 min-w-5'
                    />
                  </Link>
                )}

                {img_src && (
                  <div className='relative mt-4 block aspect-square h-[300px] w-full lg:hidden'>
                    <ExpertiseImg img_src={img_src} title={title} />
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

const ExpertiseImg = ({
  img_src,
  title,
  className,
}: {
  img_src: string;
  title: string;
  className?: string;
}) => {
  return (
    <Image
      key={img_src}
      src={img_src}
      fill
      alt={title}
      sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'
      className={cn('object-contain', className)}
    />
  );
};
