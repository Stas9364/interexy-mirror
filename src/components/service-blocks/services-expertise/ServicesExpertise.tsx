import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';
import type { Service } from './services-expertice-types';

export const ServicesExpertise = ({
  title,
  services,
}: {
  title: string;
  services: Service[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} />

        <div className='flex flex-col gap-y-[55px]'>
          {services.map(({ title, subtitle, img_src }, idx) => (
            <div
              key={title}
              className={`flex flex-col items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className='md:w-1/2'>
                <div className='flex w-full flex-col gap-y-8 rounded-[20px] bg-[#a8bdf61a] px-8 py-6 md:max-w-[610px] lg:px-[67px] lg:py-[56px]'>
                  <p className='text-4xl leading-[1.4] font-bold'>{title}</p>
                  <p className='text-lg leading-[1.4] font-light'>{subtitle}</p>
                </div>
              </div>
              <div className='h-auto w-full md:w-1/2'>
                <div className='relative mx-auto aspect-[610/610] h-auto w-full max-w-[610px]'>
                  <Image
                    src={img_src}
                    alt={title}
                    fill
                    className='object-contain'
                    sizes='(max-width: 1024px) 100vw, 610px'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
