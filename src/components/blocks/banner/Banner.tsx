import { Container } from '@/components/layout';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

export const Banner = ({
  title,
  subtitle,
  link,
  link_title,
}: {
  title: string;
  subtitle?: string;
  link: string;
  link_title: string;
}) => {
  return (
    <section className='mb-[100px] bg-[#6579F440]'>
      <Container>
        <div className='flex flex-col justify-between gap-y-6 py-[30px] md:items-center lg:flex-row lg:py-[50px]'>
          <div className='flex flex-col gap-y-[15px]'>
            <p className='w-full max-w-[780px] text-xl leading-[1.4] font-medium md:text-[32px] md:text-balance lg:text-[32px]'>
              {title}
            </p>

            {subtitle && (
              <p className='w-full max-w-[750px] text-base leading-[1.4] font-medium md:text-xl'>
                {subtitle}
              </p>
            )}
          </div>

          <Link
            className='bg-btn hover:bg-btn-hover inline-flex items-center justify-center gap-x-5 self-start rounded-[5px] px-6 py-4 text-lg leading-[1.4] font-bold text-white duration-200 md:self-center md:px-[35px] md:py-[25px] lg:h-[90px] lg:text-2xl'
            href={link}
          >
            {link_title}
            <MoveUpRight
              size={40}
              color='#fff'
              strokeWidth={1}
              className='h-[30px] w-[30px] md:h-10 md:w-10'
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};
