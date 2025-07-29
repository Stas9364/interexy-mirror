import {
  Banner,
  FAQ,
  FullCycleDevelopment,
  HeroService,
  Info,
  Reasons,
  Reviews,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import {
  pharmacyBenefits,
  pharmacyBlog,
  pharmacyEnsure,
  pharmacyExperience,
  pharmacyFaq,
  pharmacyIndustry,
  pharmacyInterexy,
  pharmacySolutions,
} from './data';
import { Blog, OurExpertise } from '@/components/blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';

export const metadata: Metadata = {
  title: 'Pharmacy App Development Services | Interexy',
  description:
    'We are a leading medical development company, offering pharmacy development services ✅ Explore our expertise in following healthcare app regulations',
};

export default function PharmacyAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Pharmacy App Development Services'}
        subtitle={
          'Make your business more digitized, systematic & effective, and conquer new markets with reliable pharma app developers!'
        }
        btn_link={'/contact-us'}
        btn_text={'Let’s get in touch!'}
        src='/services/pharmacy-app-development-services/hero.png'
        imgClasses='!object-contain'
      />

      <Info
        title='Why the perfect time for your pharmacy app is now'
        items={[
          {
            subtitle:
              'The COVID-19 pandemic has brought distance to every sphere in our life, and has significantly changed the businesses. Pharma entrepreneurs, like any industry in the market, had to move their showcases and services online. If they hadn’t, even long-livers would have become bankrupt. For instance, The Hamilton Project estimated that more than 400,000 small businesses had been closed in the first three months of the pandemic.',

            bg_color: '#f6f6fd',
          },
          {
            subtitle:
              'The global pharmaceuticals market keeps on growing. It is expected to grow by almost $22 billion during 2021 compare to 2020, according to Pharmaceuticals Global Market Report 2021. As reported by Statista, the number of medical apps available in the App Store for iOS and at Google Play for Android worldwide is more than 100ka, and it scales day after day.',
            bg_color: '#f2f2f2',
          },
          {
            subtitle:
              'Every mobile phone owner spends 10 from 11 minutes of his gadget interaction time in a mobile application. App Annie, an international mobile data and analytics platform, has come to this conclusion, doing current digital research. Hire us as pharma mobile app development company and transfer your business to digital. Be ahead of the competition and provide stability to your finance during big market transformations.',
            bg_color: '#f0ffcf',
          },
        ]}
      />

      <Banner
        img_src='/services/pharmacy-app-development-services/banner.jpg'
        title='Book a Free Call!'
        subtitle='Learn more about our expertise and get a detailed approach and solution for your specific case'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <Reasons
        title='Benefits of Pharma App Development Services'
        items={pharmacyBenefits}
      />

      <Banner
        img_src='/services/pharmacy-app-development-services/banner-2.jpg'
        title='Evolve and adapt to modern reality, aligning your services with customers’ needs'
        btn_title='Let’s Get Started'
        btn_link='/contact-us'
      />

      <FAQ
        title={'Software we develop for the pharmaceutical industry'}
        items={pharmacyIndustry}
      />

      <Reasons
        title='Why choose Interexy as your partner for pharmacy app development?'
        items={pharmacyInterexy}
      />

      <Banner
        img_src='/services/pharmacy-app-development-services/banner-3.png'
        title='Healthcare app regulations you must know in 2025'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <OurExpertise
        title='Solutions that we provide for the pharmaceutical industry'
        items={pharmacySolutions}
      />

      <FullCycleDevelopment
        title='Interexy’s experience in Full-cycle Development'
        items={pharmacyExperience}
      />

      <OurExpertise title='We ensure:' items={pharmacyEnsure} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />

      <Blog title='Pharmacy Business Ideas for Entrepreneurs' blogPosts={pharmacyBlog} />

      <FAQ title={'FAQ About Pharmacy App Development'} items={pharmacyFaq} />
    </>
  );
}
