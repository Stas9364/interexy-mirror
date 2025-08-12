import { BlockTitle } from '@/components/block-title/BlockTitle';
import { OurExpertise, OurPortfolio } from '@/components/blocks';
import { Container, Section } from '@/components/layout';
import {
  AppLooksLike,
  FullCycleDevelopment,
  HeroService,
  Reviews,
  Steps,
} from '@/components/service-blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cases } from '../blockchain-app-development-services/data';
import { advantages, ensure, mobileAppSteps, oneRover } from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'delivery-app-development-services';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function DeliveryAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Delivery App Development Services'}
        subtitle={
          'Become a hero in the delivery industry with a mobile app optimized for speed, choice, and personalized customer experience.'
        }
        btn_link={'/contact-us'}
        btn_text={"Let's do this"}
        src='/services/delivery-app-development-services/hero.png'
        imgClasses='!object-contain'
      />
      <Section>
        <Container>
          <BlockTitle title='The pandemic has more than doubled food delivery app business'>
            <p className='pt-5 text-center text-base leading-[1.4] font-normal md:pt-[30px]'>
              Online food delivery industry on the restaurant market in the US due to the
              COVID-19 from 2020 to 2025
            </p>

            <p className='text-accent pt-5 text-center text-base leading-[1.4] font-medium md:pt-10'>
              <Link
                href='https://interexy.com/blog/'
                className='inline-flex items-center gap-x-2'
              >
                Adapt your delivery service with a functional app in our transformed world
                <MoveRight />
              </Link>
            </p>
          </BlockTitle>

          <div className='relative mx-auto aspect-[958/380] h-auto w-full max-w-[958px]'>
            <Image
              src={'/services/delivery-app-development-services/statistic.png'}
              alt={'statistic'}
              sizes='(max-width: 1024px) 100vw, 958px'
              fill
              className='object-contain'
            />
          </div>

          <div className='mt-5 flex justify-center md:mt-10'>
            <p>
              Source: <span className='text-accent'>Statista</span>
            </p>
          </div>
        </Container>
      </Section>
      <Steps
        title='Mobile app part and parcel for a delivery business'
        blockTitleContent={
          <p className='text-white'>
            Reach local & global levels with an easy-to-use innovative mobile application.
          </p>
        }
        steps={mobileAppSteps}
      />
      <OurExpertise
        title='Business verticals that can take advantage of digitization'
        items={advantages}
      />
      <OurExpertise title='We ensure:' items={ensure} />
      <AppLooksLike
        title='What the application looks like'
        imgWrapperClasses='h-[433px] w-[200px] min-w-[200px]'
        forCustomers={[
          '/services/delivery-app-development-services/for-customer-1.png',
          '/services/delivery-app-development-services/for-customer-2.png',
          '/services/delivery-app-development-services/for-customer-3.png',
          '/services/delivery-app-development-services/for-customer-4.png',
        ]}
        forPartners={[
          '/services/delivery-app-development-services/for-partner-1.png',
          '/services/delivery-app-development-services/for-partner-2.png',
          '/services/delivery-app-development-services/for-partner-3.png',
          '/services/delivery-app-development-services/for-partner-4.png',
        ]}
      />

      <FullCycleDevelopment title='See our customers’ evolution' items={oneRover} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />

      <OurPortfolio title='See our experience' cases={cases} />
    </>
  );
}
