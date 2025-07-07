import { locationData } from '../data/location-data';
import Image from 'next/image';

export const CompanyLocations = () => {
  return (
    <div className='grid gap-x-8 gap-y-8 border-y border-[#433F4E] py-[25px] md:grid-cols-3 md:py-[46px]'>
      {locationData.map(({ flag_src, location, address, phone }) => {
        return (
          <div
            key={location}
            className='flex flex-col gap-5 border-[#433F4E] pb-5 md:border-b-0 md:pb-0 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-b-0'
          >
            <div className='flex items-center gap-2'>
              <Image alt='' src={flag_src} width={24} height={16} />
              <span>{location}</span>
            </div>

            <address className='text-lg leading-[140%] font-normal not-italic'>
              <p>{address.street}</p>
              <p>{address.city}</p>
            </address>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        );
      })}
    </div>
  );
};
