'use client';

import Image from 'next/image';
import Link from 'next/link';

export const InfiniteImageScroll = ({
  images,
  second = 50,
  imageWidth = 200,
  imageHeight = 100,
  spacing = 16,
  pauseOnHover = true,
  direction = 'right',
  className = '',
  imageClassName = '',
}: {
  images: { src: string; alt?: string; link?: string }[];
  second?: number;
  imageWidth?: number;
  imageHeight?: number;
  spacing?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  className?: string;
  imageClassName?: string;
}) => {
  const animationDirection = direction === 'right' ? 'scroll-right' : 'scroll-left';

  return (
    <>
      <div className={`h-[110px] w-full overflow-hidden ${className}`}>
        <div
          className={`px-75px flex h-full ${pauseOnHover ? 'hover-pause' : ''}`}
          style={{
            animation: `${animationDirection} ${second}s linear infinite`,
            width: '200%',
          }}
        >
          {/* Первый набор изображений */}
          <div className='flex h-full flex-shrink-0' style={{ gap: `${spacing}px` }}>
            <ImagesPack
              images={images}
              imageClassName={imageClassName}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
            />
          </div>

          {/* Дублированный набор для бесконечности */}
          <div
            className='flex h-full flex-shrink-0'
            style={{
              gap: `${spacing}px`,
              marginLeft: `${spacing}px`,
            }}
          >
            <ImagesPack
              images={images}
              imageClassName={imageClassName}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-90%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-90%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .hover-pause:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </>
  );
};

const ImagesPack = ({
  images,
  imageClassName,
  imageWidth,
  imageHeight,
}: {
  images: { src: string; alt?: string; link?: string }[];
  imageClassName: string;
  imageWidth: number;
  imageHeight: number;
}) => {
  return (
    <>
      {images.map(({ src, alt, link }, idx) => {
        const img = (
          <Image
            src={src}
            alt={alt || ''}
            className={imageClassName}
            width={imageWidth}
            height={imageHeight}
            style={{ width: 'auto', height: '100%' }}
          />
        );
        return link ? (
          <Link
            href={link}
            key={src + idx}
            className='border-1 border-black/10 px-[75px]'
          >
            {img}
          </Link>
        ) : (
          <div key={src + idx} className='border-1 border-black/10 px-[75px]'>
            {img}
          </div>
        );
      })}
    </>
  );
};
