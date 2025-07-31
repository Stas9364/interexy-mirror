import type { ProcessStage } from '@/components/blocks/how-we-work/how-we-work.types';

export const howWeWork2: ProcessStage[] = [
  {
    number: '03',
    title: 'QA testing',
    description:
      'Agility is the name of the game. Our scrum-based Agile development methodology ensures frequent builds and gives you plenty of time to test and adjust. While our experienced Quality Assurance (QA) team will identify and manage testing.',
    goals: [
      'Quality Control',
      'Scalability Control',
      'Highest Market Standards Fit',
      'Marketing Budgets Optimization (the more we test, the less churn you have)',
    ],
    outputs: ['Regression Testing', 'Unit Tests', 'Stress Testing', 'Functional Testing'],
    src_img: '/process/qa-testing.png',
  },
  {
    number: '04',
    title: 'Launch (App Store & Google Play approval)',
    description:
      'Develop applications that fully meet market requirements. When the application is fully ready, we publish it on Google Play and App Store and take on any questions that may arise during its publication.',
    goals: [
      'Smooth Launch',
      'Done-for-you Launch',
      'Proven Stress-free Launch Process',
      'Analytics to gather market feedback right away',
    ],
    outputs: [
      'Product Servers Setup',
      'Analytics for feedback collection',
      'AppStore & Google Play publishing',
    ],
    src_img: '/process/launch.png',
  },
  {
    number: '05',
    title: 'Support',
    description:
      'To get the job done and meet your business goals after a development stage, we ensure continuously maintaining and providing related support for a very long time now to meet new requirements, avoid performance issues, design errors in the ever-evolving environment that haunts any software system during its development period.',
    goals: [
      'Improving product with the feedback coming from the market',
      'Consulting & feedback on the current product market state',
      'On-demand support',
      'Business analysts to come up with new features',
    ],
    outputs: [
      'Agile Team Support',
      'Market feedback based improvements',
      'Business analyst Growth Plan',
      'Consistent Updates',
    ],
    src_img: '/process/Support.png',
  },
];
