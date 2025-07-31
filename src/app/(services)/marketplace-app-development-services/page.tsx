import {
  FAQ,
  HeroService,
  Info,
  Process,
  Reasons,
  Reviews,
  ServicesExpertise,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
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
import { OurExpertise } from '@/components/blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';

export const metadata: Metadata = {
  title: 'Marketplace App Development Company | Interexy',
  description:
    'Let’s build your next-gen marketplace application with our marketplace app development services. ✅ All services you were looking for in one place!',
};

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

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />

      <FAQ title='FAQ' items={marketplaceFaq} />
    </>
  );
}
