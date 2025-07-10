import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import Image from 'next/image';

type Principle = {
  img: string;
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    description:
      "We believe there's always room for improvement. Excellence isn't just a skill; it's a mindset we all share.",
    img: '/blocks/our-principles/excellence.svg',
    title: 'Excellence',
  },
  {
    description:
      'Building trustworthy, nurturing relationships is crucial for success. Respect is deeply ingrained in our culture.',
    img: '/blocks/our-principles/partnership.svg',
    title: 'Partnership',
  },
  {
    description:
      "We're determined to overcome any challenge and relish the effort it takes. Persistence is the key to success.",
    img: '/blocks/our-principles/tenacity.svg',
    title: 'Tenacity',
  },
  {
    description:
      'True simplicity means removing all confusion. We keep our processes streamlined to maintain focus on the core idea.',
    img: '/blocks/our-principles/lean-and-simple.svg',
    title: 'Lean and Simple',
  },
  {
    description:
      "We stay attentive to details without losing sight of the overall vision. We're practical visionaries, balancing innovation with realism.",
    img: '/blocks/our-principles/visionary.svg',
    title: 'Visionary',
  },
  {
    description:
      'Our diversity and individuality are invaluable. By sharing our unique perspectives, we strengthen our team and progress together.',
    img: '/blocks/our-principles/people.svg',
    title: 'Everyone Brings Value',
  },
];

export const OurPrinciples = () => {
  return (
    <Section className='mb-10 bg-[#F0F1F7] py-[40px] md:mb-[60px] md:py-[60px] xl:mb-[80px] xl:py-[80px]'>
      <Container>
        <BlockTitle title='Our values' subtitle='Our principles' />

        <div className='flex grid-cols-3 flex-col gap-x-[25px] gap-y-[25px] lg:grid lg:gap-y-[35px] xl:gap-x-[30px] xl:gap-y-[40px]'>
          {principles.map(({ img, title, description }) => (
            <div
              key={title}
              className='flex flex-col gap-y-[10px] border-b border-[#D6D6D6] pb-[15px] lg:gap-y-5'
            >
              <div className='flex gap-x-[15px]'>
                <Image src={img} alt={title} width={35} height={35} />
                <p className='text-xl leading-[1.4] font-medium md:text-[26px] xl:text-[32px]'>
                  {title}
                </p>
              </div>
              <p className='text-secondary text-sm leading-[1.4] font-medium md:text-base xl:text-xl'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
