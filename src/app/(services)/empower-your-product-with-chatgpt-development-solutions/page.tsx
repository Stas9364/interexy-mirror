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
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import { cases } from '../blockchain-app-development-services/data';
import {
  chatgptBenefits,
  chatgptInterexy,
  chatgptLifecycle,
  chatgptModels,
  chatgptServices,
  chatgptSolutions,
} from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'empower-your-product-with-chatgpt-development-solutions';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function EmpowerYourProductWithChatGPTDevelopmentSolutions() {
  return (
    <>
      <HeroService
        sectionClassName='bg-[#07041e] text-white'
        title={'Empower your Product with ChatGPT Development Solutions'}
        subtitle={
          'We offer throught-out Internet of Things app development services, covering custom needs, business requirements and integrations to help you reach the next level of your business'
        }
        btn_link={'/contact-us'}
        btn_text={'Consult Out Experts'}
        src='/services/empower-your-product-with-chatgpt-development-solutions/hero.png'
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
        title='GPT3 Development Company'
        text='Although ChatGPT is a new field, our company is already working on several projects. We have a large team of developers specializing in AI development, offering our clients custom solutions, vast expertise and high-grade results.'
        expertise={[
          { number: '60', title: 'Qualified developers' },
          { number: '3', title: 'GhatGPT Products in Progress' },
          { number: '10', title: 'Apps Integrated with ChatGPT' },
          { number: '150', title: 'Combined years of experience' },
        ]}
      />

      <OurClients title='Trusted by' />

      <Reasons
        title='The Benefits of GPT3 Development for Your Business'
        items={chatgptBenefits}
      />

      <Banner
        img_src='/services/empower-your-product-with-chatgpt-development-solutions/banner-1.png'
        title='Struggling to Estimate App Development Costs?'
        subtitle='We’ll help you break it down based on your needs, features, and timeline.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />

      <OurExpertise title='Our GPT3 Development Solutions' items={chatgptSolutions} />

      <Banner
        img_src='/services/empower-your-product-with-chatgpt-development-solutions/banner-2.png'
        title='Discuss a project'
        subtitle='Let’s have a free consultation with our experts to discuss your future blockchain smart contract project'
        btn_title='Get Expert Advice'
        btn_link='/contact-us'
      />

      <OurExpertise
        title='Types of GPT3 App Development Services'
        items={chatgptServices}
      />

      <OurExpertise
        title='Flexible Engagement Models'
        items={chatgptModels}
        btn_title='Explain how it works'
      />

      <Banner
        img_src='/services/empower-your-product-with-chatgpt-development-solutions/banner-3.jpg'
        title='Hire Developers'
        subtitle='Let us choose the best specialist for you according to the project requirements so you can kick off the project within 5 business days!'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <OurProcess
        title='GPT3 Integration and Development Lifecycle'
        process={chatgptLifecycle}
      />

      <Reasons
        title='Why Engage Interexy For GPT3 Development?'
        items={chatgptInterexy}
      />

      <OurPortfolio title='Find the perfect Project' cases={cases} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />
    </>
  );
}
