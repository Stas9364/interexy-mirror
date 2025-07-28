import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { cn } from '@/lib/utils';

export const Banner = ({
  img_src,
  title,
  subtitle,
  btn_title,
  btn_link,
  contentClasses,
  titleClasses,
  subtitleClasses,
}: {
  img_src: string;
  title: string;
  subtitle?: string;
  btn_title: string;
  btn_link: string;
  contentClasses?: string;
  titleClasses?: string;
  subtitleClasses?: string;
}) => {
  return (
    <Section>
      <Container className='relative'>
        <div
          className='flex min-h-[480px] items-center rounded-[80px] bg-cover bg-no-repeat px-10 py-[50px] md:min-h-[588px] md:px-[80px]'
          style={{ backgroundImage: `url(${img_src})` }}
        >
          <div className={cn('w-full max-w-[630px]', contentClasses)}>
            <h2
              className={cn(
                'mb-10 text-4xl leading-[1.2] font-bold text-white md:text-[72px]',
                titleClasses,
              )}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={cn(
                  'mb-3 max-w-[505px] text-lg leading-[1.4] font-normal text-white md:text-xl',
                  subtitleClasses,
                )}
              >
                {subtitle}
              </p>
            )}
            <InterexyLink
              href={btn_link}
              text={btn_title}
              variant='primary'
              className='max-w-[374px]'
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
