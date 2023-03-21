import React from 'react';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts';

export default function IndexPage() {
  const style = css`
    ${tw` py-4 `}

    & > h2 {
      ${tw` p-3 bg-black-700 text-white font-900 text-center text-[2rem] `}
    }
  `;

  return (
    <>
      <AppLayout title='홈'>
        <div css={style}>
          <h2>여기는 그냥 홈페이지</h2>
        </div>
      </AppLayout>
    </>
  );
}
