import React from 'react';
import tw, { css } from 'twin.macro';

export function PostItem() {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <div css={style}>content</div>
    </>
  );
}
