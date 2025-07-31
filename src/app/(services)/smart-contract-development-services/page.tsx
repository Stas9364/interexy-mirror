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
import {
  smartContractBenefits,
  smartContractExpertise,
  smartContractServices,
} from './data';
import { cases } from '../blockchain-app-development-services/data/cases';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';

export const metadata: Metadata = {
  title: 'Smart Contract Development Services | Interexy',
  description:
    'Setting standards in the industry, we develop craft fail-proof smart contracts for businesses across sectors and help startups fill their expertise gaps',
};

export default function SmartContractDevelopmentServices() {
  return (
    <>
      <HeroService
        sectionClassName='bg-[#6579f4] text-white'
        title={'Smart Contract Development Services'}
        subtitle={
          'Setting standards in the industry, we develop craft fail-proof smart contracts for businesses across sectors and help startups fill their expertise gaps'
        }
        btn_link={'/contact-us'}
        btn_text={'Book A Call'}
        src='/services/smart-contract-development-services/hero.png'
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
      <OurExpertise title='Our Expertise' items={smartContractExpertise} />
      <Banner
        img_src='/services/smart-contract-development-services/banner.png'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />
      <OurSuccess
        title='Five Years of Success'
        text='Interexy is a trusted app & web development agency that has already established its name in the development world. With a core focus on blockchain, healthcare, NFT and Fintech, we offer innovative & custom solutions for every client’s success.'
        expertise={[
          { number: '20', title: 'Blockchain projects' },
          { number: '150', title: 'Qualified developers' },
          { number: '120', title: 'Digital products built' },
          { number: '300', title: 'Combined years of experience' },
        ]}
      />
      <OurClients title='Trusted by' />
      <OurExpertise title='Benefits Of Smart Contracts' items={smartContractBenefits} />
      <Reasons
        title='Our Core Smart Contract Development Services'
        items={smartContractServices}
      />
      <CoreTechnologies
        title='Blockchains We Work With'
        sectionClassName='bg-[#f7f8fc]'
        technologies={[
          {
            src: '/services/smart-contract-development-services/BNB.svg',
            alt: 'BNB',
            width: 322,
            height: 200,
          },
          {
            src: '/services/smart-contract-development-services/Solana.svg',
            alt: 'Tesseract OCR',
            width: 322,
            height: 200,
          },
          {
            src: '/services/smart-contract-development-services/Avalanche.svg',
            alt: 'Avalance',
            width: 322,
            height: 200,
          },
          {
            src: '/services/smart-contract-development-services/Chainlink.svg',
            alt: 'Chainlink',
            width: 322,
            height: 200,
          },
        ]}
      />

      <OurPortfolio title='See our experience' cases={cases} />

      <Banner
        img_src='/services/smart-contract-development-services/banner-3.png'
        title='Discuss a project'
        subtitle='Let’s have a free consultation with our experts to discuss your future blockchain smart contract project'
        btn_title='Get Expert Advice'
        btn_link='/contact-us'
      />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />
    </>
  );
}
