import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { store } from '@/store';

import '@/styles/tailwind.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps, }: AppProps) => (
  <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  </>
);

export default App;
