import { OurExpertise, OurPortfolio } from '@/components/blocks';
import {
  FullCycleDevelopment,
  HeroService,
  Reasons,
  Reviews,
  SecondBanner,
  Statistics,
} from '@/components/service-blocks';
import type { Metadata } from 'next';
import {
  addFacts,
  progress,
  smaExperience,
  socialNetworking,
  socialReviews,
  socialServices,
} from './data';
import { cases } from '../blockchain-app-development-services/data';

export const metadata: Metadata = {
  title: 'Social Media App Development Services | Interexy',
  description:
    'Planning to develop a dating or social networking app? We provide social media app development services and are ready to help you! ✅ Contact us today',
};

export default function SocialMediaApplicationDevelopmentServices() {
  return (
    <>
      <HeroService
        sectionClassName='bg-[#6579f4] text-white'
        title={'Social Media Application Development Services'}
        subtitle={
          'Make a social media app that meets the needs of end users and your business.'
        }
        btn_link={'/contact-us'}
        btn_text={'Get Stared'}
        src='/services/social-media-application-development-services/hero.png'
        imgClasses='!object-contain'
      />

      <Statistics progress={progress} addFacts={addFacts} />

      <SecondBanner
        imgSrc='/services/social-media-application-development-services/second-banner-1.png'
        buttonLink='/contact-us'
        buttonText='Pre-estimate my project'
        description='Get in touch to build a multifunctional, user-friendly, secure mobile app for your business.'
        title='Keep up with the mobile-first world!'
      />

      <OurExpertise
        title='Social Mobile Applications Development Services'
        items={socialServices}
        btn_title='Partner with Social Media Application Development Company'
      />

      <FullCycleDevelopment
        title='Interexy’s Experience in Social Media App Development Services'
        items={smaExperience}
      />

      <Reasons
        title='Why Сhoose Interexy as a Social MobileApp Development Agency'
        items={[
          {
            title:
              'Willingness to assume various complex tasks in the field of digitization',
            subtitle:
              'Ability to cope well with the tasks, by deep diving into business and betting on quality, flexibility in terms of working with innovations and new solutions that have not yet been on the market.',
            color: '#b6dfec',
          },
          {
            title: 'Readiness to easily clarify all the issues',
            subtitle:
              'and quickly dive into innovative processes, thus becoming a technological partner and find the best ways of realizing your ideas.',

            color: '#ffa1ce',
          },
          {
            title: 'Strong account management communication',
            subtitle:
              'We provide structured and professional communication during the project, so you can be sure of responsiveness and responsibility of the company.',

            color: '#cfffd1',
          },
          {
            title:
              'Proper Social Network App Development company with relevant case studies',
            subtitle:
              'Real experience & successfully implemented projects that prove expertise.',

            color: '#cfddff',
          },
        ]}
      />

      <OurExpertise
        title='Social Networking App Development Features that Make it Happen'
        items={socialNetworking}
      />

      <SecondBanner
        imgSrc='/services/social-media-application-development-services/second-banner-2.png'
        buttonLink='/contact-us'
        buttonText='Pre-estimate my project'
        description='Get in touch to build a multifunctional, user-friendly, secure mobile app for your business.'
        title='Keep up with the mobile-first world!'
      />

      <Reviews title='What our customers say' reviews={socialReviews} />

      <OurPortfolio title='Explore our latest projects case studies' cases={cases} />
    </>
  );
}
