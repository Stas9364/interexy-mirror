import Link from 'next/link';
import Image from 'next/image';
import { ceo } from './ceo-data';

export const CEO = () => {
  return (
    <div className='flex flex-col gap-x-4 gap-y-[25px] md:flex-row lg:gap-x-[30px]'>
      {ceo.map(({ name, position, description, image, link }, idx) => (
        <div
          key={name}
          className={`flex flex-col-reverse ${idx % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}
        >
          <div className='relative w-full bg-[#F0F1F7] px-[15px] py-[25px] md:px-[25px] md:py-[30px] xl:w-1/2'>
            <p className='mb-[5px] text-xl leading-[1.4] font-medium md:mb-[10px] 2xl:text-[32px]'>
              {name}
            </p>
            <p className='text-secondary mb-4 text-base leading-[1.4] font-normal 2xl:text-2xl'>
              {position}
            </p>
            <p className='text-secondary pb-5 text-sm leading-[1.4] font-normal xl:mb-[55px] 2xl:text-lg'>
              {description}
            </p>
            <Link
              href={link}
              className='md:inherit absolute top-[25px] right-[15px] xl:absolute xl:top-auto xl:bottom-[30px] xl:left-[25px]'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={'/social-networks/in.svg'}
                alt='Linkedin'
                width={40}
                height={54}
              />
            </Link>
          </div>
          <div className='h-[330px] w-full bg-[#E0E2ED] sm:pt-10 xl:h-auto xl:w-1/2'>
            <Image
              src={image}
              alt={name}
              width={750}
              height={0}
              sizes='50vw'
              className='h-full object-contain object-bottom xl:object-cover'
            />
          </div>
        </div>
      ))}
    </div>
  );
};
