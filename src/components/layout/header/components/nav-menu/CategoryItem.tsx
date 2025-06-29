import Link from 'next/link';
import type { SubmenuItem } from '../../data/nav-menu-list';

export const CategoryItem = ({ item }: { item: SubmenuItem }) => {
  return (
    <li>
      <Link
        href={item.link}
        className='text-secondary hover:text-accent block py-2 text-sm transition-colors duration-200'
      >
        {item.title}
      </Link>
    </li>
  );
};
