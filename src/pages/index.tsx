import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { getPosts, getRecentPosts } from '@/utils/notion';
import { IPost } from '@/types/page.types';

interface Props {
  posts: IPost[];
}

export default function IndexPage({ posts, }: Props) {
  console.log(posts);

  const style = css`
    ${tw` py-4 `}

    & > h2 {
      ${tw` p-3 bg-black-700 text-white font-900 text-center text-[2rem] `}
    }
  `;

  return (
    <>
      <AppLayout title='홈'>
        <div css={style}>
          <h2>최신 글</h2>
          <div>
            {posts.map((item) => (
              <div key={item.pageId}>{JSON.stringify(item)}</div>
            ))}
          </div>
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
