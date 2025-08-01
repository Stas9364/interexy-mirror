import {
  Banner,
  Blog,
  Expertise,
  InfiniteImageScroll,
  OurAchievements,
  OurClients,
  OurPortfolio,
  OurProducts,
  OurSuccess,
  Reviews,
  TechStack,
} from '@/components/blocks';
import { blogPosts } from '@/components/blocks/blog/blog-posts';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { cases } from '@/components/blocks/our-portfolio/cases-list';
import {
  DevelopmentProcess,
  FAQ,
  HeroService,
  OurPartners,
  Safeguarding,
  SecondBanner,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import {
  healthcareCompany,
  healthcareDesigns,
  healthcareExpertise,
  healthcareFaq,
  healthcarePartners,
  healthcareProducts,
  healthcareReviews,
  healthcareSecurity,
} from './data';

export const metadata: Metadata = {
  title: 'Healthcare App Development Company | Interexy',
  description:
    'Explore our healthcare app development services now! Hire Interexy’s healthcare app developers to build HIPAA-compliant, innovative solutions',
};

export default function HealthcareMobileAppDevelopmentServices() {
  return (
    <>
      <HeroService
        sectionClassName='bg-[url(/services/healthcare-mobile-app-development-services/hero-bg.jpg)] bg-no-repeat bg-cover'
        title={'Healthcare App Development Services'}
        subtitle={
          'As a custom healthcare app development company, our mission is to transform the industry with innovative mHealth solutions. We empower startups, clinics, hospitals, and pharmacies to enhance patient care, ensure HIPAA compliance, and boost operational efficiency. Through our expert healthcare application development services, we address regulatory challenges and deliver custom apps that drive better health outcomes.'
        }
        btn_link={'/contact-us'}
        btn_text={'Contact Us'}
        src='/services/healthcare-mobile-app-development-services/hero.png'
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
        title='Our healthcare expertise'
        subtitle='Our success'
        text='At Interexy, we specialize in creating secure and innovative solutions that align with industry regulations. Our healthcare app developers deliver scalable and user-friendly healthcare mobile app development services, trusted by healthcare providers worldwide. Whether it’s a robust hospital app development company project or a tailored solution for startups, we leverage our expertise to address complex challenges with precision.'
        expertise={[
          { number: '80', title: 'Qualified developers' },
          { number: '7', title: 'Healthtech products in progress' },
          { number: '15', title: 'Launched mHealth apps' },
          { number: '8', title: 'Years of expertise' },
        ]}
      />

      <TechStack
        title='Solutions for modern healthcare'
        subtitle='Our products'
        techStack={healthcareProducts}
      />

      <Expertise
        title='Emerging tech for healthcare development'
        subtitle='Tech-driven healthcare'
        expertise={healthcareExpertise}
      />

      <OurPartners
        title={'Who do we serve?'}
        subtitle='Our partners'
        partners={healthcarePartners}
      />

      <Banner
        title='Transform your health business with Interexy'
        subtitle='Supercharge your workflows with innovative technologies like AI, telemedicine, and blockchain to enhance patient care and operations.'
        link='/contact-us'
        link_title='Let’s connect'
      />

      <OurPartners
        title={'Why choose Interexy as your healthcare app development company?'}
        subtitle='Proven expertise'
        partners={healthcareCompany}
      />

      <OurProducts
        title='Explore our recent mobile app designs'
        subtitle='Our UI/UX work'
        products={healthcareDesigns}
      />

      <Banner
        title='Empower your healthcare journey today'
        subtitle='Collaborate with Interexy to develop software that meets the evolving needs of your patients and practice.'
        link='/contact-us'
        link_title='Book a call'
      />

      <DevelopmentProcess
        title={'Healthcare app development process'}
        subtitle={'Process'}
      />

      <Safeguarding
        title='Safeguarding your healthcare data'
        subtitle='Security'
        items={healthcareSecurity}
      />

      <SecondBanner
        imgSrc='/services/healthcare-mobile-app-development-services/second-banner-1.png'
        buttonLink='/contact-us'
        buttonText='Get the file'
        description='Download this guide to explore the essential regulations and tips you need to know for developing safe and compliant healthcare software.'
        title='Top tips for compliant healthcare development in 2025'
        imgWrapperClasses='!max-w-[571px]'
      />

      <OurClients title='We are trusted' subtitle='Our clients' />

      <OurAchievements />

      <Reviews
        title='Highly satisfied clients'
        subtitle='Reviews'
        reviews={healthcareReviews}
      />

      <OurPortfolio
        title='Software that helps you succeed'
        subtitle='Our portfolio'
        cases={cases}
        titleChildren={
          <p className='text-secondary text-base leading-[1.4] font-medium md:text-lg'>
            Our user-centered design encourages productivity and boosts revenue.
          </p>
        }
      />

      <FAQ title='Healthcare App Development FAQs' items={healthcareFaq} />

      <Blog title='Our latest insights' subtitle='Blog' blogPosts={blogPosts} />
    </>
  );
}
