import Link from 'next/link';
import type { SubmenuItem } from '../nav-menu-list';

export const CategoryItem = ({ item }: { item: SubmenuItem }) => {
  return (
    <li>
      <Link
        href={item.link}
        className="text-secondary hover:text-accent text-sm py-2 transition-colors duration-200 block"
      >
        {item.title}
      </Link>
    </li>
  );
};
