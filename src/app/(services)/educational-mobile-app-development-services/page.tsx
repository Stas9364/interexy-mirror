import { OurExpertise, OurPortfolio } from '@/components/blocks';
import {
  FullCycleDevelopment,
  HeroService,
  Reasons,
  Reviews,
} from '@/components/service-blocks';
import { cases } from '../blockchain-app-development-services/data';
import { benefits, educationData, ensure } from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'educational-mobile-app-development-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function EducationalMobileAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Educational Mobile App Development Services'}
        subtitle={
          'Deliver the best learning experience in the most modern way with mobile application development for education.'
        }
        btn_link={'/contact-us'}
        btn_text={'Get Stared'}
        src='/services/educational-mobile-app-development-services/hero.png'
        imgClasses='!object-contain'
      />

      <Reasons
        title='Educational Mobile Application Development Services'
        items={[
          {
            title: 'Knowledge-based Educational App',
            color: '#b6dfec',
          },
          {
            title: 'eBook Learning App',
            color: '#ffa1ce',
          },
          {
            title: 'Education Gaming App',
            color: '#cfffd1',
          },
          {
            title: 'Mobility Solution for College & University',
            color: '#cfddff',
          },
          {
            title: 'Learning App for Coaching Classes',
            color: '#f0ffcf',
          },
          {
            title: 'Learning App for Nursery & Preschool',
            color: '#ffc774',
          },
          {
            title: 'Education Management Solution',
            color: '#56f2e9',
          },
        ]}
      />

      <OurExpertise title='Benefits of Education Mobile Applications' items={benefits} />

      <FullCycleDevelopment
        title='Interexy’s Experience as Educational Mobile App Development Company'
        items={educationData}
      />

      <OurExpertise title='We ensure' items={ensure} />

      <Reasons
        title='Education Apps features'
        items={[
          {
            title: 'Notifications and course activities',
            color: '#b6dfec',
          },
          {
            title: 'Multi-language',
            color: '#ffa1ce',
          },
          {
            title: 'Well thought out UX/UI design',
            color: '#cfffd1',
          },
          {
            title: 'Connected to the web',
            color: '#cfddff',
          },
          {
            title: 'Feedback',
            color: '#f0ffcf',
          },
          {
            title: 'Quality content',
            color: '#ffc774',
          },
          {
            title: 'Live Tutorials and Interactive Sessions',
            color: '#56f2e9',
          },
          {
            title: 'Regular Practice & Mock Tests',
            color: '#e9b6fb',
          },
        ]}
      />

      <Reviews title='Highly Satisfied Clients' />

      <OurPortfolio title='See our experience' cases={cases} />
    </>
  );
}
