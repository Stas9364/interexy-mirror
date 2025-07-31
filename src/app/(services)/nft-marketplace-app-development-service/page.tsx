import {
  Banner,
  FAQ,
  HeroService,
  Info,
  Reasons,
  SecondBanner,
  Steps,
  Testimonials,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import {
  customersEvolution,
  nftExpertise,
  nftFaq,
  nftFeatures,
  nftInfo,
  nftSolutions,
  whyChoose,
} from './data';
import { Blog, OurExpertise } from '@/components/blocks';

export const metadata: Metadata = {
  title: 'Taxi Application Development Services | Interexy',
  description:
    'Give your business a lift to success. Book our taxi app development services.',
};

export default function NftMarketplaceAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'NFT Marketplace App Development Services'}
        subtitle={
          'Let’s learn more about our NFT marketplace development solutions and enter the most popular industry in 2022. Being completely secure, based on the blockchain and with an engaging user interface, we can develop a next competitor for market giants to help you stay in demand.'
        }
        btn_link={'/contact-us'}
        btn_text={'Book a call'}
        src='/services/nft-marketplace-app-development-service/hero.png'
        imgClasses='!object-contain'
      />

      <Info items={nftInfo} />

      <Banner
        img_src='/services/nft-marketplace-app-development-service/banner.png'
        btn_link='/contact-us'
        btn_title='Contact Us'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
      />

      <OurExpertise
        title='NFT Marketplace Development Solutions by Interexy'
        items={nftSolutions}
      />

      <Reasons title='Non-Fungible Tokens Marketplace key features' items={nftFeatures} />

      <SecondBanner
        imgSrc='/services/nft-marketplace-app-development-service/banner-2.png'
        buttonLink='/contact-us'
        buttonText='Contact us'
        description='Let’s talk about how we can support your blockchain journey from idea to launch.'
        title='Discover Our NFT & Blockchain Development Process'
        imgWrapperClasses='!aspect-[750/510] !max-w-[750px]'
      />

      <OurExpertise
        title='Our expertise in NFT marketplace app development within industries'
        items={nftExpertise}
      />

      <Steps title='Why Choose Interexy' steps={whyChoose} />

      <Blog title='See our customers’ evolution' blogPosts={customersEvolution} />

      <Testimonials title={'Testimonials'} />

      <FAQ title='FAQ' items={nftFaq} />
    </>
  );
}
