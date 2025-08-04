import { BlockTitle } from '@/components/block-title/BlockTitle';
import { OurExpertise, OurPortfolio } from '@/components/blocks';
import { Container, Section } from '@/components/layout';
import {
  Banner,
  FAQ,
  HeroService,
  Info,
  Reasons,
  Reviews,
  ServicesExpertise,
} from '@/components/service-blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import type { Metadata } from 'next';
import Image from 'next/image';
import { cases } from '../blockchain-app-development-services/data';
import { chooseInterexy, faq, fintechExpertise, mustHaveFeatures } from './data';

export const metadata: Metadata = {
  title: 'FinTech App Development Company | Interexy',
  description:
    "Elevate your business with Interexy's fintech app development services. Craft FinTech mobile solutions with us to thrive in a flourishing market",
};

export default function FintechAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'FinTech app development services'}
        subtitle={
          'Whether you’re looking for improvement of your applications or starting them from scratch, Interexy is ready for complex challenges and has all resources to deliver smart fintech solutions. Discover our fast and mess-free financial app development services from our high-skilled team.'
        }
        btn_link={'/contact-us'}
        btn_text={'Get consultation'}
        src='/services/fintech-app-development-services/hero.png'
      />

      <Info
        title='Why the perfect time for your FinTech app is now?'
        items={[
          {
            subtitle:
              'his is the amount the Global FinTech Market was valued in 2020 and is projected to grow at a CAGR of 26.87% during the next few years.',
            title: 'USD $7301. 78 billion',
            bg_color: '#f6f6fd',
          },
          {
            subtitle:
              'FinTech software development is considered the largest segment with 45% of the whole global market share.',
            title: '45%',
            bg_color: '#f2f2f2',
          },
          {
            subtitle:
              'Even though the FinTech segment is popular in the UK, China, Germany and India, USA is largest region boasting 73% of the global FinTech investment market.',
            title: 'USA',
            bg_color: '#f0ffcf',
          },
        ]}
      />

      <Section>
        <Container>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2'>
              <div className='relative mx-auto aspect-[1000/1000] h-auto w-full max-w-[700px]'>
                <Image
                  src='/services/fintech-app-development-services/fintech-wy-do-img.png'
                  alt='FinTech'
                  fill
                  className='object-contain'
                  sizes='(max-width: 1024px) 100vw, 700px'
                />
              </div>
            </div>
            <div className='md:w-1/2'>
              <BlockTitle title='Why do you need FinTech app development services?' />

              <div>
                <p className='text-base leading-[1.4] font-normal md:text-xl'>
                  Our custom FinTech development services can cover all unique needs and
                  business goals you set. This may help your business providing the
                  following:
                </p>

                <ul className='mt-[16px] flex list-inside flex-col gap-y-[12px] text-base leading-[1.4] font-normal md:mt-5 md:gap-y-5 md:text-xl'>
                  <li className='list-disc'>More opportunities for funding;</li>
                  <li className='list-disc'>
                    Increased customer base and target audience;
                  </li>
                  <li className='list-disc'>
                    Enhanced efficiency of business processes;
                  </li>
                  <li className='list-disc'>Hassle-free and quick payments;</li>
                  <li className='list-disc'>Higher retention and engagement rate;</li>
                  <li className='list-disc'>Better risk management.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <ServicesExpertise
        title='Our FinTech software development expertise'
        services={fintechExpertise}
      />

      <Banner
        img_src='/services/fintech-app-development-services/banner-1.png'
        title='Let us know more about your project!'
        subtitle='Since a development partner can reduce time, cost and stress during the whole process, taking on board a trusted team is the key to success behind any idea. If you set your goals or just come up with a concept, we are here to learn more about your project.'
        btn_title='Let’s get started!'
        btn_link='/contact-us'
        contentClasses='!max-w-none flex flex-col items-center'
        titleClasses='max-w-[900px] text-center'
        subtitleClasses='max-w-[900px] text-center mb-10'
      />

      <OurExpertise title='Must-have features of FinTech apps' items={mustHaveFeatures} />

      <Reasons
        title='Our approach o Finance app development'
        items={[
          {
            title: 'Research',
            subtitle:
              'Every project with our team starts from the research on the market, competitors and identifying target audience.',
            color: '#b6dfec',
          },
          {
            title: 'UX / UI Design',
            subtitle:
              'Since the success mainly depends on the user’s engagement, our UX/UI team creates the most satisfying design according to collected data.',
            color: '#ffa1ce',
          },
          {
            title: 'Fintech app development',
            subtitle:
              'Once you approve the design, we start the development with only skilled professionals. We use the most common and efficient protocols and ensure stable code every time.',
            color: '#cfffd1',
          },
          {
            title: 'QA & Testing',
            subtitle:
              'We pride ourselves with only efficient results and absence of bugs, so testing is essential and involves every scenario for higher safety.',
            color: '#56f2e9',
          },
          {
            title: 'Launch',
            subtitle:
              'Just like our slogan says, we take your project from the idea till launch. So at the final stages of working with our team your app will be ready on the marketplace.',
            color: '#263ab7',
          },
          {
            title: 'Support & Maintenance',
            subtitle:
              'We care about every client’s success, so after the launch we monitor the app’s progress, collect user’s feedback and improve the app’s functionality.',
            color: '#ffc774',
          },
        ]}
      />

      <OurExpertise
        title='Why choose Interexy as a FinTech software development company'
        items={chooseInterexy}
        btn_title='Show me'
      />

      <OurPortfolio title='Find the perfect Project' cases={cases} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />

      <FAQ title='FAQ' items={faq} />
    </>
  );
}
