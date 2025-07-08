'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

type Review = {
  quote: string;
  subtitle: string;
  name: string;
  company: string;
};
const reviews: Review[] = [
  {
    quote: 'They’re super fast at coming out with new features and building stable apps.',
    subtitle:
      'Within its first nine weeks, the app received 8,000 users and a 4.7-star rating. The platform is well-designed and hasn’t had many bugs. AMS LLC is fast and efficient at building new features as well as taking scope changes in stride. Expertise and responsiveness are hallmarks of their work.',
    name: 'Saad Saeed',
    company: 'Co-Founder & CEO in Crumb',
  },
  {
    quote: 'Team communicates seamlessly and displays transparency',
    subtitle:
      "Good communication skills spent more time on specification development that helped in defining the end product clearly. Transparent development process with an estimate given for each user story. Interexy delivered a working MVP in a timely fashion satisfying the client's expectations. The team communicated seamlessly and displayed transparency with its development process which ensures an ongoing engagement.",
    name: 'Ramaraju Rudraraju',
    company: 'Director of R&D at UAB School of Medicine',
  },
];

const OurSuccessSlider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className='success-swiper'>
      {reviews.map(({ quote, subtitle, name, company }) => (
        <SwiperSlide key={quote}>
          <div className='flex flex-col gap-y-5'>
            <q className='text-accent text-xl leading-[1.2] font-semibold xl:text-2xl'>
              {quote}
            </q>
            <p className='text-base leading-[1.8] font-light xl:text-xl'>{subtitle}</p>

            <div className='flex flex-col gap-y-1'>
              <span className='text-secondary text-lg leading-[1] font-bold xl:text-2xl'>
                {name}
              </span>
              <span className='text-secondary text-base leading-[1.5] font-normal'>
                {company}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OurSuccessSlider;
