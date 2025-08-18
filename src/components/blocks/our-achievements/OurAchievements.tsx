import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';

type Image = {
  src: string;
  link?: string;
  alt?: string;
};
const images: Image[] = [
  {
    src: '/blocks/our-achievements/Clutch_60.webp',
    link: 'https://clutch.co/profile/interexy',
    alt: 'Clutch',
  },
  {
    src: '/blocks/our-achievements/techviewer-award.webp',
    link: 'https://techreviewer.co/companies/interexy-llc',
    alt: 'Techreviewer',
  },
  {
    src: '/blocks/our-achievements/upwork-award.webp',
    link: '',
    alt: 'Upwork',
  },
];

export const OurAchievements = () => {
  return (
    <Section>
      <Container>
        <div>
          <BlockTitle title={'Our Achievements'} subtitle={'Awards'} />
          <div className='flex flex-col items-center justify-center gap-x-[85px] gap-y-10 lg:flex-row'>
            {images.map(({ src, link, alt }) => {
              const img = (
                <Image
                  src={src}
                  width={100}
                  height={100}
                  alt={alt || ''}
                  className='w-full transition-transform duration-300 group-hover:scale-110'
                />
              );
              return link ? (
                <Link
                  href={link}
                  key={src}
                  className='group relative h-[143px] w-full max-w-[300px]'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {img}
                </Link>
              ) : (
                <div key={src} className='group relative h-[143px] w-full max-w-[300px]'>
                  {img}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
