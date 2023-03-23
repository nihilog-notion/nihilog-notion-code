import React from 'react';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts';

export default function ContactPage() {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <AppLayout title='연락처'>
        <div css={style}>content</div>
      </AppLayout>
    </>
  );
}
