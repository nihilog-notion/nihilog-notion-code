import React from 'react';
import Link from 'next/link';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
}

export function Nav({ styles, }: Props) {
  const style = {
    default: [
      tw`  `,
      styles,
    ],
  };

  return (
    <>
      <nav css={style.default}>
        <Link href='/'>홈</Link>
        <Link href='/contact'>연락처</Link>
        <Link href='/posts'>포스트</Link>
      </nav>
    </>
  );
}
