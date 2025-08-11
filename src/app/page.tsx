import {
  Blog,
  Expertise,
  HeroImg,
  InfiniteImageScroll,
  OurAchievements,
  OurClients,
  OurPortfolio,
  OurProducts,
  OurServices,
  OurSuccess,
  OurTeam,
  Reviews,
  TechStack,
} from '@/components/blocks';
import { blogPosts } from '@/components/blocks/blog/blog-posts';
import { expertise } from '@/components/blocks/expertise/expertise-list';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { cases } from '@/components/blocks/our-portfolio/cases-list';
import { products } from '@/components/blocks/our-products/slide-data';
import { expertiseByYears } from '@/components/blocks/our-success/expertiseByYears';
import { reviews } from '@/components/blocks/reviews/reviews-list';
import { techStack } from '@/components/blocks/tech-stack/tech-stack-list';
import { ContactForm } from '@/components/contact-form/ContactForm';
import { Container, Footer, Header } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { Overlay } from '@/components/overlay/Overlay';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interexy: Software Development Company',
  description:
    'Transform your business with Interexy, a top custom software development company. Contact us today to leverage our expert app development services',
  authors: [
    {
      name: 'Stan Sakharchuk',
      url: '',
    },
  ],
  openGraph: {
    type: 'website',
    title: 'Interexy: Software Development Company',
    description:
      'Transform your business with Interexy, a top custom software development company. Contact us today to leverage our expert app development services',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blocks/hero/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'Interexy Hero Image',
      },
    ],
    siteName: 'Interexy | Mobile applications',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Interexy: Software Development Company',
    description:
      'Transform your business with Interexy, a top custom software development company. Contact us today to leverage our expert app development services',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blocks/hero/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'Interexy Hero Image',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroImg
          img_src='/blocks/hero/hero.webp'
          sectionClassName='pt-[260px] pb-[20px] md:pt-[150px] md:pb-[50px]'
        >
          <>
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
          </>
        </HeroImg>

        <InfiniteImageScroll
          images={images}
          second={50}
          imageWidth={100}
          imageHeight={0}
          spacing={0}
          direction='left'
          className='mb-[40px] md:mb-[60px] xl:mb-[80px]'
        />

        <OurAchievements />

        <OurSuccess
          title='Expertise backed by years'
          subtitle='Our success'
          text='Interexy is a custom software development and IT consulting company founded in 2017 and headquartered in Miami. We boast extensive expertise in Healthcare,Blockchain, FinTech, AI, ML, EdTech, E-Commerce, etc. We deliver innovativesolutions for giants like SAP, PwC, Pampers, General Electric, Next Street &fastest-growing companies across industries.'
          expertise={expertiseByYears}
        />

        <OurServices />

        <TechStack
          title='Technologies we use'
          subtitle='Tech stack'
          techStack={techStack}
        />

        <Expertise
          title='Areas of expertise'
          subtitle='Expertise'
          expertise={expertise}
        />

        <OurProducts
          title='Explore our recent mobile app designs'
          subtitle='Our products'
          products={products}
        />

        <OurClients title='We are trusted' subtitle='Our clients' />

        <Reviews title='Highly satisfied clients' subtitle='Reviews' reviews={reviews} />

        <OurTeam />

        <OurPortfolio
          title='Software that helps you succeed'
          subtitle='Our portfolio'
          cases={cases}
          titleChildren={
            <p className='text-secondary text-base leading-[1.4] font-medium md:text-lg'>
              Our user-centered design encourages productivity and boosts revenue.
            </p>
          }
        />

        <Blog title='Our latest insights' subtitle='Blog' blogPosts={blogPosts} />
      </main>

      <Footer>
        <ContactForm />
      </Footer>
    </>
  );
}
