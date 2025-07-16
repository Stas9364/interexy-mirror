import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FaqType } from './faq-types';

export const FAQ = ({ title, items }: { title: string; items: FaqType[] }) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} />
        <div className='flex justify-center'>
          <Accordion type='single' collapsible className='w-full bg-[#F8F8F9] p-[10px]'>
            {items.map(({ question, answer }) => (
              <AccordionItem
                value={question}
                key={question}
                className='mx-0 border-b border-[#E7E7E8] last:border-b-0 md:mx-5 md:pt-[10px] md:pb-[20px]'
              >
                <AccordionTrigger className='cursor-pointer text-xl leading-[1.4] font-bold'>
                  {question}
                </AccordionTrigger>
                <AccordionContent className='flex flex-col gap-y-5 pr-10'>
                  {answer.map((item, index) => (
                    <p key={index} className='text-secondary text-lg leading-[1.4]'>
                      {item}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};
