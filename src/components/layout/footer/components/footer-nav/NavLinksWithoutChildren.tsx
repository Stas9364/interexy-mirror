import Link from 'next/link';
import type { SubmenuItem } from '../../data/footer-menu-list';
import { AccordionItem } from '@/components/ui/accordion';

export const NavLinksWithoutChildren = ({ items }: { items: SubmenuItem[] }) => {
  return (
    <>
      {items.map(({ title, link }) => (
        <AccordionItem value={title} key={title} className='py-2'>
          <Link className='hover:text-accent transition duration-200' href={link}>
            {title}
          </Link>
        </AccordionItem>
      ))}
    </>
  );
};
