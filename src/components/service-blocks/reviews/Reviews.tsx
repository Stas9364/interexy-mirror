import Image from 'next/image';
import type { ReviewT } from './reviews-data';
import { Container, Section } from '@/components/layout';
import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Platforms } from '@/components/layout/footer/components/Platforms';
import { InterexyLink } from '@/components/link/InterexyLink';

export const Reviews = ({ reviews }: { reviews: ReviewT[] }) => {
  return (
    <Section>
      <Container>
        <BlockTitle title='Highly Satisfied Clients'>
          <Platforms
            containerClassName='flex justify-center gap-x-5 mt-5'
            platformClassName='bg-[#434343] rounded-[10px] p-[10px] md:p-5'
          />

          <div className='flex justify-center'>
            <p className='text-secondary mt-5 max-w-[1160px] text-center text-base font-normal lg:mt-10 lg:text-lg'>
              Interexy LLC is a Miami-headquartered custom software development and IT
              consulting company with deep expertise in over 15 industries offering
              innovative solutions for such market giants as SAP, Pampers & General
              Electric.
            </p>
          </div>
        </BlockTitle>

        <div className='flex justify-center'>
          <div className='max-w-[1160px] rounded-[20px] bg-[#f7f8fc] p-[15px] md:rounded-[42px] md:p-[25px]'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
              {reviews.map(({ title, position }) => (
                <div
                  key={title}
                  className='flex min-h-[280px] max-w-[357px] flex-col justify-between bg-white p-[23px] shadow-[-5.13234px_2.05294px_12.3176px_rgb(41_47_117_/_0.08)]'
                >
                  <div>
                    <div className='mb-5 flex gap-x-[5px]'>
                      <span className='text-lg leading-[1.4] font-bold'>5.0</span>
                      <p className='flex gap-x-0.5'>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Image
                            key={i}
                            alt='star'
                            src='/platforms/clutch_star.svg'
                            width={17}
                            height={17}
                          />
                        ))}
                      </p>
                    </div>
                    <p className='text-sm leading-[1.4] font-light'>{title}</p>
                  </div>
                  <div>
                    <p className='text-secondary mb-4 text-sm leading-[1.4] font-light'>
                      {position}
                    </p>
                    <p className='flex gap-x-[10px]'>
                      <Image
                        src={'/services/machine-learning-and-ai/svgviewer-output.svg'}
                        height={24}
                        width={23}
                        alt='verified'
                      />
                      Verified Review
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex w-full items-center justify-center gap-x-2 pt-[25px]'>
              <span className='text-base leading-[1.4] font-normal'>Powered by</span>
              <Image
                src='/services/machine-learning-and-ai/clutch-rewies.png'
                alt='clutch'
                width={93}
                height={35}
              />
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <InterexyLink
            href='/contact-us'
            text='Book a call'
            variant='primary'
            className='mt-[80px] max-w-[230px]'
          />
        </div>
      </Container>
    </Section>
  );
};
