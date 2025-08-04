'use client';
import dynamic from 'next/dynamic';
import type { CaseT } from './cases-list';

export const LazyPortfolioSlider = dynamic<{ cases: CaseT[] }>(
  () => import('./PortfolioSlider'),
  {
    ssr: false,
  },
);
