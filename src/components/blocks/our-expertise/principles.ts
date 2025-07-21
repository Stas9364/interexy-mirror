export type Principle = {
  img?: string;
  title: string;
  description: string;
  href?: string;
};

export const principles: Principle[] = [
  {
    description:
      'With extensive expertise in next-gen technologies, we are here to help you explore new opportunities and create cutting-edge web and mobile apps that solve modern challenges and meet real market needs.',
    img: '/blocks/our-expertise/innovations.svg',
    title: 'New-World Opportunities',
  },
  {
    description:
      'Innovations can be strong and healthy just when they’re safe. We care about the security of your customers and business data and will ensure your app complies with legal and industry requirements.',
    img: '/blocks/our-expertise/security.svg',
    title: 'Security & Compliance',
  },
  {
    description:
      'With us, you can outsource the whole project, augment your team, or hire a dedicated team tailored to project requirements. Our top talent is ready to build innovative, scalable, and robust solutions for your business.',
    img: '/blocks/our-expertise/people.svg',
    title: 'Dedicated Team',
  },
];
