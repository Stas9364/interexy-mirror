import { Container } from '@/components/layout';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

export const Banner = ({
  title,
  link,
  link_title,
}: {
  title: string;
  link: string;
  link_title: string;
}) => {
  return (
    <section className='mb-[100px] bg-[#6579F440]'>
      <Container>
        <div className='flex flex-col justify-between gap-y-6 py-[30px] lg:flex-row lg:py-[50px]'>
          <p className='w-full max-w-[780px] text-xl leading-[1.4] font-medium text-balance lg:text-[32px]'>
            {title}
          </p>

          <Link
            className='bg-btn hover:bg-btn-hover h-[70px] flex w-[264px] items-center justify-center gap-x-5 rounded-[5px] text-lg leading-[1.4] font-bold text-white duration-200 lg:h-[90px] lg:text-2xl'
            href={link}
          >
            {link_title}
            <MoveUpRight size={40} color='#fff' strokeWidth={1} />
          </Link>
        </div>
      </Container>
    </section>
  );
};
