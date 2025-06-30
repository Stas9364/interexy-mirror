'use client';

import { Container } from '../container/Container';
import { InterexyLink } from '../../link/InterexyLink';
import { Logo } from '../../logo/Logo';
import MobileNavigation from './components/mobile-nav-menu/MobileNavigation';
import MainNavigation from './components/nav-menu/MainNavigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className='h-header'>
          <nav className='h-full'>
            <div className='flex h-full items-center justify-between'>
              <Logo
                href={'/'}
                src={'/logo/logo-purple.svg'}
                alt={'Header Interexy Logo'}
                width={155}
                height={45}
                priority={true}
                className='z-2'
              />

              <MainNavigation scrolled={scrolled} />

              <MobileNavigation scrolled={scrolled} />

              <div className='hidden lg:block'>
                <InterexyLink
                  href='/'
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
