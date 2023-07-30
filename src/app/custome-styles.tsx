"use client"
import Head from 'next/head';
import { useReducer, useEffect } from 'react';
import { useWindowEvent } from 'react-power-ups';

type ScrollState = {
  position : number,
  hideHeader : boolean
};

const scrollReducer  = (prev : ScrollState) => {
  const newPosition = window.pageYOffset || document.documentElement.scrollTop;
  const distance = newPosition - prev.position;
  return {
    position : newPosition,
    hideHeader : newPosition >  18 && distance > 0
  };
};

export default function CustomeStyles(){
  const [scrollState, dispatchScrollState] = useReducer(scrollReducer, {
    position: 0,
    hideHeader: false
  });

  useWindowEvent('scroll', dispatchScrollState);

  useEffect(() => {
    const newTitle = scrollState.hideHeader ? 'Hidden Header Title' : 'Starlet | Marketplace Influencer';
    document.title = newTitle;
  }, [scrollState.hideHeader]);

  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <style>
        {`
          :root {
            --header-distance: ${scrollState.hideHeader ? '-4rem' : 0}
          }
        `}
      </style>
    </Head>
  )
}