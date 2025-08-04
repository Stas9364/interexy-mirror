import Link from 'next/link';

export const CategoryItems = ({
  category,
  children,
  link,
}: {
  category: string;
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <div key={category} className='space-y-3'>
      <h3 className='text-primary text-md mb-5'>
        {link ? (
          <Link href={link} className='hover:text-accent'>
            {category}
          </Link>
        ) : (
          category
        )}
      </h3>
      <ul className='flex flex-col space-y-2'>{children}</ul>
    </div>
  );
};
