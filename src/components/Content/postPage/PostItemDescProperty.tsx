import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  description: string;
}

export function PostItemDescProperty({ styles, description, }: Props) {
  const style = {
    default: css([
      tw` text-[1rem] text-justify break-all text-ellipsis line-clamp-4 mb-5 h-[120px] `,
      styles,
    ]),
  };

  return (
    <>
      <p css={style.default}>{description || '설명이 없습니다.'}</p>
    </>
  );
}
