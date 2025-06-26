import { footerMenuList } from '../../data/footer-menu-list';
import { NavMenuColumn } from './NavMenuColumn';

export const FooterNavMenu = () => {
  return (
    <div className="hidden w-full md:flex gap-x-[30px] justify-between pt-[10px]">
      {footerMenuList.map(({ title, submenu }) => (
        <div key={title} className="flex flex-col gap-y-5 w-full">
          <span className="text-xl font-bold text-white">{title}</span>
          <NavMenuColumn submenu={submenu} />
        </div>
      ))}
    </div>
  );
};
