import type { SubmenuItem } from '../../data/footer-menu-list';
import { NavItem } from './NavItem';

export const SubItemsWithoutChildren = ({ items }: { items: SubmenuItem[] }) => {
  return (
    <div className='flex flex-col'>
      {items.map(({ link, title }) => (
        <NavItem link={link} title={title} key={title} />
      ))}
    </div>
  );
};
