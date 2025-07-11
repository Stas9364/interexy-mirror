import Link from 'next/link';
import Image from 'next/image';

export const Logo = ({
  href,
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className='flex items-center space-x-2'>
        <Link href={href}>
          <Image alt={alt} src={src} width={width} height={height} priority={priority} />
        </Link>
      </div>
    </div>
  );
};
