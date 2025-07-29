'use client';

import dynamic from 'next/dynamic';

export const LazyReviewSwiper = dynamic(() => import('./SwiperComponent'), {
  ssr: false,
  loading: () => <TestimonialSkeleton />,
});

const TestimonialSkeleton = () => {
  return (
    <div className='w-1/3'>
      <div className='flex h-full animate-pulse flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm md:p-8'>
        <div className='mb-6'>
          <div className='relative h-[60px] w-[200px] overflow-hidden rounded-md bg-gray-200 text-left'></div>
        </div>

        <div className='mb-6'>
          <div className='h-4 w-24 rounded-md bg-gray-200'></div>
        </div>

        <div className='mb-8 flex-grow'>
          <div className='mb-2 h-4 w-full rounded-md bg-gray-200'></div>
          <div className='mb-2 h-4 w-11/12 rounded-md bg-gray-200'></div>
          <div className='h-4 w-10/12 rounded-md bg-gray-200'></div>
        </div>

        <div className='mt-auto'>
          <div className='mb-1 h-5 w-3/4 rounded-md bg-gray-200'></div>
          <div className='h-4 w-1/2 rounded-md bg-gray-200'></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSkeleton;
