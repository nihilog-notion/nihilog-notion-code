import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { getPosts, getRecentPosts } from '@/utils/notion';
import { IPost } from '@/types/page.types';
import { PostItem, PostList } from '@/components/Content/postPage';
import { Heading } from '@/components/Base';

interface Props {
  posts: IPost[];
}

export default function IndexPage({ posts, }: Props) {
  const style = css([
    tw` py-[50px] text-black-base `,
  ]);

  const headingStyle = css([
    tw` text-center mb-10 leading-none `,
  ]);

  return (
    <>
      <AppLayout title='홈'>
        <div css={style}>
          <Heading type='h2' styles={headingStyle}>Recent Post</Heading>
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
