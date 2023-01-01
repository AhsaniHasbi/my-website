import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { GlobalContextProvider } from '../contexts/Global-context';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  )
}
