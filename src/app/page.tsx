import {
  Hero,
  InfiniteImageScroll,
  OurAchievements,
  OurServices,
  OurSuccess,
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
        className=' '
        imageClassName=''
      />

      <OurAchievements />

      <OurSuccess />

      <OurServices />

      <TechStack />
    </main>
  );
}
