import Link from "next/link";
import Image from "next/image";

export const Logo = ({
  href,
  src,
  alt,
  width,
  height,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-2">
        <Link href={href}>
          <Image
            alt={alt}
            src={src}
            width={width}
            height={height}
            priority
          />
        </Link>
      </div>
    </div>
  );
};
