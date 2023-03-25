import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import tw, { css } from 'twin.macro';
import {
  getDatabase, getPage, getPosts, getSlugs
} from '@/utils/notion';
import { IPostPage } from '@/types/page.types';
import { AppLayout } from '@/layouts';
import { Markdown } from '@/components/Content/post';

interface Props {
  post: IPostPage;
}

export default function PostPage({ post, }: Props) {
  const { page, mdString, } = post;

  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title={page.title}>
        <div css={style}>
          <Markdown mdString={mdString} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs();

  return {
    paths: slugs.map((item) => ({
      params: {
        slug: item,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    slug: string;
  }
}

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const allData = await getDatabase();
  const [ data, ] = getPosts(allData.data)
    .filter((item) => item.slug === params.slug);

  const post = await getPage(data.slug);

  return {
    props: {
      post,
    },
  };
};
