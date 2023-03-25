import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  label: string;
  date: string;
}

export function PostItemDateProperty({ styles, label, date, }: Props) {
  const style = {
    default: css([
      tw` flex items-center gap-2 `,
      styles,
    ]),
    label: css([
      tw` text-[1rem] py-1 px-2 bg-royal-blue-200 shrink-0 self-start rounded-2 `,
    ]),
    date: css([
      tw` text-[1rem] `,
    ]),
  };

  return (
    <>
      <p css={style.default}>
        <span css={style.label}>{label}</span>
        <span css={style.date}>{date}</span>
      </p>
    </>
  );
}
