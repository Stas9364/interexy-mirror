import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Submenu } from '../../data/footer-menu-list';
import { NavItem } from './NavItem';
import Link from 'next/link';

export const SubItemsWithChildren = ({ items, title, link }: Submenu) => {
  return (
    <div key={title} className='flex flex-col'>
      {items.length > 0 ? (
        <AccordionItem value={title} key={title}>
          <AccordionTrigger className='py-2 text-white'>
            <Link href={link}>{title}</Link>
          </AccordionTrigger>
          <AccordionContent className='ml-2'>
            <div className='flex flex-col'>
              {items.map(({ link, title }) => (
                <NavItem link={link} title={title} key={title} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ) : (
        <NavItem link={link} title={title} key={title} />
      )}
    </div>
  );
};
