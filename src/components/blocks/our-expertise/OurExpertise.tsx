import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';

type Principle = {
  img: string;
  title: string;
  description: string;
};

const principles: Principle[] = [
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

export const OurExpertise = () => {
  return (
    <Section>
      <Container>
        <BlockTitle
          title='Why Interexy?'
          subtitle='Our expertise
'
        />

        <div className='flex grid-cols-3 flex-col gap-x-[25px] gap-y-[25px] lg:grid lg:gap-y-[35px] xl:gap-x-[30px] xl:gap-y-[40px]'>
          {principles.map(({ img, title, description }) => (
            <div
              key={title}
              className='flex flex-col gap-y-[10px] border-b border-[#D6D6D6] pb-[15px] lg:gap-y-5'
            >
              <div className='flex gap-x-[15px]'>
                <Image src={img} alt={title} width={35} height={35} />
                <p className='text-xl leading-[1.4] font-medium md:text-[26px] xl:text-[32px]'>
                  {title}
                </p>
              </div>
              <p className='text-secondary text-sm leading-[1.4] font-medium md:text-base xl:text-xl'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
