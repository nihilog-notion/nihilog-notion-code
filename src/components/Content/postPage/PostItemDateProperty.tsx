import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  label: string;
  date: string;
}

export function PostItemDateProperty({ styles, label, date, }: Props) {
  const style = css([
    tw` flex-[1] shrink-0 `,
    styles,
  ]);

  return (
    <>
      <p css={style}>
        <span>{label}</span>
        <span>{date}</span>
      </p>
    </>
  );
}
