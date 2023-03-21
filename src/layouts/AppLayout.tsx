import React from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/router';
import { GlobalStyles } from '@/styles';
import {
  Footer, Header, Main, Meta, Nav
} from '@/components/Layout';
import { IAppLayoutProps, IMetaData } from '@/types/site.types';

export function AppLayout({
  children, title, description, keywords, author, image, created, updated, tags, type, section,
}: IAppLayoutProps) {
  const { asPath, } = useRouter();

  const meta: IMetaData = {
    title,
    url: asPath,
    description,
    keywords,
    author,
    image,
    tags,
    type,
    section,
    created,
    updated,
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <Meta meta={meta} />

      <Header />
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
