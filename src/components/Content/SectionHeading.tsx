import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Heading } from '../Base';

interface Props {
  styles?: SerializedStyles;
  type?: ('h2' | 'h3' | 'h4' | 'h5' | 'h6');
  children: React.ReactNode;
}

export function SectionHeading({ styles, type = 'h2', children, }: Props) {
  const style = {
    default: css([
      tw` mb-5 leading-none `,
      styles,
    ]),
  };

  return (
    <>
      <Heading type={type} styles={style.default}>{children}</Heading>
    </>
  );
}
