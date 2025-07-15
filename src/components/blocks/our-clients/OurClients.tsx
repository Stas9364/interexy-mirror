import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { clients } from './clients-list';
import Image from 'next/image';

export const OurClients = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <Section>
      <Container>
        <BlockTitle subtitle={subtitle} title={title} />

        <ul className='flex grid-cols-4 flex-nowrap gap-[10px] overflow-x-auto lg:grid lg:gap-4'>
          {clients.map(({ alt, src }) => (
            <li
              key={src}
              className='flex min-w-[150px] items-center justify-center bg-[#F5F5F5]'
            >
              <Image
                src={src}
                alt={alt}
                width={200}
                height={100}
                className='h-auto max-h-[100px] object-contain lg:max-h-[200px]'
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
