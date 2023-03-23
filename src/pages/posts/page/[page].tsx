import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getDatabase, getPages, getPagePosts, getPosts, getPaginationArray
} from '@/utils/notion';
import { IPost, NotionPages } from '@/types/page.types';
import { AppLayout } from '@/layouts';
import { Pagination } from '@/components/Content/postPage';

interface Props {
  posts: IPost[];
  pages: NotionPages[];
  pagination: number[];
  page: number;
}

export default function PostListNumberPage({
  posts, pages, pagination, page,
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

  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <AppLayout title={`포스트 목록 (${page}페이지)`}>
        <div css={style}>
          <div>
            <h2>글목록</h2>
            {posts.map((item) => (
              <div key={item.pageId}>{JSON.stringify(item)}</div>
            ))}
          </div>
          <div>
            <h2>페이지네이션</h2>
            <Pagination
              array={pagination}
              page={page}
              isFirst={isFirst}
              isLast={isLast}
              pages={pages}
            />
          </div>
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

  const [ pagination, ] = paginationArray.filter((item) => (
    item.includes(Number(page))
  ));

  return {
    props: {
      posts,
      pages,
      pagination,
      page: Number(page),
    },
  };
};
