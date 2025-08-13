import { InfiniteImageScroll, OurExpertise, OurPortfolio } from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import {
  Banner,
  CoreTechnologies,
  HeroService,
  OurProcess,
  Reasons,
  Reviews,
} from '@/components/service-blocks';
import { cases } from '../blockchain-app-development-services/data';
import {
  cryptocurrencyFeatures,
  cryptocurrencyInterexy,
  cryptocurrencyProcess,
  cryptocurrencyServices,
  cryptocurrencyWorks,
} from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'cryptocurrency-app-development-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function CryptocurrencyAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Cryptocurrency App Development Services'}
        subtitle={
          'With people starting investing in cryptocurrency and the immense growth of this space, we can cover all your development needs and produce efficient, stable and engaging applications.'
        }
        btn_link={'/contact-us'}
        btn_text={'Let’s See Closer'}
        src='/services/cryptocurrency-app-development-services/hero.png'
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

      <OurExpertise
        title='Why Do You Need Web Development Services?'
        titleChild={
          <p>
            Custom web development solutions specially crafted for your industry help your
            business with:
          </p>
        }
        items={cryptocurrencyServices}
      />

      <Banner
        img_src='/services/cryptocurrency-app-development-services/banner-1.png'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <Reasons title='How Cryptocurrency Works' items={cryptocurrencyWorks} />

      <Banner
        img_src='/services/cryptocurrency-app-development-services/banner-2.webp'
        title='Partner A High-Skilled Cryptocurrency App Development Company'
        subtitle='We help startups and large companies leverage the decentralized network, craft solutions on blockchain networks and bring a new level of efficiency, transparency and higher revenue into your business process.'
        btn_title='Consult our experts'
        btn_link='/contact-us'
      />

      <OurExpertise
        title='Features of Cryptocurrency App'
        items={cryptocurrencyFeatures}
      />

      <OurProcess
        title='Our Crypto App Development Processes'
        process={cryptocurrencyProcess}
      />

      <CoreTechnologies
        title='Technologies We Use'
        titleChild={
          <p>
            The tech side of our cryptocurrency development process usually consists of
            the following technologies:
          </p>
        }
        technologies={[
          {
            src: '/services/cryptocurrency-app-development-services/swift-ar21-1.svg',
            alt: 'Swift',
            width: 120,
            height: 61,
          },
          {
            src: '/services/cryptocurrency-app-development-services/apple_xcode-ar21-1.svg',
            alt: 'Xcode',
            width: 120,
            height: 60,
          },
          {
            src: '/services/cryptocurrency-app-development-services/Web3-1.svg',
            alt: 'Web3',
            width: 120,
            height: 61,
          },
          {
            src: '/services/cryptocurrency-app-development-services/javascript-horizontal-1.svg',
            alt: 'JavaScript',
            width: 186,
            height: 47,
          },
          {
            src: '/services/cryptocurrency-app-development-services/rust-lang-ar21-1.svg',
            alt: 'Rust',
            width: 140,
            height: 71,
          },
          {
            src: '/services/cryptocurrency-app-development-services/400px-Solidity-1.svg',
            alt: 'Solidity',
            width: 146,
            height: 61,
          },
        ]}
      />

      <CoreTechnologies
        title='Most powerful cryptocurrencies'
        sectionClassName='bg-[#f7f8fc]'
        technologies={[
          {
            src: '/services/cryptocurrency-app-development-services/BNB.svg',
            alt: 'BNB',
            width: 322,
            height: 200,
          },
          {
            src: '/services/cryptocurrency-app-development-services/Solana.svg',
            alt: 'Tesseract OCR',
            width: 322,
            height: 200,
          },
          {
            src: '/services/cryptocurrency-app-development-services/Avalanche.svg',
            alt: 'Avalance',
            width: 322,
            height: 200,
          },
          {
            src: '/services/cryptocurrency-app-development-services/Chainlink.svg',
            alt: 'Chainlink',
            width: 322,
            height: 200,
          },
        ]}
      />

      <Reasons
        title='Why Choose Interexy As Your Cryptocurrency App Development Partner?'
        items={cryptocurrencyInterexy}
      />

      <OurPortfolio title='See our experience' cases={cases} />

      <Reviews title='Highly Satisfied Clients' />
    </>
  );
}
