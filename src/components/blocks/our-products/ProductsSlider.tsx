'use client';

import { products } from './slide-data';
import { InterexyLink } from '@/components/link/InterexyLink';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const ProductsSlider = () => {
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
      {products.map(({ image, title, description, logo, link }) => (
        <SwiperSlide key={title}>
          <div className='flex flex-col gap-x-[30px] gap-y-5 md:flex-row md:gap-y-0'>
            <div className='flex md:w-1/2'>
              <Image
                src={image}
                alt={title}
                width={750}
                height={0}
                sizes='50vw'
                className='h-auto w-full max-w-[750px] object-contain'
              />
            </div>
            <div className='flex flex-col justify-center gap-y-5 md:w-1/2 md:gap-y-10'>
              <div className='flex flex-col gap-y-5'>
                <h3 className='text-xl leading-[1.4] font-medium md:text-[26px] xl:text-[32px]'>
                  {title}
                </h3>
                <p className='text-base leading-[1.4] font-medium md:text-lg xl:text-xl'>
                  {description}
                </p>
              </div>

              <div className='flex items-center justify-between'>
                <Image src={logo} alt='dribbble' width={158} height={50} />
                <InterexyLink href={link} text='View details' variant={'secondary'} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlider;
