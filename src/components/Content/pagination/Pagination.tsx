import React, { useEffect, useState } from 'react';
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
  pageArray: number[];
  page: number;
  isFirst: boolean;
  isLast: boolean;
  pages: NotionPages[];
  tag?: string;
  category?: string;
}

export function Pagination({
  pageArray, page, isFirst, isLast, pages, styles, tag, category,
}: Props) {
  const [ link, setLink, ] = useState('');

  useEffect(() => {
    if (!tag && !category) {
      setLink('/posts/page');
    }

    if (tag) {
      setLink(`/tags/${tag}/page`);
    }

    if (category) {
      setLink(`/categories/${category}/page`);
    }
  }, [ tag, category, ]);

  const style = {
    default: css([
      tw` flex items-center justify-center gap-2 `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        <PagingArrow disabled={isFirst} link={`${link}/${pages[0].page}`}>
          <FaAngleDoubleLeft />
        </PagingArrow>
        <PagingArrow disabled={isFirst} link={`${link}/${page - 1}`}>
          <FaAngleLeft />
        </PagingArrow>
        {pageArray.map((item) => (
          <PagingButton key={item} link={`${link}/${item}`} number={item} />
        ))}
        <PagingArrow disabled={isLast} link={`${link}/${page + 1}`}>
          <FaAngleRight />
        </PagingArrow>
        <PagingArrow disabled={isLast} link={`${link}/${pages[pages.length - 1].page}`}>
          <FaAngleDoubleRight />
        </PagingArrow>
      </div>
    </>
  );
}
