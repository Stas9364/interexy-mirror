import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { InterexyLink } from '@/components/link/InterexyLink';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Point = { title: string; description: string };
type FullCycleItem = {
  title: string;
  tags: string[];
  description: string;
  points: Point[];
  btn: {
    title: string;
    link: string;
  };
  src_img: string;
};

const fullCycleItems: FullCycleItem[] = [
  {
    title: 'Crumb',
    tags: ['Healthcare & Fitness', 'Germany', 'Mobile', 'iOS', 'Startup'],
    description:
      'Hamburg-based fintech health startup mobile application based on the idea of rewarding users for health & fitness activities',
    points: [
      {
        title: 'Challenge',
        description:
          'Creation of the first MVP for the company from scratch based on a project that was created in a very short time to convince investors of the need for a financial round.',
      },
      {
        title: 'Solution',
        description:
          'We decided to rewrite the whole product from scratch, using native iOS development technologies.HealthKit integration was one of the main reasons for us to make this kind of decision since the app was built using cross-platform React Native technology.',
      },
      {
        title: 'Result',
        description:
          'We got to the top 17th of the German Health & Fitness App Storepage — the product was competing with a multi-million dollar application, and we built an MVP within 1.5 months with under a $20k budget. Awesome user reviews are the best validation of the work done.',
      },
    ],
    btn: {
      title: 'Read case',
      link: 'https://interexy.com/case/crumb-app/',
    },
    src_img: '/services/full-cycle-app-development-services/crumb.png',
  },
  {
    title: 'One Rover',
    tags: ['Android', 'Delivery', 'USA', 'iOS', 'Flutter', 'Cross Platform'],
    description:
      'One Rover is a leader in Rideshare cost savings, options, and satisfaction. A Rover is a professional partner Driver that is dedicated to providing robust commute options to One Rover platform users in boundless locations around the world.',
    points: [
      {
        title: 'Goal',
        description:
          'Develop a stable mobile solution for existing SaaS web-based productsto automate logistics & items scanning activities for employees in cannabis businesses.',
      },
      {
        title: 'Challenge',
        description:
          'Develop a stable mobile solution for existing SaaS web-based productsto automate logistics & items scanning activities for employees in cannabis businesses.',
      },
      {
        title: 'Solution',
        description:
          'One Rover had existing web-based products and tight time-frames outlined by the investors to develop MVP of the app using complex Unity integrations with new-born app development technology — Flutter.',
      },
      {
        title: 'Result',
        description:
          'The app was developed and successfully launched into the Google Play Market — it has 100,000+ users and counting!',
      },
    ],
    btn: {
      title: 'Read case',
      link: 'https://interexy.com/case/one-rover-request-a-ride/',
    },
    src_img: '/services/full-cycle-app-development-services/one-rover.png',
  },
];

export const FullCycleDevelopment = ({
  title,
  items = fullCycleItems,
}: {
  title: string;
  items?: FullCycleItem[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle title={title} />

        <div className='grid grid-cols-1 gap-y-[80px]'>
          {items.map(({ title, tags, description, points, btn, src_img }, idx) => (
            <div
              key={title}
              className={`flex ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
            >
              <div className='flex flex-col justify-center lg:w-1/2'>
                <h3 className='mb-[15px] text-4xl leading-[1.4] font-bold lg:text-5xl'>
                  {title}
                </h3>

                <div className='mb-6 flex flex-wrap gap-3'>
                  {tags.map(tag => (
                    <span
                      key={tag}
                      className='rounded-[10px] border-1 px-6 py-3 text-base leading-[1.4] font-medium lg:text-lg'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className='text-lg leading-[1.4] font-medium'>{description}</p>

                <div>
                  {points.map(({ title, description }) => (
                    <div key={title}>
                      <h4 className='pt-7 pb-4 text-[28px] leading-[1.4] font-bold'>
                        {title}
                      </h4>
                      <p className='text-lg leading-[1.4] font-normal'>{description}</p>
                    </div>
                  ))}
                </div>

                <InterexyLink
                  className='mt-[30px] max-w-[180px]'
                  variant={'primary'}
                  text={btn.title}
                  href={btn.link}
                />
              </div>
              <div className='flex lg:w-1/2'>
                <div className='relative mt-4 block aspect-square h-[500px] w-full lg:h-[711px]'>
                  <Image
                    src={src_img}
                    fill
                    alt={title}
                    sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'
                    className={cn('object-contain')}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-[60px] flex justify-center'>
          <InterexyLink
            className='max-w-[180px]'
            variant={'primary'}
            text={'All cases'}
            href={'https://interexy.com/portfolio/'}
          />
        </div>
      </Container>
    </Section>
  );
};
