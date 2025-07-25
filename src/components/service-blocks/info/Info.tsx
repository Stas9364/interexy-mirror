import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import type { InfoT } from './info-types';

export const Info = ({
  title,
  items,
  href,
  btn_text = 'Contact Us',
}: {
  title?: string;
  items: InfoT[];
  href?: string;
  btn_text?: string;
}) => {
  return (
    <Section>
      <Container>
        {title && <BlockTitle title={title} />}

        <div className='flex grid-cols-3 flex-col gap-x-4 gap-y-5 md:grid xl:gap-x-6'>
          {items.map(({ subtitle, title, bg_color }) => (
            <div
              key={title}
              className='flex flex-col gap-y-5 rounded-[20px] bg-[#f6f6fd] p-[15px] lg:p-[30px]'
              style={{ backgroundColor: bg_color }}
            >
              <p className='text-xl leading-[1.2] font-bold xl:text-[22px]'>{title}</p>
              <p className='text-base leading-[1.4] font-light xl:mt-auto xl:text-lg'>
                {subtitle}
              </p>
            </div>
          ))}
        </div>

        {href && (
          <div className='flex justify-center'>
            <InterexyLink
              href={href}
              text={btn_text}
              variant='primary'
              className='mt-10 w-[275px]'
            />
          </div>
        )}
      </Container>
    </Section>
  );
};
