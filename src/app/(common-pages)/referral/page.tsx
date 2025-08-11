import {
  HeroImg,
  HowItWorks,
  InfiniteImageScroll,
  OurExpertise,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { principles } from '@/components/blocks/our-expertise/principles';
import { Container } from '@/components/layout';
import { Platforms } from '@/components/layout/footer/components/Platforms';
import { InterexyLink } from '@/components/link/InterexyLink';
import { Overlay } from '@/components/overlay/Overlay';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Referral Program | Interexy',
  description:
    'Earn 1000$ for each successful hire with our referral program for Software Development Services & IT Consulting! ? Get started here!',
  authors: [
    {
      name: 'Stan Sakharchuk',
      url: '',
    },
  ],
  openGraph: {
    type: 'article',
    title: 'Our Referral Program | Interexy',
    description:
      'Earn 1000$ for each successful hire with our referral program for Software Development Services & IT Consulting! ? Get started here!',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/referral`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/referral/referral-bg.webp`,
        width: 1200,
        height: 630,
        alt: 'Our Referral Program Image',
      },
    ],
    siteName: 'Our Referral Program | Interexy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Our Referral Program | Interexy',
    description:
      'Earn 1000$ for each successful hire with our referral program for Software Development Services & IT Consulting! ? Get started here!',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/referral/referral-bg.webp`,
        width: 1200,
        height: 630,
        alt: 'Our Referral Program Image',
      },
    ],
  },
};

export default function Referral() {
  return (
    <>
      <HeroImg
        img_src='/referral/referral-bg.webp'
        sectionClassName='pt-0 lg:pt-[70px] pb-[30px] lg:pb-[118px]'
      >
        <Overlay />

        <Container className='relative z-2'>
          <div className='flex flex-col text-white lg:flex-row lg:justify-between'>
            <div className='flex max-w-[780px] flex-col gap-y-[25px] md:gap-y-10'>
              <h1 className='pt-[121px] text-[34px] leading-[1.1] font-extrabold md:text-[64px]'>
                Earn $10,000 from project sales
              </h1>
              <p>
                Receive an additional 10% of project revenue starting from the second
                month
              </p>

              <div className='flex gap-x-4'>
                <InterexyLink
                  href='/contact-us'
                  text='Become a partner '
                  variant='primary'
                  size='md'
                />
              </div>

              <hr className='opacity-20' />

              <Platforms containerClassName='flex flex-row  justify-around lg:justify-between gap-y-[30px]' />
            </div>
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
        className='mb-[40px] md:mb-[60px] xl:mb-[80px]'
      />

      <OurExpertise title='Why Interexy?' items={principles} />

      <HowItWorks />
    </>
  );
}
