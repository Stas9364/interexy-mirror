import { OurExpertise, OurPortfolio } from '@/components/blocks';
import {
  Banner,
  FullCycleDevelopment,
  HeroService,
  Info,
  Process,
  Reviews,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import {
  cannabisCompetitive,
  cannabisExperience,
  cannabisInterexy,
  cannabisServices,
} from './data';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import { cases } from '../blockchain-app-development-services/data';

export const metadata: Metadata = {
  title: 'Cannabis App Development Company | Interexy',
  description:
    'We provide custom cannabis mobile app development services, including medical marijuana delivery app development for the cannabis industry',
};

export default function CannabisApps() {
  return (
    <>
      <HeroService
        title={'Cannabis Application Development Services'}
        subtitle={'Cultivate your cannabis business with a custom mobile app.'}
        btn_link={'/contact-us'}
        btn_text={'Get in touch!'}
        src='/services/cannabis-apps/hero.png'
        imgClasses='!object-contain'
      />

      <Info
        title='Enter the Market with a Mobile App'
        items={[
          {
            subtitle:
              'The cannabis industry is expected to add nearly 250,000 full-time jobs between 2020 and 2024',
            title: '250,000 jobs',
            bg_color: '#f6f6fd',
          },
          {
            subtitle:
              '49% of millennials consume cannabis for recreational (Globenewswire)',
            title: '49%',
            bg_color: '#F6F6FD',
          },
          {
            subtitle:
              'Recreational pot sales could double medical sales by 2022  (Fool.com)',
            title: 'Double sales',
            bg_color: '#F6F6FD',
          },
        ]}
      />

      <Banner
        img_src='/services/cannabis-apps/banner-img.png'
        btn_link='/contact-us'
        btn_title='Get in touch'
        title='Reach out to us for crafting a user-centric app that is worth a thousand downloads!'
        contentClasses='max-w-[900px] '
      />

      <OurExpertise
        title='Meet the next challenges to be competitive with your product'
        items={cannabisCompetitive}
      />

      <FullCycleDevelopment
        title='Interexy’s experience in Cannabis App Development'
        items={cannabisExperience}
      />

      <OurExpertise
        title='Cannabis App Development Services to stay ahead of the competition as an industry leader'
        titleChild={
          <p>
            We offer an extensive range of technical solutions to build a robust & user
            friendly app for your business.
          </p>
        }
        items={cannabisServices}
      />

      <Process
        title='Cannabis Mobile App Development Process'
        steps={{
          first: 'Meeting the Regulatory Requirements',
          second: 'Project Scoping',
          third: 'Data Engineering',
          fourth: 'Building the Model',
          fifth: 'Deployment',
          sixth: 'Business Analysis',
          seventh: 'Launch (AppStore & Google Play approval)img',
        }}
      />

      <OurExpertise
        title='Why Choose Interexy as a Medical Cannabis Application Development Company'
        items={cannabisInterexy}
      />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />

      <OurPortfolio
        title='Explore our latest projects case studies'
        titleChildren={
          <p>
            Take a look at some of the iOS and Android apps we developed. Let’s find out
            if we’d be the right fit to collaborate.
          </p>
        }
        cases={cases}
      />
    </>
  );
}
