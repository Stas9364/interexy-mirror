
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
    title: "Services",
    subtitle:
      "Our service portfolio covers an entire software development life cycle and meets varied business needs.",
    link: "",
    submenu: [
      {
        title: "Mobile App Development",
        link: "/",
        items: [
          { title: "Convert web app to mobile app", link: "/" },
          { title: "Kotlin Multiplatform App Development", link: "/" },
        ],
      },
      {
        title: "Web Development",
        link: "",
        items: [
          { title: "ChatGPT Development", link: "/" },
        ],
      },
      {
        title: "Blockchain Developments",
        link: "",
        items: [
          { title: "Web3 Development Company", link: "/" },
          { title: "NFT Development", link: "/" },
          { title: "NFT Marketplace", link: "/" },
          { title: "Tokens & Crypto Wallets", link: "/" },
          { title: "Real Estate Tokenization", link: "/" },
          { title: "Metaverse Development", link: "/" },
        ],
      },
      {
        title: "Staff Augmentation",
        link: "",
        items: [
          { title: "Apps Launch", link: "/" },
        ],
      },
    ],
  },
  {
    title: "Tech Stack",
    subtitle:
      "Our expertise spans all major technologies and platforms, and advances to innovative technology trends.",
    link: "",
    submenu: [
      {
        title: "Blockchain Development",
        link: "",
        items: [
          { title: "Web3 Development Company", link: "/" },
          { title: "NFT Development", link: "/" },
          { title: "NFT Marketplace", link: "/" },
          { title: "Tokens & Crypto Wallets", link: "/" },
          { title: "Smart Contract", link: "/" },
          { title: "Real Estate Tokenization", link: "/" },
          { title: "Metaverse Development", link: "/" },
        ],
      },
      {
        title: "FullStack",
        link: "",
        items: [
          { title: "NFT Marketplace", link: "/" },
          { title: "Tokens & Crypto", link: "/" },
          { title: "Smart Contract", link: "/" },
        ],
      },
    ],
  },
  {
    title: "Industries",
    subtitle:
      "We build on the IT domain expertise and industry knowledge to design sustainable technology solutions.",
    link: "",
    submenu: [
      {
        title: "Healthcare App Development",
        link: "",
        items: [
          { title: "Cannabis Apps", link: "/" },
          { title: "Pharma App Development", link: "/" },
          { title: "Fitness App Development", link: "/" },
          { title: "Telemedicine App Development", link: "/" },
          { title: "Healthcare IT Consulting Services", link: "/" },
        ],
      },
      {
        title: "AI & Data Solutions",
        link: "",
        items: [
          { title: "Artificial Intelligence Development", link: "/" },
          { title: "AI Consulting Services", link: "/" },
          { title: "Machine Learning Solutions", link: "/" },
          { title: "Data Science & Analytics", link: "/" },
          { title: "Data Engineering", link: "/" },
        ],
      },
      {
        title: "Blockchain",
        link: "",
        items: [
          { title: "FinTech App Development", link: "/" },
          { title: "Real Estate Tokenization", link: "/" },
        ],
      },
      {
        title: "Other",
        link: "",
        items: [
          { title: "Delivery App Development", link: "/" },
          { title: "Social Network Apps", link: "/" },
          { title: "Online Education", link: "/" },
          { title: "AR/VR Development", link: "/" },
          { title: "E-Commerce", link: "/" },
          { title: "Internet of Things (IoT) App", link: "/" },
        ],
      },
    ],
  },
  {
    title: "Company",
    subtitle:
      "We work with innovative entrepreneurs to launch products that solve real market needs and create delightful experiences for their users.",
    link: "",
    submenu: [
      {
        title: "",
        link: "",
        items: [
          { title: "About us", link: "/" },
          { title: "Process", link: "/" },
          { title: "Company Values", link: "/" },
          { title: "Interexy Careers", link: "/" },
          { title: "Reviews", link: "/" },
        ],
      },
    ],
  },
  {
    title: "Portfolio",
    subtitle:
      "Our user-centered design encourages productivity and boosts revenue.",
    link: "",
    submenu: [
      {
        title: "",
        link: "",
        items: [
          { title: "Case Studies", link: "/" },
          { title: "Blog", link: "/" },
          { title: "Guide", link: "/" },
        ],
      },
    ],
  },
  {
    title: "Refer Now",
    subtitle: "",
    link: "/",
    submenu: [],
  },
];