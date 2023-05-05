import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
