import {
  InfiniteImageScroll,
  OurClients,
  OurExpertise,
  OurPortfolio,
  OurSuccess,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { Banner, HeroService, OurProcess, Reviews } from '@/components/service-blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import type { Metadata } from 'next';
import { cases } from '../blockchain-app-development-services/data';
import { benefitsTokenization, typesTokenization } from './data';

export const metadata: Metadata = {
  title: 'Real Estate Tokenization Development Company - Interexy',
  description:
    'We offer real estate tokenization solutions benefiting from our exceptional expertise in the field. ✅ Open doors for a new decentralized business',
};

export default function RealEstateTokenizationServices() {
  return (
    <>
      <HeroService
        sectionClassName='bg-[url(/services/real-estate-tokenization-services/real-token-hero.jpg)] bg-no-repeat bg-cover lg:!pb-0 text-white'
        title={'Real Estate Tokenization Services'}
        subtitle={
          'Tokenization of real estate has the ability to dramatically change the way people invest in real estate all across the world. Take advantage of its potential and digitize your illiquid assets with experienced blockchain developers'
        }
        btn_link={'/contact-us'}
        btn_text={'Start Tokenization'}
        src='/services/real-estate-tokenization-services/hero.png'
        imgWrapperClasses='lg:block hidden'
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
        title='Real Estate Tokenization Development Company'
        text='Since the NFT and Metaverse market is growing in popularity, we, as a top blockchain Dubai & Miami development company, fill our team with only high-skilled experts. We have already seen a demand for tokenizing real estate and now are known as industry’s experts in that new yet promising field.'
        expertise={[
          { number: '50', title: 'Qualified developers' },
          { number: '50', title: 'Blockchain projects built' },
          { number: '15', title: 'Digital products built' },
          { number: '250', title: 'Combined years of experience' },
        ]}
      />

      <OurClients title='Trusted by' />

      <OurExpertise
        title='Benefits of Real Estate Tokenization'
        items={benefitsTokenization}
      />

      <Banner
        img_src='/services/real-estate-tokenization-services/banner.png'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <OurExpertise
        title='Types of Real Estate Tokenization'
        items={typesTokenization}
        titleChild={
          <p>
            According to your needs and types of properties you have, our Real Estate
            tokenization services are divided into four groups:
          </p>
        }
      />

      <Banner
        img_src='/services/real-estate-tokenization-services/banner-2.png'
        title='Look What We Deliver!'
        subtitle='As a well-known real estate tokenization development company with in-depth experience in this market, we always build user-friendly, scalable, stable and secure products that meet industry’s strict requirements and overcome user expectations.'
        btn_title='Let’s Discuss'
        btn_link='/contact-us'
      />

      <OurProcess title='The Real Estate Tokenization Process' />

      <Banner
        img_src='/services/real-estate-tokenization-services/banner-3.png'
        title='Book a Free Call!'
        subtitle='Learn more about our expertise and get a detailed approach and solution for your specific case'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <OurPortfolio title='Find the perfect Project' cases={cases} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />
    </>
  );
}
