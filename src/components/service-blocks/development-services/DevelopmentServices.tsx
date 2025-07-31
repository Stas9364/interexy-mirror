import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import type { Service } from './services-types';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export const DevelopmentServices = ({
  title,
  titleChild,
  services,
  href,
  linkTitle,
}: {
  title: string;
  titleChild?: React.ReactNode;
  services: Service[];
  href?: string;
  linkTitle?: string;
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title}>{titleChild}</BlockTitle>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {services.map(({ img_src, title, description }) => (
            <div key={title}>
              <div className='relative mb-5 aspect-[400/287]'>
                <Image src={img_src} alt={title} fill className='object-contain' />
              </div>
              <div className='flex flex-col gap-y-[10px] md:gap-y-5'>
                <h3 className='text-2xl leading-[1.4] font-bold'>{title}</h3>
                <p className='text-base leading-[1.4] font-light md:text-lg'>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {href && (
          <div className='mt-5 flex justify-center md:mt-10'>
            <Link
              href={href}
              className='text-accent flex items-center gap-x-2 text-lg leading-[1.4] font-extrabold'
            >
              {linkTitle}
              <MoveRight />
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
};
