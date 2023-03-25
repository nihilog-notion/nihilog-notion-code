import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getDatabase, getPages, getPagePosts, getPosts, getPaginationArray
} from '@/utils/notion';
import { IPost, NotionPages } from '@/types/page.types';
import { AppLayout } from '@/layouts';
import { Pagination } from '@/components/Content/pagination';
import { SectionHeading } from '@/components/Content';
import { PostItem, PostList } from '@/components/Content/postPage';

interface Props {
  posts: IPost[];
  pages: NotionPages[];
  pageArray: number[];
  page: number;
  count: number;
}

export default function PostListNumberPage({
  posts, pages, pageArray, page, count,
}: Props) {
  const [ isFirst, setIsFirst, ] = useState(false);
  const [ isLast, setIsLast, ] = useState(false);

  useEffect(() => {
    const numbers = pages.map((item) => item.page);

    if (numbers[0] === page) {
      setIsFirst(true);
    }

    if (numbers[numbers.length - 1] === page) {
      setIsLast(true);
    }
  }, [ pages, page, ]);

  const style = {
    default: css([
      tw` py-[50px] text-black-base `,
    ]),
    postList: css([
      tw` mb-10 `,
    ]),
  };

  return (
    <>
      <AppLayout title={`포스트 목록 (${page}페이지)`}>
        <div css={style.default}>
          <SectionHeading>전체 포스트 {count}건</SectionHeading>
          <PostList styles={style.postList}>
            {posts.map((item) => (
              <PostItem key={item.pageId} item={item} />
            ))}
          </PostList>
          <Pagination
            pageArray={pageArray}
            page={page}
            isFirst={isFirst}
            isLast={isLast}
            pages={pages}
          />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allData = await getDatabase();
  const pages = getPages(allData.data);

  return {
    paths: pages.map((item) => ({
      params: {
        page: item.page.toString(),
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    page: string;
  }
}

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const { page, } = params;

  const allData = await getDatabase();
  const pages = getPages(allData.data);
  const pagePosts = await getPagePosts(pages[Number(page) - 1].id);
  const posts = getPosts(pagePosts);
  const paginationArray = getPaginationArray(pages);

  const [ pageArray, ] = paginationArray.filter((item) => (
    item.includes(Number(page))
  ));

  return {
    props: {
      count: allData.count,
      posts,
      pages,
      pageArray,
      page: Number(page),
    },
  };
};
