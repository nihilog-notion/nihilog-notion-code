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
import { PostItemCategoryProperty } from './PostItemCategoryProperty';

interface Props {
  styles?: (SerializedStyles | TwStyle);
  item: IPost;
}

export function PostItem({ styles, item, }: Props) {
  const [ created, setCreated, ] = useState('');
  const [ updated, setUpdated, ] = useState('');

  const titleLink = `/posts/article/${item.slug}`;

  useEffect(() => {
    setCreated(setDate(item.created));
    setUpdated(setDate(item.updated));
  }, [ item, ]);

  const style = {
    container: css([
      tw` p-3 bg-black-50 items-stretch gap-3 shadow-black-300 shadow-md rounded-3 `,
      styles,
    ]),
    postTitleHeader: css([
      tw` mt-[-10px] text-justify break-all text-ellipsis line-clamp-2 `,
    ]),
    postTitleLink: css([
      tw` inline-block text-royal-blue-400 mb-2 `,
      tw` hover:( text-royal-blue-500 underline ) `,
    ]),
    postInfo: css([
      tw` flex flex-col gap-2 shrink-0 flex-[1] `,
    ]),
    postImage: css([
      tw` block w-full rounded-2 mb-2 `,
    ]),
    postDatePropertyContainer: css([
      tw` flex flex-col justify-center items-start gap-2 `,
    ]),
  };

  return (
    <>
      <div css={style.container}>
        <img src={item.cover || noImage.src} alt={item.title} css={style.postImage} />
        <Heading type='h3' styles={style.postTitleHeader}>
          <Link href={titleLink} css={style.postTitleLink}>
            {item.title}
          </Link>
        </Heading>
        <PostItemDescProperty description={item.description} />
        <div css={style.postDatePropertyContainer}>
          <PostItemDateProperty label='작성일자' date={created} />
          <PostItemDateProperty label='수정일자' date={updated} />
          <PostItemCategoryProperty category={item.category} />
        </div>
      </div>
    </>
  );
}
