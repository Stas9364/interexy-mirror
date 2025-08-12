import { Blog, InfiniteImageScroll, OurExpertise } from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import {
  Banner,
  FAQ,
  FullCycleDevelopment,
  HeroService,
  Info,
  Process,
  Reasons,
  Reviews,
} from '@/components/service-blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import {
  fitnessApp,
  fitnessAppDev,
  fitnessBenefits,
  fitnessDevServices,
  fitnessFaq,
  fitnessFeatures,
  fitnessIdeas,
  fitnessInfo,
  fitnessServices,
  fitnessStepsDescription,
} from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'fitness-app-development';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function FitnessAppDevelopment() {
  return (
    <>
      <HeroService
        title={'Fitness App Development Services'}
        subtitle={
          'Let’s discover new business channels to build a strong brand name and identify the ways you can benefit from our fitness app development services. Start off a health and wellness revolution with our fitness app development company to build activity tracking, data collection, social fitness applications, and yoga and meditation solutions.'
        }
        btn_link={'/contact-us'}
        btn_text={'Let’s talk'}
        src='/services/fitness-app-development/hero.png'
        imgClasses='!object-contain'
      />

      <Info items={fitnessInfo} />

      <OurExpertise
        title='Why Do You Need Fitness App Development Services?'
        items={fitnessDevServices}
      />

      <Banner
        img_src='/services/fitness-app-development/banner.png'
        btn_link='/contact-us'
        btn_title='Get a quote'
        title='Hire Mobile Fitness App Developers'
        subtitle='Lean on Interexy to build a market-ready nutrition and fitness app, or revamp your existing solution into a holistic workout app. Share your project details with us, and we’ll take your app from ideation to launch.'
      />

      <OurExpertise
        title='Why Choose Interexy for Fitness App Development?'
        items={fitnessApp}
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

      <OurExpertise title='Fitness App Development Services' items={fitnessServices} />

      <Banner
        img_src='/services/fitness-app-development/banner-2.webp'
        btn_link='/contact-us'
        btn_title='Get a quote'
        title='Healthcare app regulations you must know in 2025'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
      />

      <Reasons title='Benefits of Fitness Mobile Apps' items={fitnessBenefits} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />

      <OurExpertise
        title='Must-have Fitness Application Features'
        items={fitnessFeatures}
      />

      <FullCycleDevelopment
        title='Interexy’s Experience in Fitness Application Development'
        items={fitnessAppDev}
      />

      <Process
        title='Our Roadmap to Creating a Successful Fitness App'
        steps={{
          first: 'Idea and Planning',
          second: 'Create a User-Friendly UX Design',
          third: 'MVP Development & Analysis',
          fourth: 'Fitness App Development #1',
          fifth: 'Fitness App Development #2',
          sixth: 'Fitness App Deployment',
          seventh: 'Guarantee and Support',
        }}
        stepsDescription={fitnessStepsDescription}
      />

      <FAQ items={fitnessFaq} title='FAQ on Fitness App Development Services' />

      <Blog title='Fitness app development ideas for business' blogPosts={fitnessIdeas} />
    </>
  );
}
