'use client';

import Link from 'next/link';
import { services } from './our-services-list';
import { MoveUpRight } from 'lucide-react';
import { useState } from 'react';

const serviceTabClass = (active: boolean) =>
  `${active ? 'text-primary border-accent border-b-2' : 'text-[#838383]'} cursor-pointer px-[10px] py-4 text-base leading-[1.4] font-bold lg:py-[30px] lg:text-[22px] 2xl:text-3xl`;

const serviceItemClass =
  'px-[10px] py-4 text-base font-medium lg:py-[30px] lg:text-xl 2xl:text-[28px]';
const serviceLinkClass =
  'hover:text-accent flex justify-between px-[10px] py-4 text-base font-medium transition-colors duration-200 ease-in-out hover:bg-[#F0F1F7] lg:py-[30px] lg:text-xl 2xl:text-[28px]';

export const ServicesTabs = () => {
  const [service, setService] = useState('AI Solutions');

  const handleServiceClick = (title: string) => setService(title);

  const renderServiceItem = ({ link, title }: { link?: string; title: string }) =>
    link ? (
      <Link key={title} href={link} className={serviceLinkClass}>
        {title}
        <MoveUpRight
          size={18}
          color='#5067f4'
          strokeWidth={1}
          className='color-accent min-h-6 min-w-6 lg:min-h-[40px] lg:min-w-[40px]'
        />
      </Link>
    ) : (
      <span key={title} className={serviceItemClass}>
        {title}
      </span>
    );
  return (
    <div className='3xl:gap-x-[160px] hidden grid-cols-[360px_1fr] gap-x-[80px] md:grid md:grid-cols-[270px_1fr] md:gap-x-[40px] lg:grid-cols-[330px_1fr] lg:gap-x-[80px] 2xl:grid-cols-[490px_1fr]'>
      <div>
        {Object.keys(services).map(title => (
          <div
            key={title}
            className={serviceTabClass(service === title)}
            onClick={() => handleServiceClick(title)}
          >
            {title}
          </div>
        ))}
      </div>
      <div className='grid h-fit grid-cols-[199px_199px] gap-x-[20px] lg:grid-cols-[286px_286px] xl:gap-x-[70px] 2xl:grid-cols-[390px_390px] 2xl:gap-x-[100px]'>
        {services[service].map(renderServiceItem)}
      </div>
    </div>
  );
};
