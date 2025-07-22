import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';
import type { Principle } from './principles';
import Link from 'next/link';

export const OurExpertise = ({
  title,
  subtitle,
  items,
  btn_title = 'Learn more',
}: {
  title: string;
  subtitle?: string;
  items: Principle[];
  btn_title?: string;
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} subtitle={subtitle} />

        <div className='flex grid-cols-3 flex-col gap-x-[25px] gap-y-[25px] lg:grid lg:gap-y-[35px] xl:gap-x-[30px] xl:gap-y-[40px]'>
          {items.map(({ img, title, description, href }) => (
            <div
              key={title}
              className='flex flex-col gap-y-[10px] border-b border-[#D6D6D6] pb-[15px] lg:gap-y-5'
            >
              <div className='flex gap-x-[15px]'>
                {img && (
                  <Image
                    src={img}
                    alt={title}
                    width={35}
                    height={35}
                    className='max-h-[35px] min-h-[35px] max-w-[35px] min-w-[35px] object-contain'
                  />
                )}
                <p className='text-xl leading-[1.4] font-medium md:text-[26px] xl:text-[32px]'>
                  {title}
                </p>
              </div>

              <p className='text-secondary text-sm leading-[1.4] font-medium md:text-base xl:text-xl'>
                {description}
              </p>

              {href && (
                <Link
                  href={href}
                  className='text-accent mt-auto text-lg leading-[1.4] font-extrabold'
                >
                  {btn_title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
