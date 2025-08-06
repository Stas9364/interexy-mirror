import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Review } from './review-type';

export default function SwiperComponent({ reviewsData }: { reviewsData: Review[] }) {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className='reviews-swiper pb-12'
      >
        {reviewsData.map(({ logo, domain, text, reviewer, company }, idx) => (
          <SwiperSlide key={idx} className='!h-auto select-none'>
            <div className='flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm md:p-8'>
              <div className='mb-6'>
                <div className='relative h-[60px] w-[200px] text-left'>
                  <Image src={logo} alt={company} fill className='object-contain' />
                </div>
              </div>

              <div className='mb-6'>
                <span className='text-accent text-sm font-medium tracking-wide uppercase'>
                  {domain}
                </span>
              </div>

              <div className='mb-8 flex-grow'>
                <p className='text-base leading-relaxed text-gray-700'>
                  &quot;{text}&quot;
                </p>
              </div>

              <div className='mt-auto'>
                <h3 className='mb-1 text-lg font-semibold text-gray-900'>
                  {reviewer.name}
                </h3>
                <p className='text-sm text-gray-500'>{reviewer.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='mt-8 flex items-center justify-center space-x-4'>
        <button
          aria-label='prev-slide'
          className='group swiper-button-prev-custom border-accent hover:bg-accent flex h-12 w-12 cursor-pointer items-center justify-center rounded-[10px] border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:border-gray-200 disabled:opacity-50'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            className='group-hover:text-white'
          >
            <path
              d='M15 18L9 12L15 6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <button
          aria-label='next-slide'
          className='group swiper-button-next-custom border-accent hover:bg-accent flex h-12 w-12 cursor-pointer items-center justify-center rounded-[10px] border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:border-gray-200 disabled:opacity-50'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            className='group-hover:text-white'
          >
            <path
              d='M9 18L15 12L9 6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </>
  );
}
