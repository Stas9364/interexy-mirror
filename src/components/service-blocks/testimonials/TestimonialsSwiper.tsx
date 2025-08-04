'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { testimonials } from './data/testimonials';
import { useState } from 'react';
import { Overlay } from '@/components/overlay/Overlay';
import { Play } from 'lucide-react';

const TestimonialsSwiper = () => {
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({});
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const handlePlayClick = (index: number) => {
    setPlayingVideos(prev => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleReadMore = (idx: number) => {
    setExpanded(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={32}
      slidesPerView={1}
      className='testimonials_slider'
      loop={true}
    >
      {testimonials.map(({ cover_video, name, position, text, video }, idx) => (
        <SwiperSlide key={idx}>
          <div className='relative flex flex-col items-start gap-x-[30px] rounded-[20px] bg-[#f8f8f9] p-5 shadow md:p-[70px] lg:flex-row'>
            <Image
              className='absolute top-[46px] right-[35px]'
              src='/quote.svg'
              alt='quote'
              width={102}
              height={81}
            />

            <div className='video relative mb-4'>
              <div className='relative h-[247px] w-[300px] overflow-hidden rounded-lg bg-black sm:w-[406px]'>
                {!playingVideos[idx] ? (
                  <div className='relative h-full w-full'>
                    <Image
                      className='object-cover'
                      src={cover_video}
                      alt={`testimony ${name}`}
                      fill
                      sizes='(max-width: 1024px) 100vw, 406px'
                    />
                    <Overlay />
                    <button
                      onClick={() => handlePlayClick(idx)}
                      className='group hover:bg-opacity-10 absolute inset-0 z-10 flex cursor-pointer items-center justify-center transition-all duration-300'
                      aria-label='Start video'
                    >
                      <div className='bg-opacity-90 group-hover:bg-opacity-100 relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 group-hover:scale-110'>
                        <Play
                          className='relative ml-1 h-6 w-6 text-gray-800'
                          fill='currentColor'
                        />
                      </div>
                    </button>
                  </div>
                ) : (
                  <iframe
                    className='h-full w-full'
                    src={video}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            <div className=''>
              <h3 className='mb-1 text-xl font-semibold'>{name}</h3>
              <p className='mb-5 text-gray-500'>{position}</p>
              <div
                className='text-secondary mb-4 line-clamp-4 text-lg'
                style={{
                  WebkitLineClamp: expanded[idx] ? ' 100' : '',
                }}
              >
                &quot;{text}&quot;
              </div>
              <button
                className='text-accent hover:text-primary cursor-pointer border-none bg-transparent pb-[10px] duration-200 md:p-0'
                onClick={() => handleReadMore(idx)}
              >
                {expanded[idx] ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSwiper;
