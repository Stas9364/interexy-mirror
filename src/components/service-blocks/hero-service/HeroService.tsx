import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { cn } from '@/lib/utils';
import Image from 'next/image';
export const HeroService = ({
  title,
  subtitle,
  btn_link,
  btn_text,
  src,
  sectionClassName,
}: {
  title: string;
  subtitle: string;
  btn_link: string;
  btn_text: string;
  src: string;
  sectionClassName?: string;
}) => {
  return (
    <Section className={cn(`pt-[100px]`, sectionClassName)}>
      <Container>
        <div className='flex flex-col-reverse lg:flex-row'>
          <div>
            <h1 className='mb-5 max-w-[780px] text-4xl leading-[1.2] font-extrabold md:mb-10 md:text-5xl xl:text-[64px]'>
              {title}
            </h1>
            <p className='mb-5 max-w-[680px] text-lg leading-[1.4] font-normal md:mb-10 xl:text-xl'>
              {subtitle}
            </p>

            <InterexyLink
              href={btn_link}
              text={btn_text}
              variant='primary'
              className='w-[205px]'
            />
          </div>

          <div className='relative mx-auto aspect-[700/550] h-auto w-full max-w-[700px] lg:mx-0'>
            <Image
              src={src}
              alt={title}
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 700px'
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
