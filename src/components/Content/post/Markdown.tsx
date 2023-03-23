import React from 'react';
import ReactMarkdown from 'react-markdown';
import tw, { css } from 'twin.macro';

interface Props {
  mdString: string;
}

export function Markdown({ mdString, }: Props) {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <div css={style}>
        <ReactMarkdown>{mdString}</ReactMarkdown>
      </div>
    </>
  );
}
