import React, { useEffect, useState } from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { IPost } from '@/types/page.types';
import noImage from '@/images/no-image.png';
import { Heading } from '@/components/Base';
import { setDate } from '@/utils';
import { PostItemDateProperty } from './PostItemDateProperty';
import { PostItemDescProperty } from './PostItemDescProperty';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  item: IPost;
}

export function PostItem({ styles, item, }: Props) {
  const [ created, setCreated, ] = useState('');
  const [ updated, setUpdated, ] = useState('');

  const cateogryLink = `/categories/category/${item.category}/page/1`;
  const titleLink = `/posts/article/${item.slug}`;

  useEffect(() => {
    setCreated(setDate(item.created));
    setUpdated(setDate(item.updated));
  }, [ item, ]);

  const style = {
    container: css([
      tw` p-3 bg-black-50 flex items-stretch gap-3 shadow-black-200 shadow-md `,
      styles,
    ]),
    postTitleHeader: css([
      tw` leading-[1] rounded-2 `,
    ]),
    postTitleLink: css([
      tw` block border border-royal-blue-400 bg-royal-blue-50 text-royal-blue-400 p-3 rounded-2 `,
      tw` hover:( border-royal-blue-500 bg-royal-blue-500 text-white ) `,
    ]),
    postInfo: css([
      tw` flex flex-col gap-2 shrink-0 flex-[1] `,
    ]),
    postImage: css([
      tw` block w-full `,
    ]),
    postDatePropertyContainer: css([
      tw` flex items-center `,
    ]),
  };

  return (
    <>
      <div css={style.container}>
        <img src={item.cover || noImage.src} alt={item.title} css={style.postImage} />
      </div>
      {/* <div css={style.container}>
        <img src={item.cover || noImage.src} alt={item.title} css={style.postImage} />
        <div css={style.postInfo}>
          <div>
            <Link href={cateogryLink}>
              {item.category}
            </Link>
            <Heading type='h3' styles={style.postTitleHeader}>
              <Link href={titleLink} css={style.postTitleLink}>
                {item.title}
              </Link>
            </Heading>
          </div>
          <PostItemDescProperty description={item.description} />
          <div css={style.postDatePropertyContainer}>
            <PostItemDateProperty label='작성일자' date={created} />
            <PostItemDateProperty label='수정일자' date={updated} />
          </div>
        </div>
      </div> */}
    </>
  );
}
