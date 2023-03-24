import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  children: React.ReactNode;
}

export function PostList({ styles, children, }: Props) {
  const style = css([
    tw` grid grid-cols-4 gap-[30px] `,
    styles,
  ]);

  return (
    <>
      <div css={style}>{children}</div>
    </>
  );
}
