import {
  Expertise,
  Hero,
  InfiniteImageScroll,
  OurAchievements,
  OurClients,
  OurProducts,
  OurServices,
  OurSuccess,
  Reviews,
  TechStack,
} from '@/components/blocks';
import { images } from '@/components/blocks/infinite-image-scroll/images';

export default function Home() {
  return (
    <main>
      <Hero />

      <InfiniteImageScroll
        images={images}
        second={35}
        imageWidth={100}
        imageHeight={0}
        spacing={0}
        direction='left'
      />

      <OurAchievements />

      <OurSuccess />

      <OurServices />

      <TechStack />

      <Expertise />

      <OurProducts />

      <OurClients />

      <Reviews />
    </main>
  );
}
