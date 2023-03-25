import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  children: React.ReactNode;
}

export function PostList({ styles, children, }: Props) {
  const style = {
    default: css([
      tw` grid grid-cols-3 gap-[30px] `,
      tw` md:( grid-cols-2 ) `,
      tw` sm:( grid-cols-1 ) `,
      tw` xs:( grid-cols-1 ) `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>{children}</div>
    </>
  );
}
