import { OurExpertise, OurPortfolio } from '@/components/blocks';
import {
  Banner,
  FullCycleDevelopment,
  HeroService,
  Process,
  Reasons,
} from '@/components/service-blocks';
import { cases } from '../blockchain-app-development-services/data';
import { kotlinExperience, kotlinIndustries, kotlinSolutions, kotlinTry } from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'kotlin';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function Kotlin() {
  return (
    <>
      <HeroService
        title={'Kotlin Multiplatform App Development'}
        subtitle={
          'Reduce business costs and development team efforts through Kotlin multiplatform technology with its pure functions.'
        }
        btn_link={'/contact-us'}
        btn_text={'Get started!'}
        src='/services/kotlin/hero.png'
        imgClasses='!object-contain'
      />

      <FullCycleDevelopment
        title='Interexy’s experience in Kotlin multiplatform'
        items={kotlinExperience}
      />

      <Reasons title='Why you should give Kotlin Multiplatform a try' items={kotlinTry} />

      <Banner
        img_src='/services/kotlin/banner-1.png'
        btn_link='/contact-us'
        btn_title='Contact us'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
      />

      <Reasons
        title='Who a Kotlin cross-platform app development solution is relevant for'
        items={kotlinSolutions}
      />

      <OurExpertise
        title='Industries and fields we specialize in'
        items={kotlinIndustries}
      />

      <Process
        title='Key points in your mobile application development services'
        steps={{
          first: 'Software Specification',
          second: 'Software specifications & Estimation Presentation',
          third: 'Clickable prototype& UI/UX design',
          fourth: 'Development & DevOps',
          fifth: 'QA testing',
          sixth: 'Team Support Packages',
          seventh: 'Launch (AppStore & Google Play approval)',
        }}
      />

      <OurPortfolio title='Explore our latest projects case studies' cases={cases} />
    </>
  );
}
