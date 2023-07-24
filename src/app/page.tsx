import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/layout';
import Provider from '@/components/providers/provider';

// type Props = AppProps<{
//   dehydratedState: unknown;
// }>;

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <div id="__next">
      <Layout>
        {/* <Provider> */}
          {/* <Component {...pageProps}/> */}
        {/* </Provider> */}
      </Layout>
    </div>
  )
}
