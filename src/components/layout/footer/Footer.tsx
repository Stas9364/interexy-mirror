import { Container } from "../../container/Container";
import { CompanyLocations } from "./components/CompanyLocations";
import { Copyright } from "./components/Copyright";
import { FooterNavMenu } from "./components/footer-nav/FooterNavMenu";
import { LogoSection } from "./components/LogoSection";
import { MobileFooterNavMenu } from './components/mobile-footer-nav/MobileFooterNavMenu';
import { Platforms } from "./components/Platforms";
import { PolicyLinks } from "./components/PolicyLinks";
import { SocialNetworks } from "./components/SocialNetworks";

export const Footer = () => {
  return (
    <footer className="mt-auto py-[70px] bg-primary text-white">
      <Container>
        <section>
          <div className="flex gap-[30px] pb-2.5 md:pb-[46px] ">
            <div className="hidden xl:block">
              <LogoSection />
            </div>

            <FooterNavMenu />

            <MobileFooterNavMenu />
          </div>

          <CompanyLocations />

          <div className="block xl:hidden">
            <LogoSection />
          </div>

          <div className="pt-[46px] flex flex-col gap-y-[46px]">
            <Platforms />

            <div className="flex justify-between text-lg lg:flex-row flex-col lg:gap-y-0 gap-y-4">
              <Copyright />

              <PolicyLinks />

              <SocialNetworks />
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
};







