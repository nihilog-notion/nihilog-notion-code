import React from 'react';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts';
import { SectionHeading } from '@/components/Content';

export default function ContactPage() {
  const style = {
    default: css([
      tw` py-[50px] text-black-base `,
    ]),
    desc: css([
      tw` flex flex-col gap-5 mb-5 `,
      tw` [>p]:( text-justify break-all ) `,
    ]),
    links: css([
      tw` [a]:(
        text-royal-blue-500
        hover:( text-royal-blue-700 underline )
      ) `,
    ]),
  };

  return (
    <>
      <AppLayout title='연락처'>
        <div css={style.default}>
          <SectionHeading>블로그 소개</SectionHeading>
          <div css={style.desc}>
            <p>본 블로그는 노션(notion)의 Notion API와 데이터베이스를 이용해서 제작한 블로그입니다. 노션에 글을 작성하면 여기에 자동으로 업데이트 되서 편리하긴 하지만 API 자체의 문제인지 뭔지 데이터가 많아지면 그걸 읽어들이는데에 시간이 걸립니다. 그것 빼면 만족스러운 결과입니다.</p>
            <p>프로그래밍, 개발 공부를 하기 위한 블로그이며 제가 공부해왔던 것들 그리고 앞으로 어떤 공부를 하든 노션에 기록할 예정이기 때문에 여기에도 자연스럽게 업데이트될 예정입니다.</p>
          </div>

          <SectionHeading>블로거 소개</SectionHeading>
          <div css={style.desc}>
            <p>저는 웹 상에서 NIHIL이라는 닉네임을 주로 사용합니다. 가끔 그림을 그리고 가끔 글을 씁니다. 평소에는 개발 공부를 하기도 하고 개발을 하면서 시간을 보내기도 합니다. 말은 이렇게 해도 아직 직장이 없는 백수라서 열심히 노력하고 있답니다. 웹 개발 위주의 공부를 해왔고 그 중에서도 프론트의 공부를 많이 했습니다. 백엔드를 못하는 건 아니지만 빈약합니다. 주로 사용하는 기술은 자바스크립트, 타입스크립트, 리액트가 있습니다.</p>
          </div>

          <SectionHeading>연락처</SectionHeading>
          <div css={style.links}>
            <ul>
              <li>
                <span>이메일: </span>
                <a href='mailto:nihil_ncunia@naver.com'>nihil_ncunia@naver.com</a>
              </li>
              <li>
                <span>인스타그램: </span>
                <a
                  href='https://www.instagram.com/nihil_illust/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @nihil_illust
                </a>
              </li>
            </ul>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
