import { InterexyLink } from '@/components/link/InterexyLink';
import { Logo } from '@/components/logo/Logo';

export const LogoSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-x-[48px] gap-y-6 border-b border-[#433F4E] py-6 md:flex-row md:items-start xl:w-[240px] xl:flex-col xl:gap-x-0 xl:border-b-0 xl:py-0 2xl:w-[300px]'>
      <Logo
        href={'/'}
        src={'/logo/footer-logo.webp'}
        alt={'Footer Interexy Logo'}
        width={220}
        height={60}
      />

      <InterexyLink
        href='/'
        text='Book a call'
        variant={'primary'}
        className='md:w-[220px] xl:mt-[40px]'
      />

      <a
        className="flex gap-2.5 text-white underline before:block before:h-[24px] before:w-[24px] before:bg-[url(/mail.svg)] before:bg-contain before:bg-center before:bg-no-repeat before:content-[''] xl:mt-[26px]"
        href='mailto:sales@interexy.com'
      >
        sales@interexy.com
      </a>
    </div>
  );
};
