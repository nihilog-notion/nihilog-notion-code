import React from 'react';
import Link from 'next/link';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  number: number;
  styles?: (SerializedStyles | TwStyle);
}

export function PagingButton({ number, styles, }: Props) {
  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <Link href={`/poats/page/${number}`} css={style.default}>{number}</Link>
    </>
  );
}
