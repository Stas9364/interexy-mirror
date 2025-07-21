export type Package = {
  popular: boolean;
  sale?: number;
  price: number;
  title: string;
  description: {
    developer: string;
    qa: string;
    pm: string;
    ba?: string;
  };
  included: string[];
  not_included: string[];
  options?: {
    optional: string[];
    included: string[];
  };
};

export const packages: Package[] = [
  {
    popular: false,
    price: 5400,
    title: 'Light Package',
    description: {
      developer: '40 hours',
      qa: '40 hours',
      pm: '20 hours',
    },
    included: [
      'maintanence (lib updates, OS Support)',
      'bug fixes',
      'retesting',
      'manual testing',
      'ad hoc testing',
      'bug analysis',
      'bug report',
      'weekly sync with the team',
      'monthly report',
    ],
    not_included: [
      'new features',
      'test documentation',
      'functional testing',
      'regression testing',
      'non functional testing',
      'new features testing',
      'e2e testing',
      'exploratory testing',
      'usability testing',
      'test report',
      'improve the testing process',
      'feedback and recommendations to the development team',
      'Risk Management',
      'Resource Management',
      'Budget',
      'Scope and Schedule Management',
      'Prioritization',
      'Product Requirements',
      'Specification actualization',
    ],
  },
  {
    popular: true,
    price: 12800,
    title: 'Business Package',
    description: {
      developer: '80 hours',
      qa: '80 hours',
      pm: '40 hours',
      ba: '40 hours',
    },
    included: [
      'maintanence (lib updates, OS Support)',
      'bug fixes',
      'retesting',
      'manual testing',
      'ad hoc testing',
      'bug analysis',
      'bug report',
      'weekly sync with the team',
      'monthly report',
      'new features',
      'test documentation',
      'functional testing',
      'regression testing',
      'non functional testing',
      'new features testing',
      'e2e testing',
      'exploratory testing',
      'usability testing',
      'test report',
      'improve the testing process',
      'feedback and recommendations to the development team',
      'Risk Management',
      'Resource Management',
      'Budget',
      'Scope and Schedule Management',
      'Prioritization',
      'Product Requirements',
      'Specification actualization',
    ],
    not_included: [],
    options: {
      optional: ['40 hours – Designer', '20 hours – Devops'],
      included: [
        'New Design Features',
        'Infrastructure maintenance',
        'Development Support',
        'Infrastructure Optimization',
      ],
    },
  },
  {
    popular: false,
    sale: 10,
    price: 25600,
    title: 'Enterprise Package',
    description: {
      developer: '160 hours',
      qa: '160 hours',
      pm: '80 hours',
      ba: '80 hours',
    },
    included: [
      'maintanence (lib updates, OS Support)',
      'bug fixes',
      'retesting',
      'manual testing',
      'ad hoc testing',
      'bug analysis',
      'bug report',
      'weekly sync with the team',
      'monthly report',
      'new features',
      'test documentation',
      'functional testing',
      'regression testing',
      'non functional testing',
      'new features testing',
      'e2e testing',
      'exploratory testing',
      'usability testing',
      'test report',
      'improve the testing process',
      'feedback and recommendations to the development team',
      'Risk Management',
      'Resource Management',
      'Budget',
      'Scope and Schedule Management',
      'Prioritization',
      'Product Requirements',
      'Specification actualization',
    ],
    not_included: [],
    options: {
      optional: ['80 hours – Designer', '40 hours – Devops'],
      included: [
        'New Design Features',
        'Infrastructure maintenance',
        'Development Support',
        'Infrastructure Optimization',
      ],
    },
  },
];
