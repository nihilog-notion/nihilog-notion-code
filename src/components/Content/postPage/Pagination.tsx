import React from 'react';
import tw, { css } from 'twin.macro';
import {
  FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight
} from 'react-icons/fa';
import { PagingButton } from './PagingButton';
import { PagingArrow } from './PagingArrow';
import { NotionPages } from '@/types/page.types';

interface Props {
  array: number[];
  page: number;
  isFirst: boolean;
  isLast: boolean;
  pages: NotionPages[];
}

export function Pagination({
  array, page, isFirst, isLast, pages,
}: Props) {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <div css={style}>
        <PagingArrow disabled={isFirst} number={pages[0].page}>
          <FaAngleDoubleLeft />
        </PagingArrow>
        <PagingArrow disabled={isFirst} number={page - 1}>
          <FaAngleLeft />
        </PagingArrow>
        {array.map((item) => (
          <PagingButton key={item} number={item} />
        ))}
        <PagingArrow disabled={isLast} number={page + 1}>
          <FaAngleRight />
        </PagingArrow>
        <PagingArrow disabled={isLast} number={pages[pages.length - 1].page}>
          <FaAngleDoubleRight />
        </PagingArrow>
      </div>
    </>
  );
}
