import React, { useEffect, useState } from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  type?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');
  children: React.ReactNode;
}

export function Heading({ styles, type: Type = 'h1', children, }: Props) {
  const [ size, setSize, ] = useState<TwStyle>(null);

  useEffect(() => {
    switch (Type) {
      case 'h2':
        setSize(tw`text-[2.5rem]`);
        break;
      case 'h3':
        setSize(tw`text-[2rem]`);
        break;
      case 'h4':
        setSize(tw`text-[1.5rem]`);
        break;
      case 'h5':
        setSize(tw`text-[1.25rem]`);
        break;
      case 'h6':
        setSize(tw`text-[1rem]`);
        break;
      default:
        setSize(tw`text-[3rem]`);
        break;
    }
  }, [ Type, ]);

  const style = css([
    tw` font-900 `,
    size,
    styles,
  ]);

  return (
    <>
      <Type css={style}>{children}</Type>
    </>
  );
}
