import tw, { css } from 'twin.macro';

export const globalStyles = css([
  '@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css)',
  {
    '*': [
      tw` box-border m-0 p-0 font-sans `,
      tw` text-[1.2rem] `,
    ],
    body: [
      tw` w-[1280px] mx-auto `,
    ],
    '.visi-hidden': [
      tw` absolute w-[1px] h-[1px] m-[-1px] overflow-hidden [clip-path: polygon(0 0, 0 0, 0 0)] `,
    ],
  },
]);
