import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';

const NotPound404 = () => {
  const NotPound404Style = css``;

  return (
    <>
      <AppLayout
        title='에러-404'
        url='/404'
      >
        <div css={NotPound404Style} id='404-page'>페이지를 찾을 수 없습니다.</div>
      </AppLayout>
    </>
  );
};

export default NotPound404;
