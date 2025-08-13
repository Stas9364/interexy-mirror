import Link from 'next/link';
import Image from 'next/image';
import { platformsData } from '../data/platforms-data';
import { cn } from '@/lib/utils';
import { ClutchWidget } from '@/components/clutch-widget/ClutchWidget';

export const Platforms = ({
  containerClassName,
  platformClassName,
}: {
  containerClassName?: string;
  platformClassName?: string;
}) => {
  return (
    <div className={containerClassName}>
      <ClutchWidget companyId={'802189'} widgetType={14} height={50} nofollow={true} />

      {platformsData.map(({ logo_src, link, star_src, reviews_number, alt }) => {
        return (
          <div
            key={logo_src}
            className={cn(
              'flex flex-row items-center gap-x-1 md:gap-x-4',
              platformClassName,
            )}
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
            <div className='flex items-center gap-x-3 rounded-[5px] bg-[#FFFFFF1A] px-5 py-2 md:flex-row'>
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
