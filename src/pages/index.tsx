import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { getPosts, getRecentPosts } from '@/utils/notion';
import { IPost } from '@/types/page.types';
import { PostItem, PostList } from '@/components/Content/postPage';
import { SectionHeading } from '@/components/Content';

interface Props {
  posts: IPost[];
}

export default function IndexPage({ posts, }: Props) {
  const style = css([
    tw` py-[50px] text-black-base `,
  ]);

  return (
    <>
      <AppLayout title='홈'>
        <div css={style}>
          <SectionHeading>Recent Post</SectionHeading>
          <PostList>
            {posts.map((item) => (
              <PostItem key={item.pageId} item={item} />
            ))}
          </PostList>
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getRecentPosts();
  const posts = getPosts(data);

  return {
    props: {
      posts,
    },
  };
};
