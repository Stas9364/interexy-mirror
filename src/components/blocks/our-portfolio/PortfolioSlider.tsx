'use client';

import { useState } from 'react';
import Image from 'next/image';
import { InterexyLink } from '@/components/link/InterexyLink';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { type CaseT } from './cases-list';

const PortfolioSlider = ({ cases }: { cases: CaseT[] }) => {
  const [activeBg, setActiveBg] = useState(0);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  const onSlideMouseEnter = (idx: number) => setActiveBg(idx);

  const onSlideMouseLeave = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) setActiveSlide(null);
  };

  const onSlideClick = (idx: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) setActiveSlide(idx);
  };
  return (
    <div className='relative'>
      {/* Фоновые изображения */}
      <div className='absolute inset-0 -z-10 h-full w-full'>
        {cases.map((c, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-300 ${activeBg === idx ? 'opacity-100' : 'opacity-0'}`}
            style={{ position: 'absolute' }}
          >
            <Image
              src={c.bg_image}
              alt={c.heading}
              fill
              className='object-cover'
              priority={idx === 0}
              sizes='100vw'
            />
          </div>
        ))}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-black/30' />
      </div>

      {/* Слайдер */}
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
          350: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
        className='our-portfolio__slider'
      >
        {cases.map((c, idx) => (
          <SwiperSlide
            key={idx}
            className='border-r border-white/20 last:border-none'
            onMouseEnter={() => onSlideMouseEnter(idx)}
            onMouseLeave={onSlideMouseLeave}
            onClick={() => onSlideClick(idx)}
          >
            <div className='group flex h-[370px] cursor-pointer flex-col gap-2 bg-transparent p-6 transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#9B76E4A6] hover:to-[#101010A6] md:h-[500px] md:gap-4 md:p-10 xl:h-[705px] xl:p-16'>
              <h3 className='mt-auto text-base font-bold text-white md:text-2xl xl:text-3xl'>
                {c.heading}
              </h3>
              <p
                className={`line-clamp-5 text-sm font-normal text-white md:text-lg ${
                  activeSlide === idx ? 'block' : 'hidden'
                } group-hover:block`}
              >
                {c.case_description}
              </p>
              <InterexyLink
                href={c.case_link}
                text='Learn more'
                variant='outline'
                size='md'
                className={`mt-5 max-w-[150px] transition hover:border-[#2254CD] hover:bg-[#2254CD] md:mt-10 ${
                  activeSlide === idx ? 'flex' : 'hidden'
                } group-hover:flex`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
