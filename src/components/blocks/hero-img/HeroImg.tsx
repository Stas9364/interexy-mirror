import { Container } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { Overlay } from '@/components/overlay/Overlay';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const HeroImg = ({
  children,
  img_src,
  sectionClassName,
}: {
  children?: React.ReactNode;
  img_src: string;
  sectionClassName?: string;
}) => {
  return (
    <section
      className={cn(
        'relative h-full min-h-[600px] w-full overflow-hidden',
        sectionClassName,
      )}
    >
      <div className='absolute top-0 left-0 z-0 h-full w-full'>
        <Image
          className='block h-full w-full object-cover object-[35%_center] md:object-center'
          src={img_src}
          alt={'Hero'}
          width={2560}
          height={1118}
        />
      </div>

      {children}
    </section>
  );
};
