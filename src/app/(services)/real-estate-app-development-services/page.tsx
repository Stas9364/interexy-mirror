import { OurExpertise } from '@/components/blocks';
import {
  AppLooksLike,
  FAQ,
  FullCycleDevelopment,
  HeroService,
  Steps,
  Testimonials,
} from '@/components/service-blocks';
import { appWeDevelop, realEstateCategories, roomSnap } from './data';
import { steps } from './data/steps';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'real-estate-app-development-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function RealEstateAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Real Estate App Development Services'}
        subtitle={
          'We’re at the cutting edge of mainstream Airbnb-like app development as well as in innovative custom software design.'
        }
        btn_link={'/contact-us'}
        btn_text={'Get Stared'}
        src='/services/real-estate-app-development-services/hero.png'
      />

      <OurExpertise
        title='How can a real estate app be useful for different categories of users?'
        items={realEstateCategories}
        btn_title='Lets do it'
      />

      <OurExpertise title='Types of applications we can develop' items={appWeDevelop} />

      <AppLooksLike
        title='What the application looks like'
        imgWrapperClasses='h-[433px] w-[200px] min-w-[200px]'
        forCustomers={[
          '/services/real-estate-app-development-services/for-customer-1.png',
          '/services/real-estate-app-development-services/for-customer-2.png',
          '/services/real-estate-app-development-services/for-customer-3.png',
          '/services/real-estate-app-development-services/for-customer-4.png',
        ]}
        forPartners={[
          '/services/real-estate-app-development-services/for-partner-1.png',
          '/services/real-estate-app-development-services/for-partner-2.png',
          '/services/real-estate-app-development-services/for-partner-3.png',
          '/services/real-estate-app-development-services/for-partner-4.png',
        ]}
      />

      <Steps
        title='Why choose Interexy as your real estate partner for app development?'
        steps={steps}
      />

      <FullCycleDevelopment title='See our customers’ evolution' items={roomSnap} />

      <Testimonials title='Testimonials' />

      <FAQ
        items={[
          {
            question: 'How do real estate apps make money?',
            answer: [
              'Mobile applications for the real estate industry allow earning money from advertising, bank commission, registration fee for realtors or customers. Our best real estate apps for buyers help customers to find the most profitable propositions and make a decision using new features and technologies and get satisfied with purchases.',
            ],
          },
          {
            question: 'Why do I need real estate mobile app development?',
            answer: [
              'If You want to be on an innovative wavelength and stay a leader in the market, You need to develop an application in this industry.',
            ],
          },
          {
            question:
              'What are the benefits of having a mobile app for a real estate business?',
            answer: [
              'Having a custom mobile application allows you to hire brokers, systemize information and collect data about all premises in one place. If your business already has website application development, it helps to become closer to customers by developing new platforms and optimizing processes.',
            ],
          },
          {
            question: 'How much does it cost to develop a real estate app?',
            answer: [
              'This depends on the amount and complexity of features included, by an average cost for Real Estate app development is between $50-$80k.',
            ],
          },
          {
            question: 'What is the roadmap of my real estate application development?',
            answer: [
              'Real estate app development is not so different from crafting apps for other industries. The process includes the following steps: Idea creation, Sketching concept, Wireframes, Coding and Programming, Testing and Launching.',
            ],
          },
        ]}
        title='FAQ'
      />
    </>
  );
}
