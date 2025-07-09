import { Container } from '@/components/layout';

export const HeroPolicy = ({
  title,
  last_updated,
}: {
  title: string;
  last_updated: LastUpdated;
}) => {
  return (
    <section className='mb-[60px] bg-[#f0f1f7]'>
      <Container>
        <div className='pt-[169px] pb-[80px] lg:pt-[190px] lg:pb-[174px]'>
          <div className='flex w-full flex-col items-center justify-center gap-y-5 text-center'>
            <h1 className='text-[32px] leading-[1.3] font-extrabold md:text-[64px]'>
              {title}
            </h1>
            <p className='text-sm leading-[1.4] font-normal md:text-2xl'>
              Last updated: {last_updated}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
