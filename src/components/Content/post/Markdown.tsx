import React from 'react';
import { SerializedStyles } from '@emotion/react';
import ReactMarkdown from 'react-markdown';
import tw, { TwStyle, css } from 'twin.macro';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  mdString: string;
}

export function Markdown({ mdString, styles, }: Props) {
  const style = {
    default: [
      tw`  `,
      styles,
    ],
  };

  return (
    <>
      <div css={style.default}>
        <ReactMarkdown>{mdString}</ReactMarkdown>
      </div>
    </>
  );
}
