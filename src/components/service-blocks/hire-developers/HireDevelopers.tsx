import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';

type Developers = {
  name: string;
  description: string;
  techStack: string;
};

export const HireDevelopers = ({
  title,
  items,
}: {
  title: string;
  items: Developers[];
}) => {
  return (
    <Section className='bg-[#F7F8FC]'>
      <Container>
        <BlockTitle title={title} />

        <div className='grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2'>
          {items.map(({ name, description, techStack }) => (
            <div
              key={name}
              className='flex flex-col gap-y-[16px] rounded-[20px] p-5 shadow-[-5.13234px_2.05294px_12.3176px_rgb(41_47_117_/_0.08)] md:gap-y-5 md:p-[30px]'
            >
              <h3 className='text-xl leading-[1.4] font-bold capitalize md:text-2xl'>
                {name}
              </h3>
              <p className='text-base leading-[1.4] font-bold md:text-lg'>
                {description}
              </p>

              <span className='text-accent text-base leading-[1.4] font-bold'>
                Tech Stack:
              </span>
              <p className='text-base leading-[1.4] font-light'>{techStack}</p>

              <InterexyLink
                href='/contact-us'
                text='Request a full CV'
                variant={'secondary'}
                className='mt-auto max-w-[254px]'
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
