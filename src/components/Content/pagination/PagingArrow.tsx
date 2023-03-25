import React from 'react';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import tw, { TwStyle, css } from 'twin.macro';

interface Props {
  children: React.ReactNode;
  link: string;
  disabled?: boolean;
  styles?: (SerializedStyles | TwStyle);
}

export function PagingArrow({
  children, disabled, link, styles,
}: Props) {
  const style = {
    default: css([
      tw` p-2 block shrink-0 w-[40px] bg-black-200 text-black-500 rounded-2 flex items-center justify-center `,
      tw` hover:( bg-black-700 text-white ) `,
      tw` [&.disabled]:( text-black-300 bg-black-100 ) `,
      styles,
    ]),
  };

  return (
    <>
      {
        disabled
          ? <span className='disabled' css={style.default}>{children}</span>
          : <Link href={link} css={style.default}>{children}</Link>
      }
    </>
  );
}
