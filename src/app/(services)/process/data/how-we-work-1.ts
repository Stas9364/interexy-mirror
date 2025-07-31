import type { ProcessStage } from '@/components/blocks/how-we-work/how-we-work.types';

export const howWeWork: ProcessStage[] = [
  {
    number: '01',
    title: 'Preparation',
    description:
      'Preparation stage is the foundation of the overall product success & development process. We carefully go over your requirements, goals, concept & provide you with professional tech consulting from our business analyst, project manager, solutions architect & UI/UX design team to create a plan for the best version of the product that can disrupt the competition and achieve product market fit.',
    goals: [
      'Provide an in-depth understanding of your final goals',
      'Help to always be on the same page with you',
      'Help you a better opportunity to present documentation to investors',
      'Reduce overall time and costs of project development',
    ],
    outputs: [
      'Product Scope',
      'Application Environment',
      'User Classes and Characteristics',
      'User Epics & User Stories',
    ],
    src_img: '/process/Preparation.png',
  },
  {
    number: '02',
    title: 'Development',
    description:
      'Agility is the name of the game. Our scrum-based Agile development methodology ensures frequent builds and provides you with plenty of time to test and adjust. Meanwhile, our experienced Quality Assurance (QA) team will identify and manage testing.',
    goals: [
      'Transparency',
      'A two-way process (we work with your feedback a lot)',
      'A single interface for you to know what’s happening with the product at any given moment (JIRA)',
      'Accountability',
      'Frequent Product Demos',
    ],
    outputs: [
      'Agile Development',
      'Product Demo',
      'Sprint Planning',
      'Security & Scalability',
    ],
    src_img: '/process/Development.png',
  },
];
