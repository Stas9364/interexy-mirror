import { Hero } from '@/components/blocks/hero/Hero';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { InfiniteImageScroll } from '@/components/blocks/infinite-image-scroll/InfiniteImageScroll';
import { OurAchievements } from '@/components/blocks/our-achievements/OurAchievements';

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
    </main>
  );
}
