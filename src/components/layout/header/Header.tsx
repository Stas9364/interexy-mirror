'use client';

import { Container } from '../container/Container';
import { InterexyLink } from '../../link/InterexyLink';
import { Logo } from '../../logo/Logo';
import MobileNavigation from './components/mobile-nav-menu/MobileNavigation';
import MainNavigation from './components/nav-menu/MainNavigation';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const pathForDarkBg = ['privacy-policy', 'terms-of-service', 'cookie-policy'];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const match = pathForDarkBg.some(path => path === pathname.split('/')[1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`group/header fixed top-0 z-[10000] w-full transition-colors duration-200 hover:bg-white ${
        scrolled ? 'bg-white' : match ? 'bg-[#0006]' : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container>
        <div className='h-header'>
          <nav className='h-full'>
            <div className='flex h-full items-center justify-between'>
              <Logo
                href={'/'}
                src={
                  scrolled || isHovered
                    ? '/logo/logo-purple.svg'
                    : '/logo/logo-purple-white.svg'
                }
                alt={'Header Interexy Logo'}
                width={152}
                height={43}
                priority={true}
              />

              <MainNavigation scrolled={scrolled} />

              <MobileNavigation scrolled={scrolled} />

              <div className='hidden lg:block'>
                <InterexyLink
                  href='/contact-us'
                  text='Contact us'
                  variant={'primary'}
                  size={'sm'}
                />
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
