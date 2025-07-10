import { Container } from '@/components/layout';

export const OurMission = () => {
  return (
    <section className='relative bg-[url(/blocks/our-mission/our-mission.webp)] bg-cover bg-no-repeat mb-[40px] md:mb-[60px] xl:mb-[80px]'>
      <div className='flex justify-start'>
        <div className='w-full bg-[#221c68a6] pt-10 pb-[15px] backdrop-blur-[8px] md:w-1/2 md:py-[60px]'>
          <Container>
            <h2 className='text-2xl leading-[1.4] font-semibold text-white md:text-4xl xl:text-5xl'>
              Our mission
            </h2>
            <hr className='my-5 h-[2px] bg-[#FCFBFF] xl:my-[25px]' />
            <p className='text-base leading-[1.4] font-medium text-white md:text-lg xl:text-xl'>
              Help bridge the gap in communication and reduce the distance between
              businesses and clients. Ensure conditions to feel independent and
              comfortable in a digital environment even without opportunities to interact
              with clients directly.
            </p>
          </Container>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='w-full bg-[#221c68a6] pt-[15px] pb-10 backdrop-blur-[8px] md:w-1/2 md:py-[60px]'>
          <Container>
            <h2 className='text-2xl leading-[1.4] font-semibold text-white md:text-4xl xl:text-5xl'>
              Our goals
            </h2>
            <hr className='my-5 h-[2px] bg-[#FCFBFF] xl:my-[25px]' />
            <p className='text-base leading-[1.4] font-medium text-white md:text-lg xl:text-xl'>
              Help businesses digitize their processes and improve customer experience
              through mobile apps and provide end-to-end services with a strong network of
              partners to build the products from scratch.
            </p>
          </Container>
        </div>
      </div>
    </section>
  );
};
