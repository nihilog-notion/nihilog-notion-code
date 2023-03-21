import tw, { css } from 'twin.macro';

export const globalStyles = css`
  @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

  * {
    ${tw` box-border m-0 p-0 font-sans `}
  }
`;
