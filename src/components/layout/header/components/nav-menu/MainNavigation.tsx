import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { CategoryItem } from './CategoryItem';
import { CategoryItems } from './CategoryItems';
import { MenuDescription } from './MenuDescription';
import { menuData } from '../../data/nav-menu-list';

const MainNavigation = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div className='hidden h-full items-center lg:flex'>
      {menuData.map(({ title, subtitle, submenu, link }) => (
        <div key={title} className='group relative h-full'>
          {link ? (
            <Link
              href={link}
              className={`${scrolled ? 'text-primary' : 'text-white'} border-b-accent hover:text-accent flex h-full items-center gap-2 space-x-1 px-3 py-2 text-base font-medium transition-colors duration-200 group-hover/header:text-black`}
            >
              {title}
            </Link>
          ) : (
            <button
              className={`${scrolled ? 'text-primary' : 'text-white'} border-b-accent hover:text-accent flex h-full items-center gap-2 space-x-1 px-3 py-2 text-base font-medium transition-colors duration-200 group-hover/header:text-black`}
            >
              <span>{title}</span>
              <ChevronDown className='h-4 w-4 transition-transform group-hover:rotate-180' />
            </button>
          )}

          {!link && (
            <div className='invisible fixed top-[100px] right-0 left-0 z-50 opacity-0 transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100'>
              <div className='mx-auto flex justify-center'>
                <div className='flex bg-[#F9F9F9] px-[75px] py-10'>
                  {/* Left Side - Menu Title and Description */}
                  <MenuDescription title={title} subtitle={subtitle} />

                  {/* Right Side - Submenu */}
                  <div className='ml-[30px] flex w-full justify-center gap-[60px] py-5'>
                    {submenu.map(el => {
                      return (
                        <CategoryItems category={el.title} key={el.title} link={el.link}>
                          {el.items.map(item => {
                            return <CategoryItem key={item.title} item={item} />;
                          })}
                        </CategoryItems>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainNavigation;
