import React from 'react';
import tw, { css } from 'twin.macro';

export function Header() {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <header css={style}>헤더</header>
    </>
  );
}
