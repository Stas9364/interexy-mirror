import {
  InfiniteImageScroll,
  OurClients,
  OurExpertise,
  OurPortfolio,
  OurSuccess,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import {
  Banner,
  HeroService,
  OurProcess,
  Reasons,
  Reviews,
} from '@/components/service-blocks';
import { cases } from '../blockchain-app-development-services/data';
import {
  staffAugmentationBenefits,
  staffAugmentationIndustries,
  staffAugmentationModels,
  staffAugmentationProcess,
  staffAugmentationServices,
  staffAugmentationTechStack,
} from './data';

import { pagesMetadata } from '@/config/pagesMetadata';
import { generateMetadata as createMetadata } from '@/utils/generateMetadata';

const pageKey = 'staff-augmentation-services-for-software-development';
const pageData = pagesMetadata[pageKey];

export const metadata = createMetadata({
  ...pageData,
  slug: pageKey,
});

export default function StaffAugmentationServicesForSoftwareDevelopment() {
  return (
    <>
      <HeroService
        title={'IT Staff Augmentation Services For Software Development'}
        subtitle={
          'Interexy is a leading IT staff augmentation company providing flexible cooperation models for clients depending on their needs, budget and projects. We offer clients experts with specific skills, experts in latest technologies and developers with relevant backgrounds. Our staff augmentation services provide you the support and assistance you need right now.'
        }
        btn_link={'/contact-us'}
        btn_text={'Book A Call'}
        src='/services/staff-augmentation-services-for-software-development/hero.png'
        imgClasses='!object-contain'
      />

      <InfiniteImageScroll
        images={images}
        second={50}
        imageWidth={100}
        imageHeight={0}
        spacing={0}
        direction='left'
        className='mb-[40px] md:mb-[60px] xl:mb-[80px]'
      />

      <Banner
        img_src='/services/staff-augmentation-services-for-software-development/banner.png'
        btn_link='/contact-us'
        btn_title='Get a quote'
        title='Want to strike a cost balance in app development?'
        subtitle='Download costs on app development based on all factors to consider'
      />

      <OurSuccess
        title='IT Staff Augmentation Company'
        text='Have an idea and need developers with unique skills? Looking for engineers with specific backgrounds and expertise? Hire augmented developers from Interexy to get candidates within 5 business days and kick off the project as soon as possible'
        expertise={[
          { number: '70', title: 'Qualified developers' },
          { number: '50', title: 'Products built' },
          { number: '60', title: 'Digital products built' },
          { number: '250', title: 'Combined years of experience' },
        ]}
      />

      <OurClients title='Trusted by' />

      <Reasons
        title='IT Staff Augmentation Services We Provide'
        blockTitleChild={
          <p>
            Looking for dedicated team services with a specific skill set to extend your
            team? Our IT staffing services can help you reduce costs on hiring, fill the
            skill gap and boost the development
          </p>
        }
        items={staffAugmentationServices}
      />

      <OurProcess
        title='Our IT Team Augmentation Process'
        process={staffAugmentationProcess}
      />

      <Banner
        img_src='/services/staff-augmentation-services-for-software-development/banner-2.png'
        title='Discuss a project'
        subtitle='Let’s have a free consultation with our experts to discuss your future blockchain smart contract project'
        btn_title='Get Expert Advice'
        btn_link='/contact-us'
      />

      <Reasons
        title='Experts in The Following Tech Stacke'
        items={staffAugmentationTechStack}
      />

      <OurExpertise
        title='Industries Transformed With Our Augmentation Development Services'
        items={staffAugmentationIndustries}
      />

      <OurExpertise
        title='Flexible Engagement Models'
        items={staffAugmentationModels}
        btn_title='Get the Team'
      />

      <Reasons
        title='Benefits Of Our IT Staff Augmentation Services'
        items={staffAugmentationBenefits}
      />

      <OurPortfolio title='See our experience' cases={cases} />

      <Reviews title='Highly Satisfied Clients' />
    </>
  );
}
