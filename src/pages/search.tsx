import { useRouter } from 'next/router';
import React from 'react';
import tw, { css } from 'twin.macro';
import { ParsedUrlQuery } from 'querystring';
import { AppLayout } from '@/layouts';
import { Heading } from '@/components/Base';

interface Query extends ParsedUrlQuery {
  keyword: string;
}

export default function SearchPage() {
  const { query, } = useRouter();
  const { keyword, } = query as Query;

  const style = css([
    tw`  `,
  ]);

  return (
    <>
      <AppLayout title={`'${keyword}'관련 글 총 ?건`}>
        <div css={style}>
          <Heading type='h2'>검색어 {`'${keyword}'`}</Heading>
        </div>
      </AppLayout>
    </>
  );
}
