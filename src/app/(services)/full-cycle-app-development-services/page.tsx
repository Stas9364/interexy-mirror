import { OurClients, OurPortfolio } from '@/components/blocks';
import {
  Banner,
  CoreTechnologies,
  FullCycleDevelopment,
  HeroService,
  Reasons,
  Reviews,
  SupportPackages,
} from '@/components/service-blocks';
import { cases } from '../blockchain-app-development-services/data';
import { fullCycleItems } from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'full-cycle-app-development-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function FullCycleAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Full-Cycle App Development Services'}
        subtitle={
          'As a leading full-cycle app development company we provide app development services to keep your business up to date and save your connection with customers in our fast-changing world.'
        }
        btn_link={'/contact-us'}
        btn_text={'Get Stared'}
        src='/services/full-cycle-app-development-services/hero.png'
        sectionClassName='bg-[url(/services/full-cycle-app-development-services/hero_bg.webp)] bg-cover text-white'
        imgClasses='!object-contain'
      />

      <OurClients title='Trusted by' />

      <Banner
        img_src='/services/full-cycle-app-development-services/banner-1.png'
        title='Want to strike a cost balance in app development?'
        subtitle='Download costs on app development based on all factors to consider'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <Reasons
        title='Share your core business idea, and we’ll take care of the rest'
        items={[
          {
            title: 'Tight Testing Process',
            subtitle:
              'We emphasize the value of testing and make sure the software meets your expectations in terms of quality and will be extendable and stable for large user audiences.',
            color: '#b6dfec',
          },
          {
            title: 'Transparency',
            subtitle:
              'We ensure both structured & standardized processes along with a human approach in place. It helps us achieve clarity of processes and quality of work.',
            color: '#ffa1ce',
          },
          {
            title: 'Control & reliability',
            subtitle:
              'We take care of each stage of the full-cycle app development and use technical creativity to implement your business idea in the best way.',
            color: '#cfffd1',
          },
          {
            title: 'Expertise',
            subtitle:
              'With deep specialization in full-cycle application development, we dive into innovative processes & provide new app development solutions that have not been on the market yet.',
            color: '#cfddff',
          },
          {
            title: 'Specialists Support',
            subtitle:
              'Every member of our team works specifically with mobile solutions, which improves the quality of the projects we’re working on, differentiating them on quality from the competitors.',
            color: '#f0ffcf',
          },
        ]}
      />

      <Banner
        img_src='/services/full-cycle-app-development-services/banner-2.png'
        title='Hire Developers'
        subtitle='Let us choose the best specialist for you according to the project requirements so you can kick off the project within 5 business days!'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <Reasons
        title='Full-cycle app development with Interexy best choice for'
        items={[
          {
            title: 'Process Digitalization',
            color: '#b6dfec',
          },
          {
            title: 'Building new digital ecosystem',
            color: '#ffa1ce',
          },
          {
            title: 'B2B Startups',
            color: '#cfffd1',
          },
        ]}
      />

      <FullCycleDevelopment
        title='Interexy’s ExperienceIn Full-Cycle Development'
        items={fullCycleItems}
      />

      <Banner
        img_src='/services/full-cycle-app-development-services/banner-3.png'
        title='Keep Up With The Mobile-First World!'
        subtitle='Get in touch to build a multifunctional, user-friendly, secure mobile app for your business.'
        btn_title='Contact Us'
        btn_link='/contact-us'
      />

      <SupportPackages />

      <Reasons
        title='Our Industry Expertise and Business Verticals'
        items={[
          {
            title: 'Telemedicine (TeleHealth)',
            color: '#b6dfec',
          },
          {
            title: 'Wellness & Fitness',
            color: '#ffa1ce',
          },
          {
            title: 'Cannabis apps',
            color: '#cfffd1',
          },
          {
            title: 'Pharma',
            color: '#56f2e9',
          },
          {
            title: 'On-demand delivery apps',
            color: '#263ab7',
          },
          {
            title: 'Real estate',
            color: '#ffc774',
          },
          {
            title: 'Delivery apps',
            color: '#ff9574',
          },
          {
            title: 'Online education',
            color: '#be56b4',
          },
          {
            title: 'Taxi',
            color: '#2694b7',
          },
          {
            title: 'Dating',
            color: '#6fcf97',
          },
        ]}
      />

      <CoreTechnologies
        title='Technology expertise for solid solutions'
        technologies={[
          {
            src: '/services/full-cycle-app-development-services/ts.svg',
            alt: 'TypeScript',
            width: 120,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/js.svg',
            alt: 'JavaScript',
            width: 185,
            height: 46,
          },
          {
            src: '/services/full-cycle-app-development-services/cofee-script.png',
            alt: 'CoffeeScript',
            width: 185,
            height: 46,
          },
          {
            src: '/services/full-cycle-app-development-services/kotlin.png',
            alt: 'kotlin',
            width: 156,
            height: 35,
          },
          {
            src: '/services/full-cycle-app-development-services/java.png',
            alt: 'Java',
            width: 120,
            height: 67,
          },
          {
            src: '/services/full-cycle-app-development-services/swift.svg',
            alt: 'Swift',
            width: 156,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/flutter-dart.png',
            alt: 'Flutter Dart',
            width: 120,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/kotlin-multiplatform.png',
            alt: 'Kotlin-multiplatform',
            width: 156,
            height: 60,
          },

          {
            src: '/services/full-cycle-app-development-services/nodejs.svg',
            alt: 'NodeJS',
            width: 138,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/php.png',
            alt: 'PHP',
            width: 150,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/ruby.png',
            alt: 'Ruby',
            width: 208,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/python.png',
            alt: 'Puthon',
            width: 271,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/react.png',
            alt: 'React',
            width: 224,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/vue.png',
            alt: 'Vue',
            width: 201,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/html.png',
            alt: 'Html',
            width: 181,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/css.png',
            alt: 'Css',
            width: 169,
            height: 60,
          },
          {
            src: '/services/full-cycle-app-development-services/angular.png',
            alt: 'Angular',
            width: 224,
            height: 60,
          },
        ]}
      />

      <Reviews title='Highly Satisfied Clients' />

      <OurPortfolio title='See our experience' cases={cases} />
    </>
  );
}
