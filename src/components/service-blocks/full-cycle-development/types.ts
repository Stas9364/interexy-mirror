type Point = { title: string; description: string };
export type FullCycleItem = {
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
