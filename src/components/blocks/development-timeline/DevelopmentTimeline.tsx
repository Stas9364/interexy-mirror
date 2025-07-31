import { Container, Section } from '@/components/layout';
import { ToolTip } from './ToolTip';
import { BlockTitle } from '@/components/block-title/BlockTitle';

export const DevelopmentTimeline = () => {
  return (
    <Section className='bg-[#f5f7fb] pt-[40px] !pb-[150px] md:pt-[60px] xl:pt-[80px]'>
      <Container>
        <BlockTitle title='Development Timeline' />
        <div>
          <div className='mt-[150px] mr-0 ml-auto max-w-[1030px] md:mt-[220px]'>
            <div className='flex border-b border-[#dadfe8] pb-[46px]'>
              <div className='relative flex min-h-[43px] w-full max-w-[260px] items-center justify-center border-l-2 border-[#f1a114] bg-[#fcfeff] shadow-md after:absolute after:bottom-[-63px] after:left-[-12px] after:block after:h-[63px] after:w-[23px] after:bg-[url("/process/orange-dotline.svg")] after:bg-no-repeat after:content-[""]'>
                <ToolTip
                  text='Testing'
                  direction='bottom'
                  wrapperClass='right-0 translate-x-1/2'
                />
                <span className='text-sm font-medium text-[#191b204d] md:text-base'>
                  2-3 weeks
                </span>
              </div>

              <div className='relative flex min-h-[43px] w-full max-w-[260px] items-center justify-center border-x-2 border-r-[#20c192] border-l-[#fa7c9d] bg-[#e4e2ecc7] shadow-md after:absolute after:bottom-[-63px] after:left-[-12px] after:block after:h-[63px] after:w-[23px] after:bg-[url("/process/pink-dotline.svg")] after:bg-no-repeat after:content-[""]'>
                <span className='text-sm font-medium text-[#191b204d] md:text-base'>
                  3-4 months
                </span>
              </div>
              <div className='relative flex min-h-[43px] w-full max-w-[220px] items-center justify-center border-r-2 border-r-[#f1a114] bg-[#fcfeff] shadow-md after:absolute after:bottom-[-63px] after:left-[-12px] after:block after:h-[63px] after:w-[23px] after:bg-[url("/process/green-dotline.svg")] after:bg-no-repeat after:content-[""]'>
                <ToolTip
                  text='Final Testing Stage'
                  direction='bottom'
                  wrapperClass='left-1/2 -translate-x-1/2'
                />
                <span className='text-sm font-medium text-[#191b204d] md:text-base'>
                  2 weeks
                </span>
              </div>
              <div className='relative flex min-h-[43px] w-full max-w-[150px] items-center justify-center border-r-2 border-r-[#f1a114] bg-[#fcfeff] shadow-md after:absolute after:bottom-[-63px] after:left-[-12px] after:block after:h-[63px] after:w-[23px] after:bg-[url("/process/orange-dotline.svg")] after:bg-no-repeat after:content-[""]'>
                <ToolTip
                  text='Launch'
                  direction='bottom'
                  wrapperClass='left-1/2 -translate-x-1/2'
                />
              </div>
              <div className='relative flex min-h-[43px] w-full max-w-[130px] items-center justify-center border-r-2 border-r-[#f1a114] bg-[#fcfeff] shadow-md'>
                <ToolTip
                  text='Support'
                  direction='bottom'
                  wrapperClass='left-1/2 -translate-x-1/2'
                />
                <span>
                  <svg
                    width='29'
                    height='13'
                    viewBox='0 0 29 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22.475 -0.000854492C26.0758 -0.000854492 29 2.87498 29 6.49998C29 10.0766 26.0758 12.9887 22.475 12.9887C20.7229 12.9887 19.0917 12.3121 17.8592 11.0916L14.5 8.11915L11.0804 11.1521C9.90833 12.3241 8.265 13.0008 6.525 13.0008C2.92417 13.0008 0 10.0766 0 6.49998C0 2.92331 2.92417 -0.000854492 6.525 -0.000854492C8.265 -0.000854492 9.90833 0.675812 11.1408 1.90831L14.5 4.88081L17.9196 1.8479C19.0917 0.675812 20.735 -0.000854492 22.475 -0.000854492ZM9.425 9.3879L12.6875 6.49998L9.47333 3.6604C8.65167 2.83873 7.62458 2.41581 6.525 2.41581C4.26542 2.41581 2.41667 4.2404 2.41667 6.49998C2.41667 8.75956 4.26542 10.5841 6.525 10.5841C7.62458 10.5841 8.65167 10.1612 9.425 9.3879ZM19.575 3.61206L16.3125 6.49998L19.5267 9.33956C20.3483 10.1612 21.3875 10.5841 22.475 10.5841C24.7346 10.5841 26.5833 8.75956 26.5833 6.49998C26.5833 4.2404 24.7346 2.41581 22.475 2.41581C21.3754 2.41581 20.3483 2.83873 19.575 3.61206Z'
                      fill='black'
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className='mt-[150px] mr-0 ml-auto max-w-[1030px] md:mt-[220px]'>
            <div className='flex border-b border-[#dadfe8] pb-[46px]'>
              <div className='relative flex min-h-[43px] w-full max-w-[260px] items-center justify-center border-l-2 border-[#f1a114] bg-[#fcfeff] shadow-md after:absolute after:bottom-[-63px] after:left-[-12px] after:block after:h-[63px] after:w-[23px] after:bg-[url("/process/orange-dotline.svg")] after:bg-no-repeat after:content-[""]'>
                <ToolTip
                  text='Development'
                  direction='bottom'
                  wrapperClass='right-0 translate-x-1/2'
                />
                <span className='text-sm font-medium text-[#191b204d] md:text-base'>
                  2-3 weeks
                </span>
              </div>

              <div className='relative flex min-h-[43px] w-full max-w-[260px] items-center justify-center border-x-2 border-r-[#20c192] border-l-[#fa7c9d] bg-[#e4e2ecc7] shadow-md before:absolute before:bottom-[-63px] before:left-[-12px] before:block before:h-[63px] before:w-[23px] before:bg-[url("/process/pink-dotline.svg")] before:bg-no-repeat before:content-[""] after:absolute after:bottom-[10px] after:left-[260px] after:hidden after:h-[131px] after:w-[197px] after:bg-[url("/process/arrow-up.svg")] after:bg-no-repeat after:content-[""] lg:after:block'>
                <span className='text-sm font-medium text-[#191b204d] md:text-base'>
                  3-4 months
                </span>
              </div>
            </div>
          </div>

          <div className='mt-[150px] md:mt-[220px]'>
            <div className='flex border-b border-[#dadfe8] pb-[46px]'>
              <div className='relative flex min-h-[43px] w-full max-w-[260px] items-center justify-center border-x-2 border-[#f1a114] bg-[#fcfeff] shadow-md after:absolute after:right-[-12px] after:bottom-[-63px] after:block after:h-[63px] after:w-[23px] after:bg-[url("/process/orange-dotline.svg")] after:bg-no-repeat after:content-[""]'>
                <ToolTip
                  text='Planning Stage'
                  direction='bottom'
                  wrapperClass='left-1/2 -translate-x-1/2'
                />
                <span className='text-sm font-medium text-[#191b204d] md:text-base'>
                  2-3 weeks
                </span>
              </div>

              <div className='relative flex min-h-[43px] w-full max-w-[260px] items-center justify-center border-r-2 border-[#fa7c9d] bg-[#e4e2ecc7] shadow-md after:absolute after:right-[-12px] after:bottom-[-63px] after:block after:h-[63px] after:w-[23px] after:bg-[url("/process/pink-dotline.svg")] after:bg-no-repeat after:content-[""]'>
                <ToolTip
                  text='Development Stage'
                  direction='top'
                  wrapperClass='left-1/2 -translate-x-1/2'
                />
                <span className='text-sm font-medium text-[#191b204d] md:text-base'>
                  2 weeks
                </span>
              </div>

              <div className='relative flex min-h-[43px] w-full max-w-[210px] items-center justify-center bg-[#fcfeff] shadow-md after:absolute after:bottom-[10px] after:left-[210px] after:hidden after:h-[131px] after:w-[197px] after:bg-[url("/process/arrow-up.svg")] after:bg-no-repeat after:content-[""] lg:after:block'>
                <span className='text-sm font-medium text-[#191b204d] md:text-base'>
                  1,5 - 2 months
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
