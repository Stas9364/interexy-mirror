import { OurExpertise } from '@/components/blocks';
import {
  FAQ,
  HeroService,
  Info,
  Process,
  Reasons,
  Reviews,
  ServicesExpertise,
} from '@/components/service-blocks';
import {
  marketplaceDevelopment,
  marketplaceExpertise,
  marketplaceFaq,
  marketplaceFeatures,
  marketplaceInfo,
  marketplaceInterexy,
  marketplaceRoadmap,
  marketplaceServices,
} from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'marketplace-app-development-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function MarketplaceAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Marketplace App Development Services'}
        subtitle={
          'Let’s learn more about our marketplace app development. Interexy is an expert in creating turnkey marketplace apps of various scale, complexity and profile.'
        }
        btn_link={'/contact-us'}
        btn_text={'Let’s Get Stared'}
        src='/services/marketplace-app-development-services/hero.png'
        imgClasses='!object-contain'
      />

      <Info items={marketplaceInfo} />

      <OurExpertise
        title='Who can benefit from marketplace app development services?'
        items={marketplaceServices}
      />

      <ServicesExpertise
        title='Our Marketplace App Development Services'
        services={marketplaceDevelopment}
      />

      <OurExpertise
        title='Our expertise in marketplace app development within industries'
        items={marketplaceExpertise}
      />

      <Reasons
        title='Must-have Features of Marketplace Apps'
        items={marketplaceFeatures}
      />

      <Process
        title='Our Roadmap to Creating a Successful Marketplace App'
        steps={{
          first: 'Planning & Analysis',
          second: 'Choice a monetization model & payment gateway provider',
          third: 'Create a user-friendly UX design',
          fourth: 'MVP Development & Analysis',
          fifth: 'Marketplace App Development',
          sixth: 'QA & Testing',
          seventh: 'Launch & Maintenance',
        }}
        stepsDescription={marketplaceRoadmap}
      />

      <OurExpertise
        title='Why Choose Interexy'
        items={marketplaceInterexy}
        btn_title='Tell me more!'
      />

      <Reviews title='Highly Satisfied Clients' />

      <FAQ title='FAQ' items={marketplaceFaq} />
    </>
  );
}
