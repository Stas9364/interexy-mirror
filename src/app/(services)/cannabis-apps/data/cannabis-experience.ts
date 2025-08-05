import type { FullCycleItem } from '@/components/service-blocks/full-cycle-development/types';

export const cannabisExperience: FullCycleItem[] = [
  {
    title: 'Parsal',
    tags: ['Cannabis Apps', 'Flutter', 'iOS', 'Australia'],
    description:
      'The Parsl is a solution for managing cannabis compliance and regulation enforcement.',
    points: [
      {
        title: 'Goal',
        description:
          'Develop a stable mobile solution for existing SaaS web-based products to automate logistics & items scanning activities for employees in cannabis businesses.',
      },
      {
        title: 'Challenge',
        description:
          'The main challenge was to integrate the application with complex backend infrastructure and establish a seamless workflow using Flutter – we had to automate scanning activities and thus worked heavily with background threading, main UI thread & local memory a lot.',
      },
      {
        title: 'Result',
        description:
          'The application was developed successfully & is live on the marketplace – it’s already being used in cannabis businesses across the West Coast.',
      },
    ],
    btn: {
      title: '',
      link: '',
    },
    src_img: '/services/cannabis-apps/Group-253-2-1.png',
  },
];
