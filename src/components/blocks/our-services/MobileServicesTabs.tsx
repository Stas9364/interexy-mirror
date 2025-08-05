'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { services } from './our-services-list';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { useState } from 'react';

export const MobileServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <Accordion
      type='single'
      value={activeTab}
      onValueChange={setActiveTab}
      collapsible
      className='block w-full md:hidden'
    >
      {Object.keys(services).map(title => (
        <AccordionItem key={title} value={title}>
          <AccordionTrigger
            className={`px-[10px] ${activeTab === title ? 'text-primary' : 'text-secondary'} text-base leading-[1.4] font-bold`}
          >
            {title}
          </AccordionTrigger>
          <AccordionContent className='mb-4 flex flex-col'>
            {services[title].map(({ link, title }) => (
              <Link
                target='_blank'
                key={title}
                href={link}
                className='first:border-accent flex justify-between px-[10px] py-4 text-base leading-[1.4] font-medium first:border-t-2'
              >
                {title}

                {link && (
                  <MoveUpRight
                    size={18}
                    color='#5067f4'
                    strokeWidth={1}
                    className='color-accent min-h-6 min-w-6 lg:min-h-[40px] lg:min-w-[40px]'
                  />
                )}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
