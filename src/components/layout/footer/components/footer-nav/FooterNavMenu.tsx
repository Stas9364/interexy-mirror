import { footerMenuList } from '../../data/footer-menu-list';
import { NavMenuColumn } from './NavMenuColumn';

export const FooterNavMenu = () => {
  return (
    <div className='hidden w-full justify-between gap-x-[30px] pt-[10px] md:flex'>
      {footerMenuList.map(({ title, submenu }) => (
        <div key={title} className='flex w-full flex-col gap-y-5'>
          <span className='text-xl font-bold text-white'>{title}</span>
          <NavMenuColumn submenu={submenu} />
        </div>
      ))}
    </div>
  );
};
