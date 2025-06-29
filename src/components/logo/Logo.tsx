import Link from 'next/link';
import Image from 'next/image';

export const Logo = ({
  href,
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) => {
  return (
    <div className='flex items-center'>
      <div className='flex items-center space-x-2'>
        <Link href={href}>
          <Image alt={alt} src={src} width={width} height={height} priority={priority} />
        </Link>
      </div>
    </div>
  );
};
