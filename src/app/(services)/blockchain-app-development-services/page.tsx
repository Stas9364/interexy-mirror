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
  FAQ,
  HeroService,
  HireDevelopers,
  Info,
  Reasons,
  Reviews,
} from '@/components/service-blocks';
import { reviews } from '@/components/service-blocks/reviews/reviews-data';
import type { Metadata } from 'next';
import { blogPosts, cases, customDevelopmentServices, faq, industries } from './data';

export const metadata: Metadata = {
  title: 'Blockchain App Development Company | Interexy',
  description:
    'Your reliable partner in blockchain application development services. Upgrade or build your custom blockchain solution for Android, iOS, web',
};

export default function BlockchainAppDevelopmentServices() {
  return (
    <>
      <HeroService
        title={'Blockchain App Development Services'}
        subtitle={
          'We develop and design custom blockchain solutions using the latest technologies and by partnering with platforms, such as Sandbox. We are known as the industry’s experts, and our blockchain app development company can build a decentralized platform for NFTs, bridges, DEX, tokens, Metaverse and dApps.'
        }
        btn_link={'/contact-us'}
        btn_text={'Get Stared'}
        src='/services/blockchain-app-development-services/blockchain-hero.webp'
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
        title='Blockchain app development company in numbers'
        text='Blockchain app developers at Interexy have a strong track record for blockchain application development services for industries such as Healthcare, FInTech, AI/ML, IoMT. We create Blockchain, Web3 apps, and digital products for tech enterprises and startups.'
        expertise={[
          { number: '80', title: 'Qualified blockchain app developers' },
          { number: '50', title: 'Products built' },
          { number: '15', title: 'Blockchain products in progress' },
          { number: '250', title: 'Combined years of experience' },
        ]}
      />
      <OurClients title='Trusted by' />
      <Banner
        img_src='/services/blockchain-app-development-services/banner-1.png'
        title='How much does blockchain app development cost?'
        subtitle='Receive accurate costs on blockchain app development based on all applicable factors.'
        btn_title='Contact us'
        btn_link='/contact-us'
      />
      <Info
        title='Blockchain technology is international trend #1'
        items={[
          {
            subtitle:
              'The annual growth rate of the on-demand sphere revenue is expected to grow about 32% consistently over the next 4 years, which should result in a market volume of around $11 billion by 2027.',
            title: '11 billion dollars',
            bg_color: '#f6f6fd',
          },
          {
            subtitle:
              'Blockchain wallet users were recorded at over 85 million by the start of 2023, according to Blockchain.com.',
            title: 'Over 85 million users',
            bg_color: '#f2f2f2',
          },
          {
            subtitle:
              'At the World Economic Forum, blockchain was recognized as one of seven global trends that will greatly impact society within the next decade.',
            title: 'Top 7 Global Trends',
            bg_color: '#f0ffcf',
          },
        ]}
      />
      <Reasons
        title='6 Reasons Why You Need to Leverage Our Technical Expertise for Blockchain Development'
        items={[
          {
            title: 'To save money through control',
            subtitle:
              'Due to the increase of hacker attacks, it is cheaper to invest in blockchain technology today than to deal with the financial consequences of a possible data leak.',
            color: '#b6dfec',
          },
          {
            title: 'To keep data immutability',
            subtitle:
              'Decentralized data and complicated automated encryption provide reliability, ensuring that if one block breaks, your data still remains in place.',
            color: '#ffa1ce',
          },
          {
            title: 'To stay anonymous and save',
            subtitle:
              'Joint real estate ownership, trading, or making cross-border payments in complete anonymity is another bonus that blockchain technology offers.',
            color: '#cfffd1',
          },
          {
            title: 'To monitor quality and provide transparency',
            subtitle:
              'Blockchain technology allows watching the logistics of goods in real-time, offers a retention schedule and delivery information, and reduces the number of counterfeits.',
            color: '#cfddff',
          },
          {
            title: 'To Reduce Human Errors and Accelerate Processes',
            subtitle:
              'Due to the real-time technology, IoT operating systems already work in state security and civil aviation departments. This leaves difficult decisions to the machine.',
            color: '#f0ffcf',
          },
          {
            title: 'To decrease the level of bureaucracy',
            subtitle:
              'Signing contracts, financial transactions, and issuing diplomas and passports – all these can be performed online with 100% security with the help of blockchain technology.',
            color: '#cdbef6',
          },
        ]}
      />

      <OurExpertise
        title='Custom Blockchain App Development Services'
        items={customDevelopmentServices}
      />

      <Banner
        img_src='/services/blockchain-app-development-services/banner-2.jpg'
        title='Hire a Blockchain App Developer'
        subtitle='Let us identify the best specialist for you according to the project requirements so you can start the project within 5 business days!'
        btn_title='Book a call'
        btn_link='/contact-us'
      />

      <HireDevelopers
        title='Hire a Blockchain App Developer'
        items={[
          {
            name: 'Alex P.',
            description:
              'Blockchain app developer with 5.5+ years of experience. Fast learner, keen on new technologies. Team worker who believes in collaboration to achieve higher goals. Dynamic and proactive with a “let’s get things done” mindset. I am a perfectionist who is passionate about my job and committed to offer my best every day. Customer-focused, I strive to understand both business and user needs.',
            techStack:
              'Solidity, Etherium, Web3, Hyperledger, Truffle, NFT, Uniswap SDK, Cosmos SDK, TRON, Smart Contracts',
          },
          {
            name: 'Yan L.',
            description:
              'Blockchain developer with 4+ years of experience. I have great analytical and problem-solving skills, and am always eager to provide my own independent view on the product in development to improve the final solution delivered to the end-users. Through an analytical approach, collaborative teamwork and a desire for constant learning and improvement we can do great things together!',
            techStack:
              'Solidity, Etherium, Web3, Hyperledger, ERC-20, NFT, Tron, EOS Contracts, Smart Contracts, Cosmos SDK',
          },
          {
            name: 'Ihar M.',
            description:
              'Blockchain/Frontend Developer with 6+ years of experience. Executive, attentive, responsible, sociable. I spend a lot of time studying and reading technical literature and articles. I bring strong problem-solving skills and the ability to work in a deadline-oriented environment. Purposeful and hard-working. I enjoy managing my time and organizing tasks to accomplish projects successfully.',
            techStack:
              'Solidity, Rust, React, Angular, Web3, Unit tests, Next.js, JavaScript, Typescript, HTML/CSS, Node.js, Nest.js, Express.js',
          },
          {
            name: 'Mikhail D.',
            description:
              'Blockchain developer with 5+ years of experience. I have great analytical and problem-solving skills, and I strive to share my thoughts on a project to see its thorough development, enhancing the process along the way. By joining various perspectives and showing consistent motivation to achieve our goals, we will set ourselves up for success.',
            techStack:
              'Solidity, Etherium, Web3, Hyperledger, ERC-20, NFT, Tron, EOS Contracts, JavaScript, Typescript, HTML/CSS',
          },
        ]}
      />
      <CoreTechnologies
        title='Core technologies used to build functional AI & ML mobile solutions'
        sectionClassName='bg-[#f7f8fc]'
        technologies={[
          {
            src: '/services/blockchain-app-development-services/BNB.svg',
            alt: 'BNB',
            width: 322,
            height: 200,
          },
          {
            src: '/services/blockchain-app-development-services/Solana.svg',
            alt: 'Tesseract OCR',
            width: 322,
            height: 200,
          },
          {
            src: '/services/blockchain-app-development-services/Avalanche.svg',
            alt: 'Avalance',
            width: 322,
            height: 200,
          },
          {
            src: '/services/blockchain-app-development-services/Chainlink.svg',
            alt: 'Chainlink',
            width: 322,
            height: 200,
          },
        ]}
      />
      <OurPortfolio title='See our experience' cases={cases} />
      <Banner
        img_src='/services/blockchain-app-development-services/banner-3.png'
        title='Discuss a project'
        subtitle='Let’s discuss your next blockchain project through a free consultation with our experts'
        btn_title='Get Expert Advice'
        btn_link='/contact-us'
      />
      <OurExpertise
        title='Industries We Transformed Through Blockchain App Development Services'
        items={industries}
      />

      <Blog title='AI Business Ideas for Entrepreneurs' blogPosts={blogPosts} />

      <Reviews title='Highly Satisfied Clients' reviews={reviews} />

      <FAQ title='Blockchain App Development FAQ' items={faq} />
    </>
  );
}
