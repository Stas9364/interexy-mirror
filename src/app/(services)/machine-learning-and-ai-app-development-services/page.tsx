import { BlockTitle } from '@/components/block-title/BlockTitle';
import {
  Blog,
  InfiniteImageScroll,
  OurClients,
  OurExpertise,
  OurPortfolio,
  OurSuccess,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import {
  Banner,
  CoreTechnologies,
  HeroService,
  Reviews,
} from '@/components/service-blocks';

import {
  blogPosts,
  cases,
  coreTechnologies,
  goodSolution,
  industries,
  ml_ai,
  reviews,
} from './data';

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

      <Section>
        <Container>
          <BlockTitle
            title={'Machine Learning & Artificial Intelligence Mobile App Development'}
          />

          <div className='flex grid-cols-3 flex-col gap-x-4 gap-y-5 md:grid xl:gap-x-6'>
            {ml_ai.map(({ subtitle, title, bg_color }) => (
              <div
                key={title}
                className='flex flex-col gap-y-5 rounded-[20px] bg-[#f6f6fd] p-[15px] lg:p-[30px]'
                style={{ backgroundColor: bg_color }}
              >
                <p className='text-xl leading-[1.2] font-bold xl:text-[22px]'>{title}</p>
                <p className='text-base leading-[1.4] font-light xl:mt-auto xl:text-lg'>
                  {subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className='flex justify-center'>
            <InterexyLink
              href='/contact-us'
              text='Discuss your Project'
              variant='primary'
              className='mt-10 w-[275px]'
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockTitle title='Why Artificial intelligence and Machine learning app development services is a good solutions' />

          <div className='flex grid-cols-2 flex-col gap-x-6 gap-y-[10px] md:grid md:gap-y-10 xl:gap-y-[80px]'>
            {goodSolution.map(({ color, title }, idx) => (
              <div
                key={idx}
                className='flex items-center gap-x-5 border-b border-[#fce2fe] pb-5 xl:gap-x-8'
              >
                <div
                  className={`flex min-h-[95px] min-w-[95px] items-center justify-center rounded-[20px]`}
                  style={{ backgroundColor: color }}
                >
                  <span className='flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#ffffffe6] text-xl shadow-[-3px_0_11px_-4px_#292f75]'>
                    0{++idx}
                  </span>
                </div>
                <p className='text-xl leading-[1.4] font-bold lg:text-2xl xl:text-[28px]'>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

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

      <CoreTechnologies technologies={coreTechnologies} />

      <Reviews reviews={reviews} />
    </>
  );
}
