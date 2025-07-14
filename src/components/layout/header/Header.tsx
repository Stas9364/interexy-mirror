'use client';

import { Container } from '../container/Container';
import { InterexyLink } from '../../link/InterexyLink';
import { Logo } from '../../logo/Logo';
import MobileNavigation from './components/mobile-nav-menu/MobileNavigation';
import MainNavigation from './components/nav-menu/MainNavigation';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [match, setMatch] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    const isNotFound = !!document.querySelector('[data-page="not-found"]');
    if (isNotFound) setMatch(isNotFound);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, pathname]);

  return (
    <header
      className={`group/header fixed top-0 z-[10000] w-full transition-colors duration-200 hover:bg-white ${
        scrolled ? 'bg-white' : 'bg-transparent'
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
                  scrolled || isHovered || match
                    ? '/logo/logo-purple.svg'
                    : '/logo/logo-purple-white.svg'
                }
                alt={'Header Interexy Logo'}
                width={152}
                height={43}
                priority={true}
              />

              <MainNavigation scrolled={scrolled} darkHeader={match} />

              <MobileNavigation scrolled={scrolled} darkHeader={match} />

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
