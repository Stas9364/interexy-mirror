import { InterexyLink } from '../../link/InterexyLink';
import { Logo } from '../../logo/Logo';
import { Container } from '../container/Container';
import MobileNavigation from './components/mobile-nav-menu/MobileNavigation';
import MainNavigation from './components/nav-menu/MainNavigation';

const DarkHeader = () => {
  return (
    <header
      className={`group/header fixed top-0 z-[10000] w-full bg-white transition-colors duration-200`}
    >
      <Container>
        <div className='h-header'>
          <nav className='h-full'>
            <div className='flex h-full items-center justify-between'>
              <Logo
                href={'/'}
                src={'/logo/logo-purple.svg'}
                alt={'Header Interexy Logo'}
                width={152}
                height={43}
                priority={true}
              />

              <MainNavigation darkHeader={true} />

              <MobileNavigation darkHeader={true} />

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

export default DarkHeader;
