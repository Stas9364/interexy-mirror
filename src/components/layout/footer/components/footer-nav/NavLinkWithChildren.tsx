import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import type { Submenu } from '../../data/footer-menu-list';

export const NavLinkWithChildren = ({ title, link, items }: Submenu) => {
  return (
    <AccordionItem value={title} key={title}>
      {items.length > 0 ? (
        <>
          <AccordionTrigger className='cursor-pointer py-2 text-base text-white'>
            {title}
          </AccordionTrigger>
          <AccordionContent className='ml-4 flex flex-col gap-y-2 pb-2'>
            {items.map(({ link, title: itemTitle }) => (
              <Link
                className='hover:text-accent text-white transition duration-200'
                href={link}
                key={itemTitle}
              >
                {itemTitle}
              </Link>
            ))}
          </AccordionContent>
        </>
      ) : (
        <Link className='hover:text-accent my-2 flex transition duration-200' href={link}>
          {title}
        </Link>
      )}
    </AccordionItem>
  );
};
