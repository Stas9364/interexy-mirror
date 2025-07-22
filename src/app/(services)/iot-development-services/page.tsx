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
  Reasons,
  Reviews,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import { acrossIndustries, engagementModels, IoTDevelopmentServices } from './data';
import { cases } from '../blockchain-app-development-services/data';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';

export const metadata: Metadata = {
  title: 'Internet Of Things (IOT) App Development Services | Interexy',
  description:
    '✅ Benefit from our in-depth expertise and highly skilled developers by hiring us as your trusted Internet Of Things (IoT) app development company',
};

export default function IotDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Internet of Things (IoT) App Development Services'}
        subtitle={
          'Elevate your business with our comprehensive IoT app development services. Tailored to your custom needs, business requirements, and seamless integrations, we empower you to reach new heights. Partner with us for a transformative journey into the next level of technological excellence.'
        }
        btn_link={'/contact-us'}
        btn_text={'Book a call'}
        src='/services/iot-development-services/hero-iot.png'
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
        title='IoT Application Development Company'
        text='As a trusted mobile and & web development company, we allow clients to take full advantage of our professional IoT app development solutions tailored to the needs of innovation-driven consumer electronics startups exploring the domain'
        expertise={[
          { number: '50', title: 'Qualified developers' },
          { number: '50', title: 'Products built' },
          { number: '15', title: 'Digital products built' },
          { number: '250', title: 'Combined years of experience' },
        ]}
      />
      <OurClients title='Trusted by' />

      <OurExpertise
        title='Custom Blockchain App Development Services'
        items={IoTDevelopmentServices}
      />

      <Banner
        img_src='/services/iot-development-services/banner-1.webp'
        title='Discuss a project'
        subtitle='Let’s have a free consultation with our experts to discuss your future blockchain smart contract project'
        btn_title='Get Expert Advice'
        btn_link='/contact-us'
      />

      <OurExpertise title='IoT Applications Across Industries' items={acrossIndustries} />

      <OurExpertise title='Flexible Engagement Models' items={engagementModels} />

      <CoreTechnologies
        title='Technologies We Use'
        technologies={[
          {
            src: '/services/iot-development-services/nodejs.svg',
            alt: 'NodeJS',
            width: 138,
            height: 70,
          },
          {
            src: '/services/iot-development-services/python.svg',
            alt: 'Python',
            width: 148,
            height: 74,
          },
          {
            src: '/services/iot-development-services/reactjs.svg',
            alt: 'ReactJS',
            width: 138,
            height: 70,
          },
          {
            src: '/services/iot-development-services/c.svg',
            alt: 'C',
            width: 66,
            height: 74,
          },
          {
            src: '/services/iot-development-services/next-js.svg',
            alt: 'NextJS',
            width: 136,
            height: 82,
          },
          {
            src: '/services/iot-development-services/opentsdb.svg',
            alt: 'OpenTSBD',
            width: 240,
            height: 62,
          },
        ]}
      />

      <Reasons
        title='Why Engage Interexy For IoT Development?'
        items={[
          {
            title: 'Dedicated Expertise',
            subtitle:
              'Interexy has a team of developers with relevant skills and backgrounds',
            color: '#b6dfec',
          },
          {
            title: 'Short Time to Market',
            subtitle: 'We created a team upon request and offer candidates within 5 days',
            color: '#ffa1ce',
          },
          {
            title: 'Security',
            subtitle: 'Our IoT development services always ensure data safety',
            color: '#cfffd1',
          },
          {
            title: 'High Transparency of IoT Projects',
            subtitle: 'We work under lates regulations and KPI-based project management',
            color: '#cfddff',
          },
        ]}
      />

      <OurPortfolio title='See our experience' cases={cases} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />
    </>
  );
}
