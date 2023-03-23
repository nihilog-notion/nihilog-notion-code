import Link from 'next/link';
import React from 'react';
import tw, { css } from 'twin.macro';

export function Nav() {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <nav css={style}>
        <Link href='/'>홈</Link>
        <Link href='/contact'>연락처</Link>
        <Link href='/posts'>포스트</Link>
      </nav>
    </>
  );
}
