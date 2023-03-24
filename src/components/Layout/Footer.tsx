import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
}

export function Footer({ styles, }: Props) {
  const style = {
    default: [
      tw`  `,
      styles,
    ],
  };

  return (
    <>
      <footer css={style.default}>푸터</footer>
    </>
  );
}
