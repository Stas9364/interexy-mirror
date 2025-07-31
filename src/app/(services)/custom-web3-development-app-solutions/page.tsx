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
  HeroService,
  OurProcess,
  Reasons,
  Reviews,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import {
  web3Industries,
  web3Interexy,
  web3Models,
  web3Process,
  web3Services,
  web3Solutions,
  web3Technologies,
} from './data';
import { cases } from '../blockchain-app-development-services/data';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';

export const metadata: Metadata = {
  title: 'Web3 Development Company | Interexy',
  description:
    'Use our Web3 development services to benefit from advanced and latest technology. ✅ Explore how we can turn your dream into reality',
};

export default function CustomWeb3DevelopmentAppSolutions() {
  return (
    <>
      <HeroService
        sectionClassName='bg-[url(/services/custom-web3-development-app-solutions/hero-bg.png)] bg-cover text-white'
        title={'Custom Web3 Development & dApp Solutions'}
        subtitle={
          'Develop an innovative trading, gaming, or any other platform that boosts transparency, increases your customer reach and grows profit multiple times with our Web3 development services'
        }
        btn_link={'/contact-us'}
        btn_text={'Consult Out Experts'}
        src='/services/custom-web3-development-app-solutions/hero.webp'
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
        title='Web3 Development Company'
        text='Having a large team of blockchain experts, we are known as the leading Web3 development company. Using latest technologies, following regulations and delivering to-notch results, we offer a whole list of web3 software development services'
        expertise={[
          { number: '50', title: 'Qualified Web3 developers' },
          { number: '50', title: 'Products built' },
          { number: '15', title: 'Digital products built' },
          { number: '250', title: 'Combined years of experience' },
        ]}
      />

      <OurClients title='Trusted by' />

      <OurExpertise
        title='How You Benefit With Web 3.0 Development Solutions?'
        items={web3Solutions}
      />

      <OurExpertise
        title='Our Web3 Development Services'
        items={web3Services}
        btn_title='Learn more'
      />

      <Banner
        img_src='/services/custom-web3-development-app-solutions/banner.png'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <Reasons
        title='Technologies We Implement In Web3 Development'
        items={web3Technologies}
      />

      <OurExpertise
        title='Industries We Transformed By Blockchain'
        items={web3Industries}
      />

      <Banner
        img_src='/services/custom-web3-development-app-solutions/banner-2.jpg'
        title='Hire Dedicated Team'
        subtitle='Get the full team with required expertise within 10 business days!'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <OurExpertise
        title='Flexible Engagement Models'
        titleChild={
          <p>
            Do not follow rigid standards, hire Web3 developers on your terms according to
            business needs with our flexible models
          </p>
        }
        items={web3Models}
        btn_title='Tell me more'
      />

      <OurProcess title='Our Web3 Development Process' process={web3Process} />

      <OurExpertise
        title='Why Engage Interexy For Web3 Development?'
        items={web3Interexy}
      />

      <OurPortfolio title='Find the perfect Project' cases={cases} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />
    </>
  );
}
