import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/layouts/header';
import Navbar from '@/components/layouts/nav';


export default function Home({}) {
  return (
    <div id="__next">
      {/* <Layout> */}
        {/* <Component {...pageProps} /> */}
      {/* </Layout> */}
      <Header />
      <Navbar />
    </div>
  )
}
