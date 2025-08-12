import { OurExpertise, OurPortfolio } from '@/components/blocks';
import {
  Banner,
  CoreTechnologies,
  DevelopmentServices,
  FullCycleDevelopment,
  HeroService,
} from '@/components/service-blocks';
import { cases } from '../blockchain-app-development-services/data';
import { augmentedVr, benefits, coreTechs, industries, vrDev } from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'augmented-and-virtual-reality-ar-vr-app-development-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function AugmentedAndVirtualRealityArVrAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Augmented and Virtual Reality (AR/VR) App Development Services'}
        subtitle={
          'Adjust user interaction with outward things through AR and VR software development'
        }
        btn_link={'/contact-us'}
        btn_text={'Get In Touch'}
        src='/services/augmented-and-virtual-reality-ar-vr-app-development-services/hero.png'
        imgClasses='!object-contain'
      />

      <OurExpertise
        title='How Your Business can Benefit'
        items={benefits}
        titleChild={
          <p className='w-full max-w-[800px]'>
            Augmented and virtual reality are supreme technology components on your path
            to digital transformation. Companies harness AR & VR to move with the times
            and be leading-edge in a wide range of industries.
          </p>
        }
      />

      <DevelopmentServices
        title='Augmented & Virtual Reality Software Development Services'
        titleChild={
          <p>
            Being an Augmented and Virtual Reality development company, we create reliable
            and innovative mobile apps for evolving modern tech opportunities in the
            rapidly developing world.
          </p>
        }
        services={augmentedVr}
        linkTitle='AR & VR software development services'
        href='/contact-us'
      />

      <FullCycleDevelopment
        title='Interexy’s experience in Augmented and Virtual Reality software Development'
        items={vrDev}
      />

      <OurExpertise
        title='Industries and fields we specialize in working with AR & VR'
        items={industries}
      />

      <CoreTechnologies
        title='Technology expertise for solid solutions'
        titleChild={
          <p className='w-full max-w-[800px]'>
            Being an Augmented and Virtual Reality development company, we create reliable
            and innovative mobile apps for evolving modern tech opportunities in the
            rapidly developing world.
          </p>
        }
        technologies={coreTechs}
      />

      <Banner
        img_src='/services/augmented-and-virtual-reality-ar-vr-app-development-services/banner.jpg'
        title='Reach out to us for crafting a user-centric app that is worth a thousand downloads!'
        btn_title='Get In Touch'
        btn_link='/contact-us'
      />

      <OurPortfolio
        title='Explore our latest projects case studies'
        cases={cases}
        titleChildren={
          <p>
            Take a look at some of the iOS and Android apps we developed. Let’s find out
            if we’d be the right fit to collaborate.
          </p>
        }
      />
    </>
  );
}
