import React from 'react';
import { css } from '@emotion/react';
import { AppLayout } from '@/layouts';

export default function NotPound404() {
  const style = css``;

  return (
    <>
      <AppLayout title='에러 404'>
        <div css={style} id='404-page'>페이지를 찾을 수 없습니다.</div>
      </AppLayout>
    </>
  );
}
