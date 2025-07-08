'use client';
import dynamic from 'next/dynamic';

export const LazyOurSuccessSlider = dynamic(() => import('./OurSuccessSlider'), {
  ssr: false,
});
