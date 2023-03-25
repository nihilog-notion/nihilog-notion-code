import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { FaRegCopyright } from 'react-icons/fa';
import { siteData } from '@/data';

interface Props {
  styles?: (SerializedStyles | TwStyle);
}

export function Footer({ styles, }: Props) {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();

  const yearString = currentYear > startYear
    ? `${startYear}-${currentYear}`
    : startYear;

  const style = {
    default: css([
      tw` rounded-2 p-3 bg-black-700 text-white `,
      styles,
    ]),
    copy: css([
      tw` flex items-center justify-center `,
    ]),
  };

  return (
    <>
      <footer css={style.default}>
        <p>
          <small css={style.copy}>
            <FaRegCopyright tw='mr-1' /> {yearString}. {siteData.title}.
          </small>
        </p>
      </footer>
    </>
  );
}
