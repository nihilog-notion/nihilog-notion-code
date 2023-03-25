import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import {
  FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight
} from 'react-icons/fa';
import { SerializedStyles } from '@emotion/react';
import { PagingButton } from './PagingButton';
import { PagingArrow } from './PagingArrow';
import { NotionPages } from '@/types/page.types';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  array: number[];
  page: number;
  isFirst: boolean;
  isLast: boolean;
  pages: NotionPages[];
}

export function Pagination({
  array, page, isFirst, isLast, pages, styles,
}: Props) {
  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>
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
