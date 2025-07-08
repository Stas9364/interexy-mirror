'use client';

import dynamic from 'next/dynamic';

export const LazyProductsSlider = dynamic(() => import('./ProductsSlider'), {
  ssr: false,
});
