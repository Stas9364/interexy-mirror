import type { Process } from '@/components/service-blocks/our-process/our-process-types';

export const chatgptLifecycle: Process[] = [
  {
    title: 'Gather Requirements',
    subtitle: 'First of all we collect requirements to learn what you want as output',
    color: '#5cee9c',
  },
  {
    title: 'Prompt Design',
    subtitle: 'This stage is essential when it comes to GPT3 to test what we expect',
    color: '#6579f4',
  },
  {
    title: 'Setting the Parameters',
    subtitle: 'Then we will set the parameters based on use case you’re going to need',
    color: '#f6e7a5',
  },
  {
    title: 'Development & Integration',
    subtitle: 'These stages include API integration and the product development',
    color: '#b9e3f1',
  },
  {
    title: 'Testing',
    subtitle: 'Testing the chatbot functionality is essential for project success',
    color: '#40a1f2',
  },
];
