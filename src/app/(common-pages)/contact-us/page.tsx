import {
  Banner,
  HeroImg,
  InfiniteImageScroll,
  OurClients,
  OurLocation,
  OurSuccessWithSlider,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { HubspotMeeting } from '@/components/hubspot-meeteng/HubspotMeeting';
import { Container } from '@/components/layout';
import { Platforms } from '@/components/layout/footer/components/Platforms';
import { InterexyLink } from '@/components/link/InterexyLink';
import { Overlay } from '@/components/overlay/Overlay';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'contact-us';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function ContactUs() {
  return (
    <>
      <HeroImg
        img_src='/contact-us/contact-us-bg.webp'
        sectionClassName='pt-0 lg:pt-[70px] pb-[30px] lg:pb-[118px]'
      >
        <Overlay />

        <Container className='relative z-2'>
          <div className='flex flex-col text-white lg:flex-row lg:justify-between'>
            <div className='flex max-w-[780px] flex-col gap-y-[25px] md:gap-y-10'>
              <h1 className='pt-[121px] text-[34px] leading-[1.1] font-extrabold md:text-[64px]'>
                Contact Interexy
              </h1>
              <p>Digitize your business through cutting-edge app development solutions</p>

              <div className='flex gap-x-4'>
                <InterexyLink
                  href='#contact-form'
                  text='Let’s discuss'
                  variant='primary'
                  size='md'
                />
                <InterexyLink href='' text='Get a quote' variant='outline' size='md' />
              </div>

              <hr className='opacity-20' />

              <Platforms containerClassName='flex flex-row lg:flex-col justify-around lg:justify-between gap-y-[30px]' />
            </div>
            <div className='min-h-[760px] max-w-[780px] self-center pt-10'>
              <HubspotMeeting />
            </div>
          </div>
        </Container>
      </HeroImg>

      <InfiniteImageScroll
        images={images}
        second={50}
        imageWidth={100}
        imageHeight={0}
        spacing={0}
        direction='left'
      />

      <OurSuccessWithSlider />

      <OurClients title='We are trusted' subtitle='Our clients' />

      <OurLocation />

      <Banner
        title='Do you already have specific requirements for your solution?'
        link='#hubspot'
        link_title='Get a quote'
      />
    </>
  );
}
