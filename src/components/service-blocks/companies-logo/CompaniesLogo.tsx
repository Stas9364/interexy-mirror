import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';
import type { Logo } from './logos-types';

export const CompaniesLogo = ({ title, logos }: { title?: string; logos: Logo[] }) => {
  return (
    <Section>
      <Container>
        {title && <BlockTitle title={title} />}

        <ul className='flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px]'>
          {logos.map(({ src, href, alt }) => (
            <li key={src}>
              <Link href={href} className='block h-[60px] max-w-[250px] min-w-[80px]'>
                <Image
                  src={src}
                  alt={alt}
                  width={150}
                  height={60}
                  className='h-full w-auto object-contain grayscale hover:grayscale-0'
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
