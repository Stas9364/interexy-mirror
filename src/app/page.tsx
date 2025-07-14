import {
  Blog,
  Expertise,
  HeroImg,
  InfiniteImageScroll,
  OurAchievements,
  OurClients,
  OurPortfolio,
  OurProducts,
  OurServices,
  OurSuccess,
  OurTeam,
  Reviews,
  TechStack,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { ContactForm } from '@/components/contact-form/ContactForm';
import { Container, Footer, Header } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { Overlay } from '@/components/overlay/Overlay';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interexy: Software Development Company',
  description:
    'Transform your business with Interexy, a top custom software development company. Contact us today to leverage our expert app development services',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroImg
          img_src='/blocks/hero/hero.webp'
          sectionClassName='pt-[260px] pb-[20px] md:pt-[150px] md:pb-[50px]'
        >
          <>
            <Overlay />

            <Container className='relative z-2'>
              <div className='flex w-full flex-col items-start md:items-end'>
                <h1
                  role='heading'
                  className='mb-4 text-left text-[28px] leading-[130%] font-extrabold text-white md:mb-6 md:max-w-[597px] md:text-right md:text-5xl lg:text-6xl'
                >
                  Build AI-Powered Apps Faster — with Top-Rated Teams in 10 Days
                </h1>

                <ul className='ml-6 list-disc text-lg leading-[140%] font-medium text-white md:ml-0'>
                  <li>120+ 5★ reviews on Clutch & Upwork</li>
                  <li>Trusted by Fortune 500</li>
                  <li>MVPs delivered in 3–4 weeks</li>
                </ul>

                <InterexyLink
                  href='/contact-us'
                  text=' Book Free Strategy Call'
                  variant='primary'
                  className='mt-6 md:mt-10'
                />

                <p className='mt-3 text-sm leading-[140%] font-normal text-white'>
                  Avg. reply in 1 hour · No strings attached
                </p>
              </div>
            </Container>
          </>
        </HeroImg>

        <InfiniteImageScroll
          images={images}
          second={50}
          imageWidth={100}
          imageHeight={0}
          spacing={0}
          direction='left'
        />

        <OurAchievements />

        <OurSuccess />

        <OurServices />

        <TechStack />

        <Expertise />

        <OurProducts />

        <OurClients />

        <Reviews />

        <OurTeam />

        <OurPortfolio title='Software that helps you succeed' subtitle='Our portfolio'>
          <p className='text-secondary text-base leading-[1.4] font-medium md:text-lg'>
            Our user-centered design encourages productivity and boosts revenue.
          </p>
        </OurPortfolio>

        <Blog />
      </main>

      <Footer>
        <ContactForm />
      </Footer>
    </>
  );
}
