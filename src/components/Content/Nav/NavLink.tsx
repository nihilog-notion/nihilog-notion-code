import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  styles?: SerializedStyles;
  link: string;
  label: string;
}

export function NavLink({ styles, link, label, }: Props) {
  const router = useRouter();
  const currentStyle = router.pathname === link
    ? [
      tw` text-black-700 border-black-700 bg-white `,
      tw` hover:( text-black-700 border-black-700 bg-white ) `,
    ]
    : null;

  const style = {
    default: css([
      tw` block shrink-0 text-black-700 rounded-2 leading-none py-2 px-3 bg-black-100 border-2 border-black-100 `,
      tw` hover:( bg-black-700 border-black-700 text-white ) `,
      currentStyle,
      styles,
    ]),
  };

  return (
    <>
      <Link href={link} css={style.default}>{label}</Link>
    </>
  );
}
