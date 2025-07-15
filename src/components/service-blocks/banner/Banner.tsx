import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';

export const Banner = ({
  img_src,
  title,
  subtitle,
  btn_title,
  btn_link,
}: {
  img_src: string;
  title: string;
  subtitle: string;
  btn_title: string;
  btn_link: string;
}) => {
  return (
    <Section>
      <Container className='relative'>
        <div
          className='flex min-h-[480px] items-center rounded-[80px] bg-cover bg-no-repeat px-10 py-[50px] md:min-h-[588px] md:px-[80px]'
          style={{ backgroundImage: `url(${img_src})` }}
        >
          <div className='w-full max-w-[630px]'>
            <h2 className='mb-10 text-4xl leading-[1.2] font-bold text-white md:text-[72px]'>
              {title}
            </h2>
            <p className='mb-3 max-w-[505px] text-lg leading-[1.4] font-normal text-white md:text-xl'>
              {subtitle}
            </p>
            <InterexyLink
              href={btn_link}
              text={btn_title}
              variant='primary'
              className='w-full max-w-[374px]'
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
