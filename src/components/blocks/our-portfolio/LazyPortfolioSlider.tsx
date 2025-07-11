'use client';
import dynamic from 'next/dynamic';

export const LazyPortfolioSlider = dynamic(() => import('./PortfolioSlider'), {
  ssr: false,
});
