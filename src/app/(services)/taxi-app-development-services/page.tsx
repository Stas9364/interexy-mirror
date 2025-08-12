import {
  Banner,
  CoreFeatures,
  FullCycleDevelopment,
  HeroService,
  Process,
  Testimonials,
} from '@/components/service-blocks';
import { coreFeatures, oneRoverTaxi } from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'taxi-app-development-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function TaxiAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Taxi App Development Services'}
        subtitle={
          'Give your business a lift to success. Book our taxi app development services. Develop a multifunctional application for drivers, passengers, dispatchers, and business owners and move towards your goals.'
        }
        btn_link={'/contact-us'}
        btn_text={"Let's do this"}
        src='/services/taxi-app-development-services/hero.png'
        imgClasses='!object-contain'
      />

      <Banner
        img_src='/services/taxi-app-development-services/banner-img.png'
        btn_link='/contact-us'
        btn_title='Contact Us'
        title='So let’s start a project and we’ll help you with online taxi booking app development!'
        titleClasses='md:!text-5xl'
        subtitle=''
      />

      <CoreFeatures
        title='Core features we use to build functional solutions for taxi mobile apps'
        data={coreFeatures}
      />

      <Process
        title='How we work: our process'
        steps={{
          first: 'Creating an app strategy',
          second: 'UX/UI design development',
          third: 'Preparing the app’s architecture',
          fourth: 'Creating the data and API structure',
          fifth: 'Making up a UI',
          sixth: 'Creating a connection of API and UI',
          seventh: 'Conducting in-depth testing and deployment',
        }}
      />

      <FullCycleDevelopment
        title='Interexy’s experience in Full-cycle Development One Rover'
        items={oneRoverTaxi}
      />

      <Testimonials title='Testimonials' />
    </>
  );
}
