import Image from 'next/image';
import Link from 'next/link';
import type { PostT } from './blog-posts';
import type { FC } from 'react';

export const Post: FC<PostT> = ({ title, author, date, excerpt, image, link, tags }) => {
  return (
    <article className='flex h-full flex-col'>
      <Link
        href={link}
        className='group block h-[320px] min-h-[320px] w-full overflow-hidden'
      >
        <Image
          src={image}
          alt='Blog'
          width={500}
          height={0}
          className='h-full w-full object-cover transition-transform duration-1200 group-hover:scale-125'
        />
      </Link>

      <div className='flex h-full flex-col gap-y-5 bg-[#F8F8F8] px-[10px] py-5 lg:p-6'>
        <div className='flex flex-wrap gap-[10px]'>
          {tags.map(({ link, title }, idx) =>
            link ? (
              <Link
                key={idx}
                href={link}
                className='hover: rounded-[5px] bg-[#E9E9E9] p-3 text-sm leading-[1.4] font-normal duration-200 hover:brightness-[0.85] 2xl:text-lg'
              >
                {title}
              </Link>
            ) : (
              <span
                key={idx}
                className='hover: rounded-[5px] bg-[#E9E9E9] p-3 text-sm leading-[1.4] font-normal duration-200 hover:brightness-[0.85] 2xl:text-lg'
              >
                {title}
              </span>
            ),
          )}
        </div>

        <Link href={link} className='mt-auto'>
          <h2 className='hover:text-accent text-lg leading-[1.4] font-bold duration-200 2xl:text-2xl'>
            {title}
          </h2>
        </Link>

        <p className='text-secondary line-clamp text-lg leading-[1.4] font-normal'>
          {excerpt}
        </p>

        <div className='flex items-center justify-between'>
          {author && (
            <span className='text-lg leading-[1.4] font-bold md:font-normal 2xl:text-2xl'>
              {author}
            </span>
          )}
          {date && (
            <span className='text-secondary text-base leading-[1.4] font-normal 2xl:text-lg'>
              {date}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
