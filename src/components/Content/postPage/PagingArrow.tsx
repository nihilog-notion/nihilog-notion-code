import Link from 'next/link';
import React from 'react';
import tw, { css } from 'twin.macro';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'posts' | 'tags' | 'categories';
  number?: number;
}

export function PagingArrow({
  children, disabled, type = 'posts', number,
}: Props) {
  const style = css`
    ${tw`  `}
  `;

  const disabledStyle = css`
    ${tw`  `}
  `;

  return (
    <>
      {
        disabled
          ? <span css={disabledStyle}>{children}</span>
          : <Link href={`/${type}/page/${number}`} css={style}>{children}</Link>
      }
      {/* <span css={style}>
        {
          disabled
            ? children
            : <Link href={`/${type}/page/${number}`}>{children}</Link>
        }
      </span> */}
    </>
  );
}
