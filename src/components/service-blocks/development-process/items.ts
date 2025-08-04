import type { ProcessStep } from './dev-process-types';

export const processSteps: ProcessStep[] = [
  {
    idx: 1,
    title: 'Preparation',
    description:
      'We start by understanding your business goals, target audience, and technical requirements. Our team conducts thorough research and creates a detailed project plan with timelines and milestones.',
  },
  {
    idx: 2,
    title: 'Design & Prototyping',
    description:
      'Our designers create wireframes and prototypes that align with your brand identity. We focus on user experience and ensure the design is both beautiful and functional.',
  },
  {
    idx: 3,
    title: 'Development',
    description:
      'Our developers build your project using modern technologies and best practices. We follow agile methodology with regular updates and testing throughout the development process.',
  },
  {
    idx: 4,
    title: 'Testing & Quality Assurance',
    description:
      'We conduct comprehensive testing across different devices and browsers to ensure your project works flawlessly. Our QA team identifies and fixes any issues before launch.',
  },
  {
    idx: 5,
    title: 'Deployment & Launch',
    description:
      'We deploy your project to production servers and ensure everything is working correctly. Our team monitors the launch and provides support during the initial phase.',
  },
  {
    idx: 6,
    title: 'Maintenance & Support',
    description:
      'After launch, we provide ongoing maintenance and support to keep your project running smoothly. We offer regular updates and improvements based on user feedback.',
  },
];
