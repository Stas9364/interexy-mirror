'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed right-5 bottom-[100px] z-50 flex h-10 w-10 cursor-pointer items-center justify-center border-1 border-[#f5f5f54d] bg-[#434d6766] p-3 text-white shadow-lg backdrop-blur-[4px] transition-opacity duration-300 md:right-6 md:h-[56px] md:w-[56px] ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'} `}
      aria-label='Up'
    >
      <ArrowUp />
    </button>
  );
};
