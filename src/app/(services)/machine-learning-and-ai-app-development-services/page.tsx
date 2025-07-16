import {
  Blog,
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
  Info,
  Reasons,
  Reviews,
} from '@/components/service-blocks';

import { ml_ai } from '@/components/service-blocks/info/ml_ai';
import { goodSolution } from '@/components/service-blocks/reasons/goodSolution';
import type { Metadata } from 'next';
import { blogPosts, cases, coreTechnologies, industries } from './data';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';

export const metadata: Metadata = {
  title: 'Machine Learning and AI App Development Company | Interexy',
  description:
    'We provide ML and AI app development service and can help in different industry sectors. ✅ Let’s build competitive businesses in partnership',
};

export default function MachineLearningAndAi() {
  return (
    <>
      <HeroService
        title={'Machine Learning & AI App Development Services'}
        subtitle={
          'We’ll expedite your digital transformation initiatives with the innovative power of AI & ML solutions.'
        }
        btn_link={'/contact-us'}
        btn_text={'Get Stared'}
        src='/services/machine-learning-and-ai/ai-hero-img.png'
        sectionClassName='md:!pb-0'
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
        title='Five Years of Success'
        text='Leave blockchain elaboration to your cutting-edge partners at Interexy. We know exactly how blockchain works as we have been in the industry since 2017.'
        expertise={[
          { number: '20', title: 'Blockchain projects' },
          { number: '150', title: 'Blockchain developers' },
          { number: '120', title: 'Digital products built' },
          { number: '300', title: 'Combined years of experience' },
        ]}
      />

      <OurClients title='Trusted by' />

      <Info
        title='Machine Learning & Artificial Intelligence Mobile App Development'
        items={ml_ai}
        href='/contact-us'
        btn_text='Discuss your Project'
      />

      <Reasons
        title='Why Artificial intelligence and Machine learning app development services is a good solutions'
        items={goodSolution}
      />

      <Banner
        img_src='/services/machine-learning-and-ai/banner-1.webp'
        title='Keep up with the mobile-first world!'
        subtitle=' Get in touch to build a multifunctional, user-friendly, secure mobile app
              for your business.'
        btn_title='Pre-estimate my app'
        btn_link='/contact-us'
      />

      <OurPortfolio title='See our experience' cases={cases} />

      <OurExpertise title='Industries we work with AI & ML' items={industries} />

      <Banner
        img_src='/services/machine-learning-and-ai/banner-2.webp'
        title='Keep up with the mobile-first world!'
        subtitle=' Get in touch to build a multifunctional, user-friendly, secure mobile app for your business.'
        btn_title='Pre-estimate my app'
        btn_link='/contact-us'
      />

      <Blog title='AI Business Ideas for Entrepreneurs' blogPosts={blogPosts} />

      <CoreTechnologies
        title='Core technologies used to build functional AI & ML mobile solutions'
        technologies={coreTechnologies}
      />

      <Reviews reviews={reviews} />
    </>
  );
}
