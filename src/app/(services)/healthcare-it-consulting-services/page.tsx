import {
  InfiniteImageScroll,
  OurClients,
  OurExpertise,
  OurPortfolio,
  OurSuccess,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import {
  Banner,
  CoreTechnologies,
  HeroService,
  OurProcess,
  Reasons,
  Reviews,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import {
  healthcareEngagement,
  healthcareOptions,
  healthcareProcess,
  healthcareWhy,
} from './data';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import { cases } from '../machine-learning-and-ai-app-development-services/data';

export const metadata: Metadata = {
  title: 'Healthcare IT Consulting Company | Interexy',
  description:
    'content="Explore tailored solutions with our healthcare IT consulting company. ✅ Redefine healthcare efficiency with our expert IT consulting services."',
};

export default function HealthcareItConsultingServices() {
  return (
    <>
      <HeroService
        sectionClassName='bg-[#07041e] text-white'
        title={'Healthcare IT Consulting Services'}
        subtitle={
          'As a top-notch healthcare IT consulting company, we offer clients a practice-proven strategy and stress-free tech implementation. Our deep expertise in healthcare IT consulting services allows health organizations to implement latest technologies and employ smarter ways of working in order to improve patient care, improve efficiency, create better consumer experiences and drive better outcomes.'
        }
        btn_link={'/contact-us'}
        btn_text={'Learn More'}
        src='/services/healthcare-it-consulting-services/hero.png'
        imgClasses='!object-contain'
      />

      <InfiniteImageScroll
        images={images}
        second={50}
        imageWidth={100}
        imageHeight={0}
        spacing={0}
        direction='left'
        className='mb-[40px] md:mb-[60px] xl:mb-[80px]'
      />

      <OurSuccess
        title='Healthcare IT Consulting Company in Numbers'
        text='Our healthcare IT consulting services are delivered by highly skilled specialists with profound industry knowledge. We collaborate closely with your business to pinpoint issues within the product and provide effective, stable solutions.'
        expertise={[
          { number: '20', title: 'Qualified Healthcare IT Consultants' },
          { number: '6', title: 'Ongoing IT Consulting Projects' },
          { number: '10', title: 'Medical IT Consulting Solutions' },
          { number: '250', title: 'Combined years of experience' },
        ]}
      />

      <OurClients title='Trusted by' />

      <Reasons title='Healthcare Consulting Options We Offer' items={healthcareOptions} />

      <Banner
        img_src='/services/healthcare-it-consulting-services/banner.png'
        title='Healthcare app regulations you must know in 2025'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact Us'
        btn_link='/contact-us'
      />

      <OurProcess
        title='The Real Estate Tokenization Process'
        process={healthcareProcess}
      />

      <OurExpertise
        title='Flexible Healthcare IT Consulting Engagement Models'
        items={healthcareEngagement}
        btn_title='Delegate the Process'
      />

      <CoreTechnologies
        title='Committed to Medical Compliance'
        titleChild={
          <p>
            We always guarantee that your product follows and is compliant with all legal
            and industry guidelines
          </p>
        }
        sectionClassName='bg-[#f2f5fe] pt-[80px]'
        technologies={[
          {
            src: '/services/healthcare-it-consulting-services/HIPAA.svg',
            alt: 'HIPAA',
            width: 100,
            height: 100,
          },
          {
            src: '/services/healthcare-it-consulting-services/FDA.svg',
            alt: 'FDA',
            width: 100,
            height: 100,
          },
          {
            src: '/services/healthcare-it-consulting-services/HL7.svg',
            alt: 'HL7',
            width: 100,
            height: 100,
          },
          {
            src: '/services/healthcare-it-consulting-services/HITECH.svg',
            alt: 'HITECH',
            width: 100,
            height: 100,
          },
          {
            src: '/services/healthcare-it-consulting-services/GDPR.svg',
            alt: 'GDPR',
            width: 100,
            height: 100,
          },
        ]}
      />

      <OurExpertise
        title='Why Engage Interexy For Healthcare IT Consulting Services?'
        items={healthcareWhy}
      />

      <OurPortfolio title='You May Also Be Interested' cases={cases} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />
    </>
  );
}
