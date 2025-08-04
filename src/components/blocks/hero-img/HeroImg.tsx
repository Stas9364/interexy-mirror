import { cn } from '@/lib/utils';
import Image from 'next/image';

export const HeroImg = ({
  children,
  img_src,
  sectionClassName,
  video_src,
  video_type,
}: {
  children?: React.ReactNode;
  img_src?: string;
  sectionClassName?: string;
  video_src?: string;
  video_type?: string;
}) => {
  return (
    <section
      className={cn(
        'relative h-full min-h-[600px] w-full overflow-hidden',
        sectionClassName,
      )}
    >
      <div className='absolute top-0 left-0 z-0 h-full w-full'>
        {img_src && (
          <Image
            className='block h-full w-full object-cover object-[35%_center] md:object-center'
            src={img_src}
            alt={'Hero'}
            width={2560}
            height={1118}
            priority
          />
        )}

        {video_src && (
          <video
            width='640'
            height='225'
            autoPlay
            muted
            loop
            preload='metadata'
            className='h-full w-full object-cover'
          >
            <source type={video_type} src={video_src} />
          </video>
        )}
      </div>

      {children}
    </section>
  );
};
