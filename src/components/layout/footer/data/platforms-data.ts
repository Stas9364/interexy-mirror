type PlatformData = {
  logo_src: string;
  link: string;
  star_src: string;
  reviews_number: string;
  alt: string;
};

export const platformsData: PlatformData[] = [
  {
    logo_src: '/platforms/clutch.svg',
    link: 'https://clutch.co/profile/interexy#reviews',
    star_src: '/platforms/clutch_star.svg',
    reviews_number: '60 reviews',
    alt: 'Clutch',
  },
  {
    logo_src: '/platforms/upwork.svg',
    link: '',
    star_src: '/platforms/upwork-star.svg',
    reviews_number: '100+ reviews',
    alt: 'Upwork',
  },
];
