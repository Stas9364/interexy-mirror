'use client';

import dynamic from 'next/dynamic';

export const LazyTestimonialSwiper = dynamic(() => import('./TestimonialsSwiper'), {
  ssr: false,
});
