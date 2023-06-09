import React from 'react';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts';

export default function NotPound404() {
  const style = {
    default: css([
      tw` py-[50px] text-black-base `,
    ]),
  };

  return (
    <>
      <AppLayout title='에러 404'>
        <div css={style.default} id='404-page'>페이지를 찾을 수 없습니다.</div>
      </AppLayout>
    </>
  );
}
