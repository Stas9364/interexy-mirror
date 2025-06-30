import { Hero } from '@/components/blocks/hero/Hero';
import { images } from '@/components/blocks/infinite-image-scroll/images';
import { InfiniteImageScroll } from '@/components/blocks/infinite-image-scroll/InfiniteImageScroll';



export default function Home() {
  return (
    <main>
      <Hero />

      <InfiniteImageScroll
        images={images}
        second={30}
        imageWidth={100}
        imageHeight={0}
        spacing={0}
        direction='left'
        className=' '
        imageClassName=''
      />
    </main>
  );
}
