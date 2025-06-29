import { Accordion } from '@/components/ui/accordion';
import { NavLinkWithChildren } from './NavLinkWithChildren';
import { NavLinksWithoutChildren } from './NavLinksWithoutChildren';
import type { Submenu } from '../../data/footer-menu-list';

export const NavMenuColumn = ({ submenu }: { submenu: Submenu[] }) => {
  return (
    <Accordion type='single' collapsible className='flex flex-col'>
      {submenu.map(({ title: subtitle, link, items }) => (
        <div key={subtitle}>
          {subtitle ? (
            <NavLinkWithChildren
              items={items}
              link={link}
              title={subtitle}
              key={subtitle}
            />
          ) : (
            <NavLinksWithoutChildren items={items} />
          )}
        </div>
      ))}
    </Accordion>
  );
};
