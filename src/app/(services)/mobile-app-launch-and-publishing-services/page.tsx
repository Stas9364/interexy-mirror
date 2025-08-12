import { InfiniteImageScroll, OurPortfolio } from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import {
  Banner,
  FullCycleDevelopment,
  HeroService,
  Info,
  Reasons,
  Reviews,
  SupportPackages,
} from '@/components/service-blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import { cases } from '../blockchain-app-development-services/data';
import { mobileCompany, mobileProcess } from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'mobile-app-launch-and-publishing-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function MobileAppLaunchAndPublishingServices() {
  return (
    <>
      <HeroService
        sectionClassName='bg-[url(/services/mobile-app-launch-and-publishing-services/hero-bg.svg)] bg-no-repeat bg-cover lg:!pb-0 '
        title={'Mobile App Launch and Publishing Services'}
        subtitle={
          'Let’s set your app up for growth with well planned and executed mobile app launch services.'
        }
        btn_link={'/contact-us'}
        btn_text={'Launch Your App'}
        src='/services/mobile-app-launch-and-publishing-services/hero.png'
        imgClasses='!object-contain'
      />

      <InfiniteImageScroll
        images={images}
        second={50}
        imageWidth={100}
        imageHeight={0}
        spacing={0}
        direction='left'
        className='mb-[40px] md:mb-[60px] xl:mb-[80px]'
      />

      <Reasons
        title='Our Mobile App Launch Process'
        items={mobileProcess}
        blockTitleChild={
          <p className='w-full max-w-[800px]'>
            We take every step of the launching process very seriously by paying attention
            to every personalized point that our customer wants. However, the rough
            guideline for our Mobile App Launch Process include:
          </p>
        }
      />

      <Banner
        img_src='/services/mobile-app-launch-and-publishing-services/banner.png'
        title='Keep up with the mobile-first world!'
        subtitle='Get in touch to build a multifunctional, user-friendly, secure mobile app for your business'
        btn_title='Pre-estimate me app '
        btn_link='/contact-us'
      />

      <Info
        title='With Interexy as a mobile app publisher you’ll get'
        items={[
          {
            title: 'A first version of the product live and in-market',
            bg_color: '#f6f6fd',
          },
          {
            title: 'A prioritized backlog of future features based on user feedback',
            bg_color: '#f2f2f2',
          },
          {
            title: 'Production backend system setup & hosted',
            bg_color: '#f0ffcf',
          },
        ]}
      />

      <SupportPackages />

      <Banner
        img_src='/services/mobile-app-launch-and-publishing-services/banner-1.png'
        title='Want to strike a cost balance in app development?'
        subtitle='Download costs on app development based on all factors to consider'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <FullCycleDevelopment
        title='Interexy’s Experience as a Mobile App Publishing Company'
        items={mobileCompany}
      />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />

      <OurPortfolio
        title='Interexy’s Experience in Сross-Platform Mobile App Development'
        cases={cases}
      />
    </>
  );
}
