import React, { useCallback, useEffect } from 'react';
import tw, { TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import nihilLogo from '@/images/nihil-logo.png';
import { useInput } from '@/hooks';

interface Props {
  styles?: (SerializedStyles | TwStyle);
}

interface Query extends ParsedUrlQuery {
  keyword: string;
}

export function Header({ styles, }: Props) {
  const router = useRouter();
  const keyword = useInput<HTMLInputElement>('keyword');
  const { keyword: reqKeyword, } = router.query as Query;

  useEffect(() => {
    if (reqKeyword) {
      keyword.setValue(reqKeyword);
    }
  }, [ reqKeyword, ]);

  const onSubmitSearch = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push(`/search?keyword=${keyword.data.value}`);
  }, [ keyword, ]);

  const style = {
    default: [
      tw` flex items-center p-3 mb-5 pb-5 border-b-[5px] border-dotted border-black-200 text-black-base `,
      styles,
    ],
    link: [
      tw` flex gap-3 items-center `,
    ],
    blogName: [
      tw` font-900 text-[1.5rem] `,
    ],
    image: [
      tw` block w-[80px] rounded-2 `,
    ],
    form: [
      tw` flex-[1] shrink-0 text-right flex items-stretch justify-end `,
    ],
    input: [
      tw` shrink-0 w-[400px] rounded-l-3 p-3 border-[2px] border-black-500 outline-none `,
    ],
    button: [
      tw` rounded-r-3 p-3 border-[2px] border-black-500 bg-black-500 text-white w-[80px] flex items-center justify-center `,
      tw` hover:( border-black-700 bg-black-700 ) `,
    ],
  };

  return (
    <>
      <header css={style.default}>
        <h1>
          <Link href='/' css={style.link}>
            <span className='visi-hidden'>니힐 로고</span>
            <img src={nihilLogo.src} alt='nihil-logo' css={style.image} />
            <span css={style.blogName}>니힐 노션 블로그</span>
          </Link>
        </h1>
        <form onSubmit={onSubmitSearch} css={style.form}>
          <input type='text' {...keyword.data} css={style.input} />
          <button css={style.button}>
            <FaSearch />
          </button>
        </form>
      </header>
    </>
  );
}
