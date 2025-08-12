import {
  InfiniteImageScroll,
  OurClients,
  OurExpertise,
  OurPortfolio,
  OurSuccess,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { Banner, HeroService, Reasons, Reviews } from '@/components/service-blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import { cases } from '../blockchain-app-development-services/data';
import {
  benefitsMetaverse,
  flexibleModels,
  solutionsMetaverse,
  technologiesMetaverse,
} from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'metaverse-development-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function MetaverseDevelopmentServices() {
  return (
    <>
      <HeroService
        sectionClassName='bg-[url(/services/metaverse-development-services/metaverse-hero-bg.jpg)] bg-no-repeat bg-cover lg:!pb-0 text-white'
        title={'Metaverse Development Services'}
        subtitle={
          'Metaverse is a buzzword and for a good reason. It offers a potential to enter various fields and cover numerous use cases. Interexy is a pioneer in the metaverse development with in-depth expertise in the industry and related technologies'
        }
        btn_link={'/contact-us'}
        btn_text={'Book A Call'}
        src='/services/metaverse-development-services/hero.webp'
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

      <Banner
        img_src='/services/metaverse-development-services/banner.png'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <OurSuccess
        title='Metaverse Development Company'
        text='Being №1 Blockchain development provider in Dubai & Miami, Sandbox partner and having the team of top-notch blockchain developers with unique experience and skills, we offer most innovative metaverse software development solutions on the market'
        expertise={[
          { number: '50', title: 'Qualified blockchain developers' },
          { number: '50', title: 'Products built' },
          { number: '15', title: 'Digital products built' },
          { number: '250', title: 'Combined years of experience' },
        ]}
      />

      <OurClients title='Trusted by' />

      <OurExpertise
        title='Busindevelopmentess Benefits of Metaverse Development'
        items={benefitsMetaverse}
      />

      <Banner
        img_src='/services/metaverse-development-services/banner-2.png'
        title='Look What We Deliver!'
        subtitle='Our specialists work with next-gen technologies, including the most popular market requests such as Solidity, Solana & Flow, and others'
        btn_title='Let’s Discuss'
        btn_link='/contact-us'
      />

      <Reasons
        title='Our Metaverse Development Technologies'
        items={technologiesMetaverse}
      />

      <OurExpertise
        title='Our Metaverse Solutions for Industries'
        items={solutionsMetaverse}
      />

      <Banner
        img_src='/services/metaverse-development-services/banner-3.png'
        title='Hire Metaverse Developers'
        subtitle='Hire our metaverse developers to get qualified experts with relevant experience, smooth communication and on time delivery'
        btn_title='Book A Call'
        btn_link='/contact-us'
      />

      <OurExpertise
        title='Flexible Engagement Models'
        items={flexibleModels}
        btn_title='Tell me more'
      />

      <OurPortfolio title='See our experience' cases={cases} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />
    </>
  );
}
