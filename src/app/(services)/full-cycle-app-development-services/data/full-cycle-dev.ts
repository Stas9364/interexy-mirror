import type { FullCycleItem } from '@/components/service-blocks/full-cycle-development/types';

export const fullCycleItems: FullCycleItem[] = [
  {
    title: 'Crumb',
    tags: ['Healthcare & Fitness', 'Germany', 'Mobile', 'iOS', 'Startup'],
    description:
      'Hamburg-based fintech health startup mobile application based on the idea of rewarding users for health & fitness activities',
    points: [
      {
        title: 'Challenge',
        description:
          'Creation of the first MVP for the company from scratch based on a project that was created in a very short time to convince investors of the need for a financial round.',
      },
      {
        title: 'Solution',
        description:
          'We decided to rewrite the whole product from scratch, using native iOS development technologies.HealthKit integration was one of the main reasons for us to make this kind of decision since the app was built using cross-platform React Native technology.',
      },
      {
        title: 'Result',
        description:
          'We got to the top 17th of the German Health & Fitness App Storepage — the product was competing with a multi-million dollar application, and we built an MVP within 1.5 months with under a $20k budget. Awesome user reviews are the best validation of the work done.',
      },
    ],
    btn: {
      title: 'Read case',
      link: 'https://interexy.com/case/crumb-app/',
    },
    src_img: '/services/full-cycle-app-development-services/crumb.png',
  },
  {
    title: 'One Rover',
    tags: ['Android', 'Delivery', 'USA', 'iOS', 'Flutter', 'Cross Platform'],
    description:
      'One Rover is a leader in Rideshare cost savings, options, and satisfaction. A Rover is a professional partner Driver that is dedicated to providing robust commute options to One Rover platform users in boundless locations around the world.',
    points: [
      {
        title: 'Goal',
        description:
          'Develop a stable mobile solution for existing SaaS web-based productsto automate logistics & items scanning activities for employees in cannabis businesses.',
      },
      {
        title: 'Challenge',
        description:
          'Develop a stable mobile solution for existing SaaS web-based productsto automate logistics & items scanning activities for employees in cannabis businesses.',
      },
      {
        title: 'Solution',
        description:
          'One Rover had existing web-based products and tight time-frames outlined by the investors to develop MVP of the app using complex Unity integrations with new-born app development technology — Flutter.',
      },
      {
        title: 'Result',
        description:
          'The app was developed and successfully launched into the Google Play Market — it has 100,000+ users and counting!',
      },
    ],
    btn: {
      title: 'Read case',
      link: 'https://interexy.com/case/one-rover-request-a-ride/',
    },
    src_img: '/services/full-cycle-app-development-services/one-rover.png',
  },
];
