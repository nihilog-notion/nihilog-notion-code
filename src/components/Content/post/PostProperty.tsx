import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
}

export function PostProperty({ styles, }: Props) {
  const style = {
    default: [
      tw`  `,
      styles,
    ],
  };

  return (
    <>
      <div css={style.default}>content</div>
    </>
  );
}
