import { ChevronDown } from "lucide-react";
import { menuData } from "../nav-menu-list";
import Link from "next/link";
import { CategoryItem } from "./CategoryItem";
import { CategoryItems } from "./CategoryItems";
import { MenuDescription } from "./MenuDescription";

const MainNavigation = () => {
  return (
    <div className="h-full hidden lg:flex items-center">
      {menuData.map(({ title, subtitle, submenu, link }) => (
        <div key={title} className="relative group h-full">
          {link ? (
            <Link
              href={link}
              className="flex h-full items-center gap-4 space-x-1 text-primary   border-b-accent hover:text-accent px-3 py-2 text-lg font-medium transition-colors duration-200"
            >
              {title}
            </Link>
          ) : (
            <button className="flex h-full items-center gap-1 space-x-1 text-primary  group-hover:border-b-2 border-b-accent hover:text-accent px-3 py-2 text-md font-medium transition-colors duration-200">
              <span>{title}</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
          )}

          {!link && (
            <div className="fixed top-[101px] left-0 right-0 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
              <div className=" mx-auto flex justify-center">
                <div className="flex bg-[#F9F9F9] py-10 px-[75px]">
                  {/* Left Side - Menu Title and Description */}
                  <MenuDescription title={title} subtitle={subtitle} />

                  {/* Right Side - Submenu */}
                  <div className="flex w-full  gap-[60px] ml-[30px] py-5 justify-center">
                    {submenu.map((el) => {
                      return (
                        <CategoryItems
                          category={el.title}
                          key={el.title}
                          link={el.link}
                        >
                          {el.items.map((item) => {
                            console.log(item);

                            return (
                              <CategoryItem key={item.title} item={item} />
                            );
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
