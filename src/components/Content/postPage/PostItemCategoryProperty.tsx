import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';

interface Props {
  styles?: SerializedStyles;
  category: string;
}

export function PostItemCategoryProperty({ styles, category, }: Props) {
  const cateogryLink = `/categories/category/${category}/page/1`;

  const style = {
    default: css([
      tw` flex items-stretch gap-2 `,
      styles,
    ]),
    label: css([
      tw` text-[1rem] py-1 px-2 bg-royal-blue-200 shrink-0 self-start rounded-2 `,
    ]),
    category: css([
      {
        '& > a': css([
          tw` py-1 px-2 border border-royal-blue-400 text-[1rem] text-royal-blue-400 rounded-2 leading-none `,
          tw` hover:( text-white bg-royal-blue-500 border-royal-blue-500 ) `,
        ]),
      },
    ]),
  };

  return (
    <>
      <p css={style.default}>
        <span css={style.label}>카테고리</span>
        <span css={style.category}>
          <Link href={cateogryLink}>{category}</Link>
        </span>
      </p>
    </>
  );
}
