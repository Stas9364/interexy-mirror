import {
  Blog,
  InfiniteImageScroll,
  OurClients,
  OurExpertise,
  OurSuccess,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import {
  AppLooksLike,
  Banner,
  CompaniesLogo,
  CoreTechnologies,
  FAQ,
  HeroService,
  OurProcess,
  Reasons,
  Reviews,
  Steps,
  Testimonials,
} from '@/components/service-blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import type { Metadata } from 'next';
import {
  telemedicineDev,
  telemedicineFaq,
  telemedicineFeatures,
  telemedicineIdeas,
  telemedicineInterexy,
  telemedicineLifecycle,
  telemedicineLogos,
  telemedicineModels,
  telemedicineProviderFeat,
  telemedicineReview,
  telemedicineService,
} from './data';
import { ReviewsSwiper } from '@/components/service-blocks/reviews-swiper/ReviewsSwiper';

export const metadata: Metadata = {
  title: 'Telemedicine App Development Services | Interexy',
  description:
    '✅ As a custom telehealth app development company, Interexy offers end-to-end telemedicine app development services to improve client’s workflow',
};

export default function TelemedicineAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Telemedicine App Development Company'}
        subtitle={
          'As a custom telemedicine app development company, Interexy provides premium-quality telemedicine app development solutions such as chronic disease management, remote patient assessment, mental health management, and health education.'
        }
        btn_link={'/contact-us'}
        btn_text={'Consult Our Experts'}
        src='/services/telemedicine-app-development/hero.png'
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

      <Reasons
        title='Grow Your Business With Telemedicine App Development Services'
        items={telemedicineService}
      />

      <Banner
        img_src='/services/telemedicine-app-development/banner.jpg'
        title='Hire telemedicine app developers!'
        subtitle='Our top-notch team of telehealth app developers is ready to handle the full cycle of software development or join you at any stage of the project.'
        btn_title='Get a quote'
        btn_link='/contact-us'
      />

      <OurSuccess
        title='Telemedicine app development company in numbers'
        text='As a leading telehealth app development company, our team has extensive experience in HealthTech. Our custom healthcare app solutions allow clients to deliver effective, improved and secure care while also being compliant with strict industry’s standards like HIPAA regulation'
        expertise={[
          { number: '70', title: 'Qualified Telemedicine App Developers' },
          { number: '6', title: 'Telemedicine Products in Progress' },
          { number: '15', title: 'Launched mHealth Apps' },
          { number: '200', title: 'Combined years of experience' },
        ]}
      />

      <OurClients title='Trusted by Leading Brands Worldwide' />

      <Banner
        img_src='/services/telemedicine-app-development/banner-2.webp'
        title='Healthcare app regulations you must know in 2025'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <OurExpertise title='Telemedicine Patient Features' items={telemedicineFeatures} />

      <Banner
        img_src='/services/telemedicine-app-development/banner-1.jpg'
        title='Book a Free Call!'
        subtitle='Learn more about our expertise and get a detailed approach and solution for your specific case. Our telemedicine app development company is ready to cover all your needs and ideas!'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <OurExpertise
        title='Telemedicine Provider Features'
        items={telemedicineProviderFeat}
      />

      <CompaniesLogo logos={telemedicineLogos} />

      <Testimonials title='Our Clients Trust Us' />

      <Reasons title='Benefits of Telemedicine App Development' items={telemedicineDev} />

      <Banner
        img_src='/services/telemedicine-app-development/banner-4.jpg'
        title='Get a free project estimation!'
        subtitle='Let us choose top-notch specialists for you according to the project requirements so you can kick off the project within 5 business days!'
        btn_title='Discuss your idea'
        btn_link='/contact-us'
      />

      <AppLooksLike
        title='What the Product Can Look Like'
        imgWrapperClasses='h-[681px] aspect-[1600/681]  h-auto w-full '
        forCustomers={['/services/telemedicine-app-development/app-screen-tan.png']}
        forPartners={['/services/telemedicine-app-development/Group-626278.png']}
      />

      <CoreTechnologies
        title='Telemedicine App Development Compliance'
        titleChild={
          <p>
            We always guarantee that your product follows and is compliant with all legal
            and industry guidelines
          </p>
        }
        sectionClassName='bg-[#f2f5fe] pt-[80px]'
        technologies={[
          {
            src: '/services/telemedicine-app-development/HIPAA.svg',
            alt: 'HIPAA',
            width: 100,
            height: 100,
          },
          {
            src: '/services/telemedicine-app-development/FDA.svg',
            alt: 'FDA',
            width: 100,
            height: 100,
          },
          {
            src: '/services/telemedicine-app-development/HL7.svg',
            alt: 'HL7',
            width: 100,
            height: 100,
          },
          {
            src: '/services/telemedicine-app-development/HITECH.svg',
            alt: 'HITECH',
            width: 100,
            height: 100,
          },
          {
            src: '/services/telemedicine-app-development/GDPR.svg',
            alt: 'GDPR',
            width: 100,
            height: 100,
          },
        ]}
      />

      <Steps title='Flexible Engagement Models' steps={telemedicineModels} />

      <OurProcess
        title='Telemedicine App Development Lifecycle'
        process={telemedicineLifecycle}
      />

      <Reasons
        title='Why Choose Interexy As Your Telemedicine App Development Company?'
        blockTitleChild={
          <p>
            Interexy is a Miami-headquartered custom telehealth app development company
            with development offices in Dubai and Poland. We have in-depth expertise in
            Healthcare, Pharma & Fitness industries, offering innovative solutions for
            such market giants as SAP, Pampers, General Electric, and the fastest-growing
            web3 startups.
          </p>
        }
        items={telemedicineInterexy}
      />

      <ReviewsSwiper
        title={'What Our Satisfied Clients Say'}
        reviewsData={telemedicineReview}
      />

      <FAQ title={'FAQ About Telemedicine App Development'} items={telemedicineFaq} />

      <Blog
        title='Pharmacy Business Ideas for Entrepreneurs'
        blogPosts={telemedicineIdeas}
      />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />
    </>
  );
}
