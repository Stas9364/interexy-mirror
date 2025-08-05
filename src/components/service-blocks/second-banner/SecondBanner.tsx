import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const SecondBanner = ({
  imgSrc,
  title,
  description,
  buttonLink,
  buttonText,
  imgWrapperClasses,
}: {
  imgSrc: string;
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
  imgWrapperClasses?: string;
}) => {
  return (
    <Section
      className={`relative mb-[40px] bg-[#5067f4] pt-[75px] md:mb-[60px] xl:mb-[80px]`}
    >
      <div
        className={cn(
          'absolute top-0 right-0 hidden aspect-[510/510] h-auto w-full max-w-[510px] xl:block',
          imgWrapperClasses,
        )}
      >
        <Image src={imgSrc} alt={title} fill />
      </div>

      <Container>
        <div className='relative text-white'>
          <h2 className='mb-[44px] text-4xl leading-[1.4] font-bold md:text-[46px]'>
            {title}
          </h2>
          <p className='mb-[44px] w-full max-w-[841px] text-2xl leading-[2] md:text-[32px]'>
            {description}
          </p>
          <InterexyLink
            href={buttonLink}
            text={buttonText}
            variant={'outline'}
            className='h-[72px] text-xl'
          />
        </div>
      </Container>
    </Section>
  );
};
