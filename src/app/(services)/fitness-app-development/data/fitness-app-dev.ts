import type { FullCycleItem } from '@/components/service-blocks/full-cycle-development/types';

export const fitnessAppDev: FullCycleItem[] = [
  {
    title: 'Crumb',
    tags: ['Healthcare & Fitness', 'Mobile', 'iOS', 'Startup', 'Germany'],
    description:
      'Hamburg-based fintech health startup mobile application based on the idea of rewarding users for health & fitness activities',
    points: [
      {
        title: 'Challenge',
        description:
          'Creation of the first MVP for the company from scratch based on a project that was created in a very short time to convince investors of the need for a financial round.',
      },
      {
        title: 'Goal',
        description:
          'We decided to rewrite the whole product from scratch, using native iOS development technologies. HealthKit integration was one of the main reasons for us to make this kind of decision since the app was built using cross-platform React Native technology.',
      },
      {
        title: 'Solution',
        description:
          'We got to the top 17th of the German Health & Fitness App Store page — the product was competing with a multi-million dollar application, and we built an MVP within 1.5 months with under a $20k budget. Awesome user reviews are the best validation of the work done.',
      },
    ],
    btn: {
      title: 'Read case',
      link: 'https://interexy.com/case/crumb-app/',
    },
    src_img: '/services/fitness-app-development/Group-626258.png',
  },
];
