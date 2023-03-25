import React from 'react';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import tw, { TwStyle, css } from 'twin.macro';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'posts' | 'tags' | 'categories';
  styles?: (SerializedStyles | TwStyle);
  number?: number;
}

export function PagingArrow({
  children, disabled, type = 'posts', number, styles,
}: Props) {
  const style = {
    default: css([
      tw`  `,
      styles,
      {
        '&.disabled': [
          tw`  `,
        ],
      },
    ]),
  };

  return (
    <>
      {
        disabled
          ? <span className='disabled' css={style}>{children}</span>
          : <Link href={`/${type}/page/${number}`} css={style}>{children}</Link>
      }
    </>
  );
}
