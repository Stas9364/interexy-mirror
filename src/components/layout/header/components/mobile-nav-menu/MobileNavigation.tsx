'use client';

import { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { InterexyLink } from '@/components/link/InterexyLink';
import { menuData } from '../../data/nav-menu-list';

import './style.css';

export function MobileNavigation({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`burger flex ${isOpen ? 'burger-open' : ''} ${scrolled ? 'scrolled' : ''} flex lg:hidden`}
        onClick={toggleButton}
      >
        <span></span>
      </div>
      <div
        className={`fixed top-0 left-0 z-1 h-[100px] w-full bg-white transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      ></div>

      <div
        className={`absolute top-[100px] left-0 h-[550px] w-full overflow-y-auto bg-[#f9f9f9] transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='px-4 py-8'>
          <Accordion type='single' collapsible className='w-full'>
            {menuData.map(({ title, submenu, link }, idx) => (
              <AccordionItem key={title} value={`main-${idx}`}>
                {submenu.length > 0 ? (
                  <>
                    <AccordionTrigger className='border-b border-b-[#d3d3d3] text-lg font-bold'>
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className='flex flex-col text-balance'>
                      {submenu.map((elem, catIdx) => {
                        const { title, items, link } = elem;

                        return !!title ? (
                          <Accordion
                            key={title}
                            type='single'
                            collapsible
                            className='ml-2'
                          >
                            <AccordionItem value={`sub-${idx}-${catIdx}`}>
                              <AccordionTrigger className='text-md border-b border-b-[#d3d3d3] font-semibold'>
                                {link ? (
                                  <Link href={link} className='underline'>
                                    {title}
                                  </Link>
                                ) : (
                                  title
                                )}
                              </AccordionTrigger>
                              <AccordionContent className='flex flex-col gap-2'>
                                {items.map(({ link, title }) => (
                                  <div key={title} className='py-2'>
                                    <Link href={link} className='inline-block w-full'>
                                      {title}
                                    </Link>
                                  </div>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <div className='ml-2' key={title}>
                            {items.map(({ link, title }) => (
                              <div key={title} className='py-2'>
                                <Link href={link} className='inline-block w-full'>
                                  {title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </>
                ) : (
                  <Link href={link} className='block w-full py-4 text-lg font-bold'>
                    {title}
                  </Link>
                )}
              </AccordionItem>
            ))}
          </Accordion>

          <InterexyLink
            href='/'
            text='Contact us'
            variant={'primary'}
            size={'sm'}
            className='mt-5'
          />
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;
