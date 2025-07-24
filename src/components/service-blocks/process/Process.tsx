import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';

export const Process = () => {
  return (
    <Section className={`relative py-[60px]`}>
      <Container>
        <BlockTitle title='How we work: our process' />

        <div className='relative flex lg:justify-center'>
          <picture>
            <source
              srcSet='/services/taxi-app-development-services/process-bg-mob.webp'
              media='(max-width: 1023px)'
            />
            <img
              src={'/services/taxi-app-development-services/process-bg-pc.webp'}
              className=''
              alt='Process stage'
              loading='lazy'
            />
          </picture>

          <div
            className={`absolute top-[5%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium text-[#22e742] lg:top-[15%] lg:left-0 lg:w-[200px]`}
          >
            <div className={`mr-[10px] font-bold`}>01.</div>
            <div className='text'>Creating an app strategy</div>
          </div>
          <div
            className={`absolute top-[20%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:bottom-[107%] before:left-[-15%] before:hidden before:h-[56px] before:w-[131px] before:bg-[url(/services/taxi-app-development-services/process-right.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-auto lg:right-auto lg:bottom-[25%] lg:left-[10%] lg:w-[200px] lg:before:block xl:before:left-[4%]`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>02.</div>
            <div className='text'>UX/UI design development</div>
          </div>
          <div
            className={`absolute top-[35%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:top-[65%] before:left-[4%] before:hidden before:h-[50px] before:w-[2px] before:bg-[url(/services/taxi-app-development-services/process-line.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-[30%] lg:right-auto lg:bottom-auto lg:left-[34%] lg:w-[200px] lg:before:block`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>03.</div>
            <div className='text'>Preparing the app’s architecture</div>
          </div>
          <div
            className={`absolute top-[48%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:bottom-[107%] before:left-[4%] before:hidden before:h-[50px] before:w-[2px] before:bg-[url(/services/taxi-app-development-services/process-line.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-auto lg:right-auto lg:bottom-[21%] lg:left-[50%] lg:w-[200px] lg:before:block`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>04.</div>
            <div className='text'>Creating the data and API structure </div>
          </div>
          <div
            className={`lg-right-auto absolute bottom-[35%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:top-[135%] before:left-[4%] before:hidden before:h-[50px] before:w-[2px] before:bg-[url(/services/taxi-app-development-services/process-line.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-[30%] lg:bottom-auto lg:left-[63%] lg:w-[200px] lg:before:block`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>05.</div>
            <div className='text'>Making up a UI</div>
          </div>
          <div
            className={`absolute bottom-[20%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:right-[10%] before:bottom-[100%] before:hidden before:h-[42px] before:w-[122px] before:bg-[url(/services/taxi-app-development-services/process-left.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-[64%] lg:right-[-4%] lg:left-auto lg:w-[200px] lg:before:block xl:before:right-[95%]`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>06.</div>
            <div className='text'>Creating a connection of API and UI</div>
          </div>
          <div
            className={`absolute bottom-[5%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium text-[#93278c] max-md:w-full lg:right-[-4%] lg:left-auto lg:w-[200px]`}
          >
            <div className={`mr-[10px] font-bold`}>07.</div>
            <div className='text'>Conducting in-depth testing and deployment</div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
