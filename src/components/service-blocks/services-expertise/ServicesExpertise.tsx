import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';

type Service = {
  title: string;
  subtitle: string;
  img_src: string;
};

const services: Service[] = [
  {
    title: 'Digital Banking',
    subtitle:
      'Our Digital Banking services can play a significant role in enhancing your business processes, boost your company’s agility, and increase the efficiency of daily workflow.',
    img_src: '/services/fintech-app-development-services/didgital-banking.png',
  },
  {
    title: 'Wealth management and investment',
    subtitle:
      'We provide next-gen wealth management services that allow you to easily manage an affluent client’s wealth holistically by combining different financial services to address the needs of affluent customers.',
    img_src: '/services/fintech-app-development-services/investment.png',
  },
  {
    title: 'InsurTech',
    subtitle:
      'We use Insurtech technologies to help companies to streamline their operations, provide better services and save money. Most popular examples of these products are chatbots and smartphone apps.',
    img_src: '/services/fintech-app-development-services/insur.png',
  },
  {
    title: 'Online payments and transfering',
    subtitle:
      'With constant innovations in this fast-speed world, we guarantee that with our online payments and transferring solutions your business will grow every day.',
    img_src: '/services/fintech-app-development-services/transfering.png',
  },
  {
    title: 'Peer To Peer (P2P) Lending Platforms',
    subtitle:
      'Our P2P development services give both borrowers and lenders the platform with no mess and provide you with a great and stable income.',
    img_src: '/services/fintech-app-development-services/p2p.png',
  },
  {
    title: 'Personal Finance Management (PFM)',
    subtitle:
      'The PFM solutions we develop are integrated with core banking systems and fetch data from various bank accounts, credit cards and loans.',
    img_src: '/services/fintech-app-development-services/pfm.png',
  },
  {
    title: 'Cryptocurrency & Blockchain development',
    subtitle:
      'Since cryptocurrency and blockchain are the most popular industries today, our team develops the most efficient and brand-new solutions for specific needs and sphere’s requirements.',
    img_src: '/services/fintech-app-development-services/crypto.png',
  },
  {
    title: 'Digital wallet solutions',
    subtitle:
      'Whether you want to power a wallet with AI algorithms, online access or smart chatbots, we help create feature-rich digital wallets, boost customer loyalty, ensure safety and keep clients engaged at every stage of their interaction with a bank.',
    img_src: '/services/fintech-app-development-services/digital.png',
  },
];

export const ServicesExpertise = () => {
  return (
    <Section>
      <Container>
        <BlockTitle title='Our FinTech software development expertise' />

        <div className='flex flex-col gap-y-[55px]'>
          {services.map(({ title, subtitle, img_src }, idx) => (
            <div
              key={title}
              className={`flex flex-col items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className='md:w-1/2'>
                <div className='flex w-full flex-col gap-y-8 rounded-[20px] bg-[#a8bdf61a] px-8 py-6 md:max-w-[610px] lg:px-[67px] lg:py-[56px]'>
                  <p className='text-4xl leading-[1.4] font-bold'>{title}</p>
                  <p className='text-lg leading-[1.4] font-light'>{subtitle}</p>
                </div>
              </div>
              <div className='h-auto w-full md:w-1/2'>
                <div className='relative mx-auto aspect-[610/610] h-auto w-full max-w-[610px]'>
                  <Image
                    src={img_src}
                    alt={title}
                    fill
                    className='object-contain'
                    sizes='(max-width: 1024px) 100vw, 610px'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
