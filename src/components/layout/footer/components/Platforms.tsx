import Link from 'next/link';
import Image from 'next/image';
import { platformsData } from '../data/platforms-data';

export const Platforms = () => {
  return (
    <div className='flex justify-around'>
      {platformsData.map(({ logo_src, link, star_src, reviews_number, alt }) => {
        return (
          <div
            key={logo_src}
            className='flex flex-col items-center gap-x-1 sm:flex-row md:gap-x-4'
          >
            {link ? (
              <Link href={link}>
                <Image
                  alt={alt}
                  src={logo_src}
                  width={100}
                  height={31}
                  className='h-[31px] w-[73px] md:h-[31px] md:w-[100px]'
                />
              </Link>
            ) : (
              <Image
                alt={alt}
                src={logo_src}
                width={100}
                height={31}
                className='h-[31px] w-[73px] md:h-[31px] md:w-[100px]'
              />
            )}
            <div className='flex flex-col items-center gap-x-3 rounded-[5px] bg-[#FFFFFF1A] px-5 py-2 md:flex-row'>
              <div className='flex gap-x-[3.5px]'>
                {Array.from({ length: 5 }, (_, i) => (
                  <Image key={i} alt='star' src={star_src} width={17} height={17} />
                ))}
              </div>

              <hr className='hidden h-4 w-[1px] border border-l-[#fff] opacity-20 md:block' />

              <div className='text-base leading-[140%] font-normal'>{reviews_number}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
