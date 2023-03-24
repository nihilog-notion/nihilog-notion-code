import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  description: string;
}

export function PostItemDescProperty({ styles, description, }: Props) {
  const style = css([
    tw` text-[1rem] flex-[1] text-justify break-all text-ellipsis line-clamp-4 `,
    styles,
  ]);

  return (
    <>
      <p css={style}>{description || '설명이 없습니다.'}</p>
    </>
  );
}
