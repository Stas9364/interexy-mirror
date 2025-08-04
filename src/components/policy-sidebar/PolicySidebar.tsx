import { useExtractH2FromJSX } from '@/lib/hooks/extractH2FromTSX';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export const PolicySidebar = ({ content }: { content: React.ReactNode }) => {
  const headings = useExtractH2FromJSX(content);

  return (
    <aside className='mb-[25px] lg:mb-0'>
      <nav className='h-full'>
        <Accordion type='single' collapsible className='block lg:hidden'>
          <AccordionItem value='1'>
            <AccordionTrigger className='mb-5 bg-[#F5F5F5] px-[15px] py-5 text-base leading-[1.4] font-semibold'>
              Table of contents
            </AccordionTrigger>
            <AccordionContent className='flex flex-col px-[15px]'>
              {headings.map(h => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className='text-secondary hover:text-accent block w-full py-[10px] text-sm leading-[1.3] font-normal transition-colors duration-200'
                >
                  {h.text}
                </a>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className='sticky top-[100px] hidden lg:block'>
          <div className='mb-5 text-xl font-semibold'>Table of contents</div>
          <ul className='mb-5 block pr-3 pb-[50px]'>
            {headings.map(h => (
              <li key={h.id} className='py-[5px] leading-0'>
                <a
                  href={`#${h.id}`}
                  className='text-secondary hover:text-accent block w-full py-[5px] text-sm leading-[1.3] font-normal transition-colors duration-200'
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};
