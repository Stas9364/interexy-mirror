'use client';
import Image from 'next/image';
import { InterexyLink } from '@/components/link/InterexyLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

import { reviews } from './reviews-list';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ReviewsSlider = () => {
  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      spaceBetween={10}
      className='products-swiper h-full w-full'
    >
      {reviews.map(({ review, project }) => (
        <SwiperSlide key={review.company}>
          <div className='flex flex-col gap-x-[40px] gap-y-5 md:flex-row md:gap-y-0 lg:gap-x-[120px] xl:gap-x-[160px]'>
            <div className='flex w-full max-w-[730px] flex-col'>
              <div className='mb-5 flex gap-x-2'>
                <span className='text-secondary text-base leading-[1.4] font-medium'>
                  {review.rating.toFixed(1)}
                </span>
                <p className='flex gap-x-0.5'>
                  {Array(Math.ceil(review.rating))
                    .fill(null)
                    .map((_, idx) => (
                      <Image
                        key={idx}
                        src={'/platforms/clutch_star.svg'}
                        alt='star'
                        width={21}
                        height={21}
                      />
                    ))}
                </p>
              </div>
              <Link
                href={review.review_link}
                className='text-secondary hover:text-accent mb-4 text-xl leading-[1.4] font-medium transition-all duration-200 ease-in-out md:mb-[30px]'
              >
                {review.text}
              </Link>

              <div>
                <p className='mb-0.5 text-2xl leading-[1.4] font-bold md:mb-[6px] md:font-normal'>
                  {review.name}
                </p>
                <p>
                  <span className='text-secondary text-lg leading-[1.4] font-normal'>
                    {review.position},
                  </span>
                  <Link
                    href={review.company_link}
                    className='text-accent text-lg leading-[1.4] font-normal'
                  >
                    {review.company}
                  </Link>
                </p>
              </div>
            </div>
            <div className='flex w-full max-w-[620px] flex-col gap-y-10'>
              <div className='hidden flex-col gap-y-[10px] md:flex'>
                <span className='text-2xl leading-[1.4] font-bold'>Project</span>
                <p className='text-lg leading-[1.4] font-normal'>{project.description}</p>
              </div>
              <InterexyLink
                href={project.link}
                text='Full case'
                size='lg'
                variant='primary'
                className='max-w-[150px]'
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSlider;
