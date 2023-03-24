import React from 'react';
import Link from 'next/link';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  number: number;
  type?: 'posts' | 'tags' | 'categories';
  styles?: (SerializedStyles | TwStyle);
}

export function PagingButton({ number, type = 'posts', styles, }: Props) {
  const style = {
    default: [
      tw`  `,
      styles,
    ],
  };

  return (
    <>
      <Link href={`/${type}/page/${number}`} css={style.default}>{number}</Link>
    </>
  );
}
