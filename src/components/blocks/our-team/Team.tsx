import Image from 'next/image';

import { team } from './team-data';

export const Team = () => {
  return (
    <div className='mt-10 xl:mt-[60px]'>
      <ul className='flex grid-cols-3 gap-x-[15px] gap-y-[35px] overflow-x-auto lg:grid lg:gap-x-[25px] xl:gap-x-[30px] xl:gap-y-10'>
        {team.map(({ name, position, image }) => (
          <li key={name} className='relative min-w-[320px] bg-[#F0F1F7]'>
            <div className='px-0 pt-10 xl:px-8'>
              <Image
                src={image}
                alt={name}
                width={500}
                height={0}
                sizes='50vw'
                className='h-full max-h-[280px] object-contain'
              />
            </div>
            <div className='absolute bottom-0 left-0 flex w-full flex-col items-center bg-[#5067f4] px-0 py-3 backdrop-blur-[30px] lg:px-6'>
              <p className='text-xl font-normal text-white lg:text-2xl'>{name}</p>
              <p className='text-base font-normal text-white lg:text-lg'>{position}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
