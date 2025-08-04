export type PostT = {
  image: string;
  title: string;
  excerpt: string;
  link: string;
  tags: { title: string; link: string }[];
  author?: string;
  date?: string;
};

export const blogPosts: PostT[] = [
  {
    image: '/blocks/blog/How-to-Create-Your-Own-Metaverse-Virtual-World_.png',
    title: 'How to Create Your Own Metaverse Virtual World?',
    excerpt:
      'The term Metaverse has gained popularity during the last few years thanks to the increased use of...',
    link: 'https://interexy.com/how-to-create-your-own-metaverse-virtual-world/',
    tags: [
      { title: 'App development', link: '#' },
      { title: 'Blockchain & Web3', link: '#' },
    ],
    author: 'Stan Sakharchuk',
    date: 'June 17, 2025',
  },
  {
    image:
      '/blocks/blog/How-To-Create-A-Pitch-Deck_-Tips-For-A-Good-Pitch-Deck-768x220.png',
    title: 'How To Create A Pitch Deck: Tips For A Good Pitch Deck',
    excerpt: 'How to prepare a proper pitch deck? Check out this post!',
    link: 'https://interexy.com/how-to-prepare-pitch-deck/',
    tags: [
      { title: 'Developing', link: '#' },
      { title: 'Investments', link: '#' },
      { title: 'Startups', link: '#' },
    ],
    author: 'Stan Sakharchuk',
    date: 'June 17, 2025',
  },
  {
    image: '/blocks/blog/pic.webp',
    title: 'What Does a Product Owner Do All Day? Typical Day For a Product Owner',
    excerpt:
      'Today, at every junction, digital products are making an appearance. From retailers, advertisers, and...',
    link: 'https://interexy.com/a-day-in-the-life-of-a-product-owner/',
    tags: [
      { title: 'Life', link: '#' },
      { title: 'Planning', link: '#' },
    ],
    author: 'Stan Sakharchuk',
    date: 'June 17, 2025',
  },
];
