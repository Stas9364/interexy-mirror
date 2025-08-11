import {
  HeroImg,
  InfiniteImageScroll,
  OurClients,
  OurExpertise,
  OurMission,
  OurPortfolio,
  OurPrinciples,
  OurSuccess,
  OurTeam,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { principles } from '@/components/blocks/our-expertise/principles';
import { cases } from '@/components/blocks/our-portfolio/cases-list';
import { expertiseByYears } from '@/components/blocks/our-success/expertiseByYears';
import { TeamComposition } from '@/components/blocks/team-composition/TeamComposition';
import { Container } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { Overlay } from '@/components/overlay/Overlay';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us | Interexy',
  description:
    'Partner with Interexy, a trusted mobile app development company, ready to bring your ideas to life and align them with today’s industry standards',
  authors: [
    {
      name: 'Stan Sakharchuk',
      url: '',
    },
  ],
  openGraph: {
    type: 'article',
    title: 'About us | Interexy',
    description:
      'Partner with Interexy, a trusted mobile app development company, ready to bring your ideas to life and align them with today’s industry standards',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/about-us`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blocks/hero/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'Interexy Hero Image',
      },
    ],
    siteName: 'About us | Interexy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'About us | Interexy',
    description:
      'Partner with Interexy, a trusted mobile app development company, ready to bring your ideas to life and align them with today’s industry standards',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blocks/hero/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'About us Image',
      },
    ],
  },
};

export default function AboutUs() {
  return (
    <>
      <HeroImg
        video_src='https://interexy.com/wp-content/uploads/2024/12/About_us_video_1280x720-1.mp4'
        video_type='video/mp4'
        sectionClassName=' pb-[40px] pt-[150px] md:pb-[80px] min-h-[300px]'
      >
        <Overlay />

        <Container className='relative z-2'>
          <div className='flex w-full max-w-[880px] flex-col items-start gap-y-6 md:gap-y-10'>
            <h1 className='text-[32px] leading-[1.2] font-extrabold text-white md:text-5xl lg:text-[64px]'>
              We Turn Your Idea Into a Winning Product
            </h1>
            <p className='text-base leading-[1.5] font-normal text-white'>
              We empower businesses to achieve digital transformation and maintain strong
              customer connections through innovative, high-quality solutions and
              cutting-edge technologies.
            </p>

            <InterexyLink
              href='/contact-us'
              text="Let's talk"
              variant={'primary'}
              size={'md'}
            />
          </div>
        </Container>
      </HeroImg>

      <InfiniteImageScroll
        images={images}
        second={50}
        imageWidth={100}
        imageHeight={0}
        spacing={0}
        direction='left'
        className='mb-[80px]'
      />

      <OurSuccess
        title='Expertise backed by years'
        subtitle='Our success'
        text='Interexy is a custom software development and IT consulting company founded in 2017 and headquartered in Miami. We boast extensive expertise in Healthcare,Blockchain, FinTech, AI, ML, EdTech, E-Commerce, etc. We deliver innovativesolutions for giants like SAP, PwC, Pampers, General Electric, Next Street &fastest-growing companies across industries.'
        expertise={expertiseByYears}
      />

      <OurMission />

      <OurPrinciples />

      <OurExpertise title='Why Interexy?' subtitle='Our expertise' items={principles} />

      <OurTeam />

      <TeamComposition />

      <OurClients title='We are trusted' subtitle='Our clients' />

      <OurPortfolio title='Our work' subtitle='Our portfolio' cases={cases} />
    </>
  );
}
