import React from 'react';
import Link from 'next/link';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { useRouter } from 'next/router';

interface Props {
  link: string;
  number: number;
  styles?: (SerializedStyles | TwStyle);
}

export function PagingButton({ link, number, styles, }: Props) {
  const router = useRouter();

  const cond = router.asPath.includes(number.toString());

  const style = {
    default: css([
      tw` p-2 block shrink-0 w-[70px] rounded-2 flex items-center justify-center leading-none `,
      cond
        ? tw` bg-royal-blue-400 text-white `
        : tw` bg-black-200 text-black-500 `,
      cond ? '' : tw` hover:( bg-black-700 text-white ) `,
      styles,
    ]),
  };

  return (
    <>
      {
        cond
          ? <span css={style.default}>{number}</span>
          : <Link href={link} css={style.default}>{number}</Link>

      }
    </>
  );
}
