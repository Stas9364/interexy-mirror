import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';
import { blogPosts } from './blog-posts';

import { Post } from './Post';
import './style.css';

export const Blog = () => {
  return (
    <Section>
      <Container>
        <BlockTitle subtitle='Blog' title='Our latest insights' />

        <div className='flex grid-cols-3 flex-col gap-4 lg:grid lg:gap-5 2xl:gap-[30px]'>
          {blogPosts.map(post => (
            <Post key={post.title} {...post} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
