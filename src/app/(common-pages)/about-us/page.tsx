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
import { TeamComposition } from '@/components/blocks/team-composition/TeamComposition';
import { Container } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { Overlay } from '@/components/overlay/Overlay';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us | Interexy',
  description:
    'Partner with Interexy, a trusted mobile app development company, ready to bring your ideas to life and align them with today’s industry standards',
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

      <OurSuccess />

      <OurMission />

      <OurPrinciples />

      <OurExpertise title='Why Interexy?' subtitle='Our expertise' />

      <OurTeam />

      <TeamComposition />

      <OurClients />

      <OurPortfolio title='Our work' subtitle='Our portfolio' />
    </>
  );
}
