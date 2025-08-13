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
        link: '',
        items: [
          { title: 'NFT', link: '/non-fungible-token-nft-development-services/' },
          { title: 'Smart Contracts', link: '/smart-contract-development-services/' },
          { title: 'Cryptocurrency', link: '/cryptocurrency-app-development-services/' },
        ],
      },
      {
        title: 'Artificial Intelligence',
        link: '',
        items: [
          {
            title: 'Chat-GPT integration',
            link: '/empower-your-product-with-chatgpt-development-solutions/',
          },
        ],
      },
      {
        title: 'Machine Learning',
        link: '/machine-learning-and-ai-app-development-services/',
        items: [],
      },
      {
        title: 'Staff Augmentation',
        link: '/staff-augmentation-services-for-software-development/',
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
        items: [{ title: 'NestJS', link: 'https://interexy.com/portfolio/nestjs/' }],
      },
    ],
  },
  {
    title: 'Industries',
    submenu: [
      {
        title: 'Healthcare',
        link: '/healthcare-mobile-app-development-services/',
        items: [],
      },
      {
        title: 'FinTech',
        link: '/fintech-app-development-services/',
        items: [],
      },
      {
        title: 'Real Estate',
        link: '/real-estate-app-development-services/',
        items: [],
      },
      {
        title: 'Blockchain',
        link: '/blockchain-app-development-services/',
        items: [],
      },
      {
        title: 'Internet of Things',
        link: '/iot-development-services/',
        items: [],
      },
      {
        title: 'EdTech',
        link: '/educational-mobile-app-development-services/',
        items: [],
      },
      {
        title: 'Social Network Apps',
        link: '/social-media-application-development-services/',
        items: [],
      },
      {
        title: 'AR/VR',
        link: '/augmented-and-virtual-reality-ar-vr-app-development-services/',
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
          { title: 'Partnership', link: '/referral' },
          { title: 'Portfolio', link: 'https://interexy.com/portfolio/' },
          { title: 'Blog', link: 'https://interexy.com/blog/' },
        ],
      },
    ],
  },
];
