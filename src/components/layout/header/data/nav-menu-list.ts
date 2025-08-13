type MenuData = {
  title: string;
  subtitle: string;
  link: string;
  submenu: Submenu[];
};

type Submenu = {
  title: string;
  link: string;
  items: SubmenuItem[];
};

export type SubmenuItem = {
  title: string;
  link: string;
};

export const menuData: MenuData[] = [
  {
    title: 'Services',
    subtitle:
      'Our service portfolio covers an entire software development life cycle and meets varied business needs.',
    link: '',
    submenu: [
      {
        title: 'Mobile App Development',
        link: '',
        items: [
          { title: 'Convert web app to mobile app', link: '/web-to-app-solutions/' },
          { title: 'Kotlin Multiplatform App Development', link: '/kotlin/' },
        ],
      },
      {
        title: 'Web Development',
        link: '',
        items: [
          {
            title: 'ChatGPT Development',
            link: '/empower-your-product-with-chatgpt-development-solutions/',
          },
        ],
      },
      {
        title: 'Blockchain Developments',
        link: '',
        items: [
          {
            title: 'Web3 Development Company',
            link: '/custom-web3-development-app-solutions/',
          },
          {
            title: 'NFT Development',
            link: '/non-fungible-token-nft-development-services/',
          },
          { title: 'NFT Marketplace', link: '/nft-marketplace-app-development-service/' },
          {
            title: 'Tokens & Crypto Wallets',
            link: '/cryptocurrency-app-development-services/',
          },
          {
            title: 'Real Estate Tokenization',
            link: '/smart-contract-development-services/',
          },
          { title: 'Metaverse Development', link: '/metaverse-development-services/' },
        ],
      },
      {
        title: 'Staff Augmentation',
        link: '/staff-augmentation-services-for-software-development/',
        items: [
          { title: 'Apps Launch', link: '/mobile-app-launch-and-publishing-services/' },
        ],
      },
    ],
  },
  {
    title: 'Tech Stack',
    subtitle:
      'Our expertise spans all major technologies and platforms, and advances to innovative technology trends.',
    link: '',
    submenu: [
      {
        title: 'Blockchain Development',
        link: '',
        items: [
          {
            title: 'Real Estate Tokenization',
            link: '/real-estate-tokenization-services/',
          },
        ],
      },
    ],
  },
  {
    title: 'Industries',
    subtitle:
      'We build on the IT domain expertise and industry knowledge to design sustainable technology solutions.',
    link: '',
    submenu: [
      {
        title: 'Healthcare App Development',
        link: '/healthcare-mobile-app-development-services/',
        items: [
          { title: 'Cannabis Apps', link: '/cannabis-apps/' },
          {
            title: 'Pharma App Development',
            link: '/pharmacy-app-development-services/',
          },
          { title: 'Fitness App Development', link: '/fitness-app-development/' },
          {
            title: 'Telemedicine App Development',
            link: '/telemedicine-app-development/',
          },
          {
            title: 'Healthcare IT Consulting Services',
            link: '/healthcare-it-consulting-services/',
          },
        ],
      },
      {
        title: 'AI & Data Solutions',
        link: '',
        items: [
          {
            title: 'Artificial Intelligence Development',
            link: '/machine-learning-and-ai-app-development-services/',
          },
        ],
      },
      {
        title: 'Blockchain',
        link: '/blockchain-app-development-services/',
        items: [
          {
            title: 'FinTech App Development',
            link: '/fintech-app-development-services/',
          },
        ],
      },
      {
        title: 'Other',
        link: '',
        items: [
          {
            title: 'Delivery App Development',
            link: '/delivery-app-development-services/',
          },
          {
            title: 'Social Network Apps',
            link: '/social-media-application-development-services/',
          },
          {
            title: 'Online Education',
            link: '/educational-mobile-app-development-services/',
          },
          {
            title: 'AR/VR Development',
            link: '/augmented-and-virtual-reality-ar-vr-app-development-services/',
          },
          { title: 'E-Commerce', link: '/marketplace-app-development-services/' },
          { title: 'Internet of Things (IoT) App', link: '/iot-development-services/' },
        ],
      },
    ],
  },
  {
    title: 'Company',
    subtitle:
      'We work with innovative entrepreneurs to launch products that solve real market needs and create delightful experiences for their users.',
    link: '',
    submenu: [
      {
        title: '',
        link: '',
        items: [
          { title: 'About us', link: '/about-us' },
          { title: 'Process', link: '/process' },
        ],
      },
    ],
  },
  {
    title: 'Portfolio',
    subtitle: 'Our user-centered design encourages productivity and boosts revenue.',
    link: '',
    submenu: [
      {
        title: '',
        link: '',
        items: [
          { title: 'Case Studies', link: 'https://interexy.com/portfolio/' },
          { title: 'Blog', link: 'https://interexy.com/blog/' },
        ],
      },
    ],
  },
  {
    title: 'Refer Now',
    subtitle: '',
    link: '/referral',
    submenu: [],
  },
];
