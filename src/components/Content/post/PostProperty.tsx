import React from 'react';
import tw, { css } from 'twin.macro';

export function PostProperty() {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <div css={style}>content</div>
    </>
  );
}
