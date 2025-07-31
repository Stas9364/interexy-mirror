import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import type { Step } from './steps-type';
import { cn } from '@/lib/utils';

export const Steps = ({
  title,
  blockTitleContent,
  steps,
  sectionClasses,
}: {
  title: string;
  blockTitleContent?: React.ReactNode;
  steps: Step[];
  sectionClasses?: string;
}) => {
  return (
    <Section
      className={cn(
        'bg-accent mb-[40px] pt-[80px] md:mb-[60px] xl:mb-[80px]',
        sectionClasses,
      )}
    >
      <Container>
        <BlockTitle titleClassName='text-white max-w-[900px]' title={title}>
          {blockTitleContent}
        </BlockTitle>

        <ul className='flex grid-cols-3 flex-col gap-y-10 md:grid md:gap-6'>
          {steps.map(({ title, description, href, linkTitle, color }, idx) => (
            <li key={idx} className='flex flex-col text-white'>
              <div>
                <div className='relative mb-5 ml-4'>
                  <span className='absolute top-[-30px] left-[-5px] text-[44px] leading-[1.4] font-extrabold'>
                    {++idx}
                  </span>
                  <div
                    className='h-8 w-8 rounded-[7px]'
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
                {title && (
                  <h3 className='mb-[10px] text-xl leading-[1.4] font-semibold'>
                    {title}
                  </h3>
                )}
                {description && (
                  <p className='mb-6 text-base leading-[1.4] font-normal'>
                    {description}
                  </p>
                )}
              </div>
              <Link
                className='group mt-auto flex items-center gap-x-2'
                href={href}
                target={'_blank'}
              >
                {linkTitle}
                <MoveRight
                  className='transition-transform duration-300 ease-in-out group-hover:translate-x-1'
                  size={18}
                  strokeWidth={2}
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
