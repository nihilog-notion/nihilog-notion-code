import React, { useCallback, useEffect } from 'react';
import tw, { TwStyle, css } from 'twin.macro';
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
    default: css([
      tw` flex items-center mb-5 border-b-[5px] border-dotted border-black-200 text-black-base `,
      tw` lg:( p-3 pb-5 pt-0 ) `,
      tw` md:( p-3 pb-5 pt-0 ) `,
      tw` sm:( flex-col gap-2 py-3 pt-0 ) `,
      tw` xs:( flex-col gap-2 py-3 pt-0 ) `,
      styles,
    ]),
    link: css([
      tw` flex gap-3 items-center `,
    ]),
    blogName: css([
      tw` font-900 text-[1.5rem] `,
    ]),
    image: css([
      tw` block w-[80px] rounded-2 `,
    ]),
    form: css([
      tw` flex-[1] shrink-0 text-right flex items-stretch justify-end `,
      tw` sm:( w-full ) `,
      tw` xs:( w-full ) `,
    ]),
    input: css([
      tw` shrink-0 rounded-l-3 p-3 border-[2px] border-black-500 outline-none `,
      tw` lg:( w-[400px] ) `,
      tw` md:( w-[300px] ) `,
      // TODO: 검색창 부분 반응형 개선 필요.
      tw` sm:( flex-[1] min-w-0 ) `,
      tw` xs:( flex-[1] min-w-0 ) `,
    ]),
    button: css([
      tw` shrink-0 rounded-r-3 p-3 border-[2px] border-black-500 bg-black-500 text-white w-[80px] flex items-center justify-center `,
      tw` hover:( border-black-700 bg-black-700 ) `,
    ]),
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
