import React from 'react';
import { useIsFetching, useIsMutating } from 'react-query';
import tw, { TwStyle, css } from 'twin.macro';
import { CgSpinner } from 'react-icons/cg';

export function IsLoading() {
  const isLoading = useIsFetching();
  const isMutating = useIsMutating();

  const style = css`
    ${tw` text-[4rem] absolute z-[2] w-[100vw] h-[100vh] flex items-center justify-center bg-white `}
    ${(isLoading || isMutating) ? tw` block ` : tw` hidden `}

    & > svg {
      ${tw` animate-spin-2 `}
    }
  `;

  return (
    <>
      <div css={style}>
        <CgSpinner />
      </div>
    </>
  );
}
