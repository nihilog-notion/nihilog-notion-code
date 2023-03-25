import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { NavLink } from '../Content/Nav';

interface Props {
  styles?: (SerializedStyles | TwStyle);
}

export function Nav({ styles, }: Props) {
  const style = {
    default: css([
      tw` flex items-center gap-2 `,
      styles,
    ]),
  };

  return (
    <>
      <nav css={style.default}>
        <NavLink link='/' label='홈' />
        <NavLink link='/contact' label='연락처' />
        <NavLink link='/posts' label='포스트' />
      </nav>
    </>
  );
}
