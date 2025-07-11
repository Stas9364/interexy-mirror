import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Overlay } from '@/components/overlay/Overlay';
import Image from 'next/image';

type Item = {
  img: string;
  title: string;
  subtitle: string;
};
const process: Item[] = [
  {
    img: '/blocks/how-it-works/join.svg',
    title: 'Join as a referrer',
    subtitle: 'It’s free to join. Fill out the form, and we’ll get in touch.',
  },
  {
    img: '/blocks/how-it-works/start.svg',
    title: 'Start referring',
    subtitle:
      'You can refer a business owner or share their contact details. We’ll track their progress.',
  },
  {
    img: '/blocks/how-it-works/size.svg',
    title: 'Projects of all sizes',
    subtitle:
      'For larger projects (more than $100,000), you receive a $10,000 commission from project sales and recurring monthly payments of 10% of the revenue starting from the second month.',
  },
  {
    img: '/blocks/how-it-works/success.svg',
    title: 'Success',
    subtitle:
      'For projects under $100,000, upon a successful referral you receive monthly payments of 10% of the project revenue starting from the second month from the agreement date.',
  },
];

export const HowItWorks = () => {
  return (
    <section className='relative mb-[40px] bg-[url(/blocks/how-it-works/how-it-works.webp)] bg-cover bg-no-repeat md:mb-[60px] xl:mb-[80px]'>
      <Overlay className='bg-gradient-to-br from-[#294ac0]/[0.38] via-[#0a1c4a]/[0.2] to-[#1e172b]/[0.23]' />

      <div className='3xl:!pl-[calc((100%-1530px)/2)] relative z-2 pt-10 pr-0 pb-10 pl-[15px] md:pt-[100px] md:pb-[200px] xl:pl-[80px]'>
        <BlockTitle title='How Does it Work?' className='text-white' />

        <div className='flex overflow-x-auto bg-[#6579F499] backdrop-blur-[35px]'>
          {process.map(({ img, title, subtitle }) => (
            <div
              key={title}
              className='3xl:px-[30px] border-r border-white/10 px-5 py-10 select-none last:border-none'
            >
              <Image src={img} alt='join' width={45} height={45} className='mb-[25px]' />
              <p className='3xl:text-[28px] mb-5 border-b border-[#D6D6D6] pb-[10px] text-xl leading-[1.4] font-medium text-white md:text-2xl'>
                {title}
              </p>
              <p className='3xl:!w-[330px] w-[250px] text-sm leading-[1.4] font-normal text-white md:text-lg 2xl:w-[300px]'>
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
