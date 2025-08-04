'use client';
import dynamic from 'next/dynamic';

export const LazyReviewsSlider = dynamic(() => import('./ReviewsSlider'), {
  ssr: false,
});
