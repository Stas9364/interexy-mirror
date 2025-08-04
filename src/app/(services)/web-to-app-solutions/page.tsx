import { OurExpertise, OurPortfolio } from '@/components/blocks';
import {
  Banner,
  FAQ,
  HeroService,
  Process,
  Reasons,
  ServicesExpertise,
  Steps,
  Testimonials,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import {
  webAdvantages,
  webChoose,
  webFaq,
  webIndustries,
  webInterexy,
  webSolutions,
  webSteps,
} from './data';
import { cases } from '../blockchain-app-development-services/data';

export const metadata: Metadata = {
  title: 'Web to App Solutions - Convert Website to Mobile App | Interexy',
  description:
    'Let’s convert your web app to mobile app with our practice-proven techniques and latest technologies. Turn your web product into a native app',
};

export default function WebToAppSolutions() {
  return (
    <>
      <HeroService
        title={'Web to App Solutions'}
        subtitle={
          'Whether you need to power up your business processes, get more users or enter the mobile industry with an exciting product, Interexy can cover all your needs on time and with competitive price. Discover our latest and unique ways of turning your web product to a modern and efficient mobile app solution.'
        }
        btn_link={'/contact-us'}
        btn_text={'Get Consultation'}
        src='/services/web-to-app-solutions/hero.png'
        imgClasses='!object-contain'
      />

      <OurExpertise
        title='Why You Should Turn Your Website into an App?'
        items={webAdvantages}
      />

      <Banner
        img_src='/services/web-to-app-solutions/banner-1.png'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <OurExpertise
        title='Industries and fields we specialize in'
        items={webIndustries}
      />

      <Reasons
        title='Convert Your Web App to Mobile App with Interexy Team'
        items={webInterexy}
      />

      <ServicesExpertise title='Our Web to App Solutions' services={webSolutions} />

      <Process
        title='How We Work?'
        steps={{
          first: 'Create a list of required features for your app',
          second: 'Estimate app development costs',
          third: 'Create a user-friendly UX design',
          fourth: 'Development',
          fifth: 'QA & Testing',
          sixth: 'Launch on the marketplace',
        }}
        stepsDescription={webSteps}
      />

      <Steps title='Why Choose Interexy' steps={webChoose} />

      <OurPortfolio title='See our customers’ evolution' cases={cases} />

      <Testimonials title='Testimonials' />

      <FAQ title={'FAQ'} items={webFaq} />
    </>
  );
}
