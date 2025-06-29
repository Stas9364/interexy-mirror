import { Container } from '../../container/Container';
import { InterexyLink } from '../../link/InterexyLink';
import { Logo } from '../../logo/Logo';
import MobileNavigation from './components/mobile-nav-menu/MobileNavigation';
import MainNavigation from './components/nav-menu/MainNavigation';

const Header = () => {
  return (
    <header className='fixed top-0 z-[10000] w-full bg-transparent'>
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
              />

              <MainNavigation />

              <MobileNavigation />

              <div className='hidden lg:block'>
                <InterexyLink href='/' text='Contact us' variant={'primary'} />
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
