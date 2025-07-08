import { ContactForm } from '@/components/contact-form/ContactForm';
import { Container } from '../container/Container';
import { CompanyLocations } from './components/CompanyLocations';
import { Copyright } from './components/Copyright';
import { FooterNavMenu } from './components/footer-nav/FooterNavMenu';
import { LogoSection } from './components/LogoSection';
import { MobileFooterNavMenu } from './components/mobile-footer-nav/MobileFooterNavMenu';
import { Platforms } from './components/Platforms';
import { PolicyLinks } from './components/PolicyLinks';
import { SocialNetworks } from './components/SocialNetworks';

export const Footer = () => {
  return (
    <>
      <ContactForm />

      <footer className='bg-primary mt-auto py-10 text-white md:py-[70px]'>
        <Container>
          <section>
            <div className='flex gap-[30px] pb-2.5 md:pb-[46px]'>
              <div className='hidden xl:block'>
                <LogoSection />
              </div>

              <FooterNavMenu />

              <MobileFooterNavMenu />
            </div>

            <CompanyLocations />

            <div className='block xl:hidden'>
              <LogoSection />
            </div>

            <div className='flex flex-col gap-y-[46px] pt-[46px]'>
              <Platforms />

              <div className='flex flex-col justify-between gap-y-4 text-lg lg:flex-row lg:gap-y-0'>
                <Copyright />

                <PolicyLinks />

                <SocialNetworks />
              </div>
            </div>
          </section>
        </Container>
      </footer>
    </>
  );
};
