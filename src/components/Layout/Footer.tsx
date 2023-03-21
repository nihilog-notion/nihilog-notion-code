import React from 'react';
import tw, { css } from 'twin.macro';

export function Footer() {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <footer css={style}>푸터</footer>
    </>
  );
}
