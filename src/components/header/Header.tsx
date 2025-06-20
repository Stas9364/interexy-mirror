import Link from "next/link";
import { Logo } from "./Logo";
import MobileNavigation from "./mobile-nav-menu/MobileNavigation";
import MainNavigation from "./nav-menu/MainNavigation";

const Header = () => {
  return (
    <header className="hover:bg-transparent">
      <div className="container">
        <div className="h-[100px]">
          <nav className=" h-full">
            <div className="flex h-full justify-between items-center ">
              <Logo />

              <MainNavigation />

              <MobileNavigation />

              <div className="hidden lg:block">
                <Link href={"/"} className="btn btn--main">
                  Contact us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
