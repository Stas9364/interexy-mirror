import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import Image from 'next/image';
export const HeroService = ({
  title,
  subtitle,
  btn_link,
  btn_text,
}: {
  title: string;
  subtitle: string;
  btn_link: string;
  btn_text: string;
}) => {
  return (
    <Section className='pt-[100px] !pb-0'>
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

          <div className='relative h-[550px] md:w-[700px]'>
            <Image
              src={'/services/machine-learning-and-ai/ai-hero-img.png'}
              alt='AI and ML'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
