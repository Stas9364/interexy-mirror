import Link from "next/link";
import Image from "next/image";
import { socialNetworks } from '../data/social-networks';

export const SocialNetworks = () => {
  return (
    <div className="flex gap-4">
      {socialNetworks.map(({ icon, link, bg, alt }) => {
        return (
          <Link
            key={icon}
            href={link}
            className="rounded-[5px] hover:bg-[var(--hover-social-color)] transition-colors duration-200"
            style={{ "--hover-social-color": bg } as React.CSSProperties}
          >
            <Image alt={alt} src={icon} width={0} height={0} className='min-w-[32px] min-h-[32px]' />
          </Link>
        );
      })}
    </div>
  );
};
