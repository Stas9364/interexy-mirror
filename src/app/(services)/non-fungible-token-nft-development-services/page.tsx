import { InfiniteImageScroll, OurExpertise, OurPortfolio } from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import {
  Banner,
  CoreTechnologies,
  HeroService,
  OurProcess,
  Reviews,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import { nftPartner, nftProcess, nftServices } from './data';
import { cases } from '../blockchain-app-development-services/data';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';

export const metadata: Metadata = {
  title: 'Non-Fungible Token (NFT) Development Services | Interexy',
  description:
    '✅ Let’s craft your NFT development solutions with our experts in blockchain! Boost your business with cryptocurrency partnering our development team',
};

export default function NonFungibleTokenNftDevelopmentServices() {
  return (
    <>
      <HeroService
        sectionClassName='bg-gradient-to-br from-black via-blue-900 to-blue-900 text-white'
        title={'Non-Fungible Token (NFT) Development Services'}
        subtitle={
          'We are highly experienced in the latest technology advancements and ready to provide you with cutting-edge NFT development services. Want to earn revenue with only a tap of a finger? Consult our NFT token development company and let’s go!'
        }
        btn_link={'/contact-us'}
        btn_text={'Consult Our Experts'}
        src='/services/non-fungible-token-nft-development-services/hero.png'
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

      <OurExpertise title='NFT Development Services by Interexy' items={nftServices} />

      <Banner
        img_src='/services/non-fungible-token-nft-development-services/banner.png'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <OurExpertise
        title='Why choose Interexy as your NFT token development partner?'
        items={nftPartner}
        btn_title='Talk to our experts'
      />

      <Banner
        img_src='/services/non-fungible-token-nft-development-services/banner-2.png'
        title='Discover Our NFT & Blockchain Development Process'
        subtitle='Let’s talk about how we can support your blockchain journey from idea to launch.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <CoreTechnologies
        title='Core standards and technologies'
        titleChild={
          <p>
            Our NFT development services are based on the following industry standards and
            protocols that ensures compliance with strict guidelines and bugs-free
            development.
          </p>
        }
        technologies={[
          {
            src: '/services/non-fungible-token-nft-development-services/ethereum-eth-logo-full-horizontal-1.svg',
            alt: 'Ethereum',
            width: 178,
            height: 45,
          },
          {
            src: '/services/non-fungible-token-nft-development-services/tron-trx-logo-full-1.svg',
            alt: 'TRON ',
            width: 160,
            height: 61,
          },
          {
            src: '/services/non-fungible-token-nft-development-services/aes-256-1.svg',
            alt: 'Advanced Encryption Standards',
            width: 120,
            height: 50,
          },
          {
            src: '/services/non-fungible-token-nft-development-services/image-216.svg',
            alt: 'ERC-721',
            width: 120,
            height: 61,
          },
          {
            src: '/services/non-fungible-token-nft-development-services/Frame-1171274945.svg',
            alt: 'TRC-721',
            width: 124,
            height: 43,
          },
          {
            src: '/services/non-fungible-token-nft-development-services/274945.svg',
            alt: 'ERC-1155',
            width: 142,
            height: 49,
          },
          {
            src: '/services/non-fungible-token-nft-development-services/945.svg',
            alt: 'EIP-2309',
            width: 134,
            height: 49,
          },
          {
            src: '/services/non-fungible-token-nft-development-services/Binance-Smart-Chain-1.svg',
            alt: 'Binance Smart Chain',
            width: 180,
            height: 71,
          },
        ]}
      />

      <Banner
        img_src='/services/non-fungible-token-nft-development-services/banner-3.png'
        title='Hire Developers'
        subtitle='Let us choose the best specialist for you according to the project requirements so you can kick off the project within 5 business days!'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <OurProcess title='Our NFT development processes' process={nftProcess} />

      <OurPortfolio title='See our experience' cases={cases} />

      <Banner
        img_src='/services/non-fungible-token-nft-development-services/banner-4.png'
        title='Explore all opportunities of the NFT industry'
        subtitle='We provide various NFT development solutions that are adapted for special business needs and various verticals.'
        btn_title='Let’s discuss your project'
        btn_link='/contact-us'
      />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />
    </>
  );
}
