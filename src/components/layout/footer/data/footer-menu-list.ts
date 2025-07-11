type MenuData = {
  title: string;
  submenu: Submenu[];
};

export type Submenu = {
  title: string;
  link: string;
  items: SubmenuItem[];
};

export type SubmenuItem = {
  title: string;
  link: string;
};

export const footerMenuList: MenuData[] = [
  {
    title: 'Services',
    submenu: [
      {
        title: 'Blockchain Development',
        link: '/',
        items: [
          { title: 'NFT', link: '/' },
          { title: 'Smart Contracts', link: '/' },
          { title: 'Cryptocurrency', link: '/' },
        ],
      },
      {
        title: 'Artificial Intelligence',
        link: '',
        items: [{ title: 'Chat-GPT integration', link: '/' }],
      },
      {
        title: 'Machine Learning',
        link: '',
        items: [],
      },
      {
        title: 'Business Analysis',
        link: '',
        items: [],
      },
    ],
  },
  {
    title: 'Tech Stack',
    submenu: [
      {
        title: 'Back-end',
        link: '',
        items: [{ title: 'NestJS', link: '/' }],
      },
      {
        title: 'Front-end',
        link: '',
        items: [
          { title: 'React', link: '/' },
          { title: 'Angular', link: '/' },
        ],
      },
    ],
  },
  {
    title: 'Technology',
    submenu: [
      {
        title: 'Angular',
        link: '/',
        items: [],
      },
      {
        title: 'NestJS',
        link: '/',
        items: [],
      },
      {
        title: 'Express',
        link: '/',
        items: [],
      },
    ],
  },
  {
    title: 'Industries',
    submenu: [
      {
        title: 'Healthcare',
        link: '/',
        items: [],
      },
      {
        title: 'FinTech',
        link: '/',
        items: [],
      },
      {
        title: 'Real Estate',
        link: '/',
        items: [],
      },
      {
        title: 'Blockchain',
        link: '/',
        items: [],
      },
      {
        title: 'Internet of Things',
        link: '/',
        items: [],
      },
      {
        title: 'EdTech',
        link: '/',
        items: [],
      },
    ],
  },
  {
    title: 'Company',
    submenu: [
      {
        title: '',
        link: '',
        items: [
          { title: 'About Us', link: '/about-us' },
          { title: 'Partnership', link: '/' },
          { title: 'Portfolio', link: '/' },
          { title: 'Blog', link: '/' },
        ],
      },
    ],
  },
];
