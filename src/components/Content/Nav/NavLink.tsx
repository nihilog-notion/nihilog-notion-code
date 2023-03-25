import React, { useEffect, useState } from 'react';
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
  const [ currentStyle, setCurrentStyle, ] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const style = css([
      tw` text-black-700 border-black-700 bg-white `,
      tw` hover:( text-black-700 border-black-700 bg-white ) `,
    ]);

    switch (label) {
      case '포스트':
        setCurrentStyle(router.asPath.includes(link) ? style : null);
        break;
      default:
        setCurrentStyle(router.asPath === link ? style : null);
        break;
    }
  }, [ link, router, ]);

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
