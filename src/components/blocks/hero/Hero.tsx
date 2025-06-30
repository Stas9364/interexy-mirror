import { Container } from '@/components/layout/container/Container';
import { InterexyLink } from '@/components/link/InterexyLink';
import { Overlay } from '@/components/overlay/Overlay';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='relative h-full min-h-[600px] w-full overflow-hidden pt-[260px] pb-[20px] md:pt-[150px] md:pb-[50px]'>
      <div className='absolute top-0 left-0 z-0 h-full w-full'>
        <Image
          className='block h-full w-full object-cover object-[35%_center] md:object-center'
          src={'/blocks/hero/hero.webp'}
          alt={'Hero'}
          width={2560}
          height={1118}
        />
      </div>

      <Overlay />

      <Container className='relative z-2'>
        <div className='flex w-full flex-col items-start md:items-end'>
          <h1
            role='heading'
            className='mb-4 text-left text-[28px] leading-[130%] font-extrabold text-white md:mb-6 md:max-w-[597px] md:text-right md:text-5xl lg:text-6xl'
          >
            Build AI-Powered Apps Faster — with Top-Rated Teams in 10 Days
          </h1>

          <ul className='ml-6 list-disc text-lg leading-[140%] font-medium text-white md:ml-0'>
            <li>120+ 5★ reviews on Clutch & Upwork</li>
            <li>Trusted by Fortune 500</li>
            <li>MVPs delivered in 3–4 weeks</li>
          </ul>

          <InterexyLink
            href='/contact-us'
            text=' Book Free Strategy Call'
            variant='primary'
            className='mt-6 md:mt-10'
          />

          <p className='mt-3 text-sm leading-[140%] font-normal text-white'>
            Avg. reply in 1 hour · No strings attached
          </p>
        </div>
      </Container>
    </section>
  );
};
