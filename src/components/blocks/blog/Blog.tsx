import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { type PostT } from './blog-posts';

import { Post } from './Post';

export const Blog = ({
  title,
  subtitle,
  blogPosts,
}: {
  title: string;
  subtitle?: string;
  blogPosts: PostT[];
}) => {
  return (
    <Section>
      <Container>
        <BlockTitle subtitle={subtitle} title={title} />

        <div className='flex grid-cols-3 flex-col gap-4 lg:grid lg:gap-5 2xl:gap-[30px]'>
          {blogPosts.map(post => (
            <Post key={post.title} {...post} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
