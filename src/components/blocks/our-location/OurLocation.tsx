import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { CONTACTS } from '@/lib/constants/contacts_constants';
import Image from 'next/image';

type Location = {
  img: string;
  title: string;
  phone_number: string;
};

const locations: Location[] = [
  { img: '/blocks/our-location/usa.svg', title: 'USA', phone_number: CONTACTS.usa.phone },
  {
    img: '/blocks/our-location/poland.svg',
    title: 'Poland',
    phone_number: CONTACTS.poland.phone,
  },
  { img: '/blocks/our-location/uae.svg', title: 'UAE', phone_number: CONTACTS.uae.phone },
];

export const OurLocation = () => {
  return (
    <Section>
      <Container>
        <BlockTitle title='Interexy around the Globe' subtitle='Our location' />

        <div className='flex w-full gap-x-[10px] overflow-auto md:justify-around'>
          {locations.map(({ img, phone_number, title }) => {
            return (
              <div
                key={title}
                className='flex min-w-[140px] flex-col items-center gap-y-2 bg-[#F5F5F5] px-[10px] py-4 md:bg-transparent md:p-0'
              >
                <div className='relative mb-[30px] h-[80px] w-[80px] md:h-[140px] md:w-[140px]'>
                  <Image alt={title} src={img} fill />
                </div>

                <span className='mb-[10px] text-xl leading-[1.4] font-medium md:text-2xl md:font-bold'>
                  {title}
                </span>

                <a
                  href={`tel:${phone_number}`}
                  className='text-accent text-sm leading-[140%] font-medium md:text-xl'
                >
                  {phone_number}
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
