import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { ProcessStage } from './how-we-work.types';
import { Container, Section } from '@/components/layout';

export const HowWeWork = ({ howWeWork }: { howWeWork: ProcessStage[] }) => {
  return (
    <Section>
      <Container>
        <div>
          <div className='grid grid-cols-1 gap-y-10 md:gap-y-[80px]'>
            {howWeWork.map(
              ({ number, title, description, goals, outputs, src_img }, idx) => (
                <div
                  key={title}
                  className={`flex ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
                >
                  <div className='flex flex-col justify-center lg:w-1/2'>
                    <div className='relative'>
                      <span className='text-[50px] leading-[1.4] font-bold capitalize opacity-10 md:text-[100px]'>
                        {number}
                      </span>
                      <h2 className='initial top-[40%] left-[10%] text-[28px] leading-[1.4] font-bold md:absolute md:text-4xl'>
                        {title}
                      </h2>
                    </div>

                    <p className='my-6 text-lg leading-[1.4] font-medium'>
                      {description}
                    </p>

                    <div className='mb-6'>
                      <h3 className='mb-6 text-2xl leading-[1.4] font-bold'>Goals:</h3>
                      <ul className='list-inside list-disc'>
                        {goals.map(goal => (
                          <li key={goal} className='text-lg leading-[1.4] font-normal'>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className='mb-6 text-2xl leading-[1.4] font-bold'>Outputs:</h3>
                      {outputs.length > 0 && (
                        <div className='mb-6 flex flex-wrap gap-3'>
                          {outputs.map(output => (
                            <span
                              key={output}
                              className='rounded-[10px] border-1 px-6 py-3 text-base leading-[1.4] font-medium lg:text-lg'
                            >
                              {output}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='flex lg:w-1/2'>
                    <div className='relative mt-4 block aspect-square h-[500px] w-full lg:h-[711px]'>
                      <Image
                        src={src_img}
                        fill
                        alt={title}
                        sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'
                        className={cn('object-contain')}
                      />
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
