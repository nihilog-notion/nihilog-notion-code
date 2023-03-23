import Link from 'next/link';
import React from 'react';
import tw, { css } from 'twin.macro';

interface Props {
  number: number;
  type?: 'posts' | 'tags' | 'categories';
}

export function PagingButton({ number, type = 'posts', }: Props) {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <Link href={`/${type}/page/${number}`} css={style}>{number}</Link>
    </>
  );
}
