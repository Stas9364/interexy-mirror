import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import type { Steps, StepsDescription } from './process-types';

export const Process = ({
  title,
  steps,
  stepsDescription,
}: {
  title: string;
  steps: Steps;
  stepsDescription?: StepsDescription[];
}) => {
  return (
    <Section className={`relative py-[60px]`}>
      <Container>
        <BlockTitle title={title} />

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
            <div className='text'>{steps.first}</div>
          </div>
          <div
            className={`absolute top-[20%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:bottom-[107%] before:left-[-15%] before:hidden before:h-[56px] before:w-[131px] before:bg-[url(/services/taxi-app-development-services/process-right.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-auto lg:right-auto lg:bottom-[25%] lg:left-[10%] lg:w-[200px] lg:before:block xl:before:left-[4%]`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>02.</div>
            <div className='text'>{steps.second}</div>
          </div>
          <div
            className={`absolute top-[35%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:top-[65%] before:left-[4%] before:hidden before:h-[50px] before:w-[2px] before:bg-[url(/services/taxi-app-development-services/process-line.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-[30%] lg:right-auto lg:bottom-auto lg:left-[34%] lg:w-[200px] lg:before:block`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>03.</div>
            <div className='text'>{steps.third}</div>
          </div>
          <div
            className={`absolute top-[48%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:bottom-[107%] before:left-[4%] before:hidden before:h-[50px] before:w-[2px] before:bg-[url(/services/taxi-app-development-services/process-line.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-auto lg:right-auto lg:bottom-[21%] lg:left-[50%] lg:w-[200px] lg:before:block`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>04.</div>
            <div className='text'>{steps.fourth}</div>
          </div>
          <div
            className={`lg-right-auto absolute bottom-[35%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:top-[135%] before:left-[4%] before:hidden before:h-[50px] before:w-[2px] before:bg-[url(/services/taxi-app-development-services/process-line.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-[30%] lg:bottom-auto lg:left-[63%] lg:w-[200px] lg:before:block`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>05.</div>
            <div className='text'>{steps.fifth}</div>
          </div>
          <div
            className={`absolute bottom-[20%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium before:absolute before:right-[10%] before:bottom-[100%] before:hidden before:h-[42px] before:w-[122px] before:bg-[url(/services/taxi-app-development-services/process-left.png)] before:bg-no-repeat before:content-[""] max-md:w-full lg:top-[64%] lg:right-[-4%] lg:left-auto lg:w-[200px] lg:before:block xl:before:right-[95%]`}
          >
            <div className={`mr-[10px] font-bold text-[#6579f4]`}>06.</div>
            <div className='text'>{steps.sixth}</div>
          </div>
          <div
            className={`absolute bottom-[5%] left-[30px] flex items-start text-[18px] leading-[21px] font-medium text-[#93278c] max-md:w-full lg:right-[-1%] lg:left-auto lg:w-[200px]`}
          >
            <div className={`mr-[10px] font-bold`}>07.</div>
            <div className='text'>{steps.seventh}</div>
          </div>
        </div>

        {stepsDescription && (
          <div className='grid grid-cols-1 gap-x-[30px] sm:grid-cols-2 lg:grid-cols-3'>
            {stepsDescription.map(({ title, description }, idx) => (
              <div key={idx} className='relative mt-[84px] w-full max-w-[350px]'>
                <span className='absolute top-[-45px] left-[-15px] text-[85px] leading-[1.4] font-bold text-[#f5f7fb] xl:left-[-55px]'>
                  0{idx + 1}
                </span>
                <h3
                  className={`relative my-[10px] text-xl font-bold`}
                  style={{
                    color: idx === 0 ? '#22e742' : idx === 6 ? '#93278c' : '#5067f4',
                  }}
                >
                  {title}
                </h3>
                <p className='text-base font-light'>{description}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};
