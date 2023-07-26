"use client"
import Link from 'next/link';
import Head from 'next/head';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useLayoutEffect, useState } from 'react';

export default function Header(){
  const [darkMode, setDarkMode] = useState(true)
  useLayoutEffect(() => {
    if(localStorage.theme === 'dark') setDarkMode(true);
  }, [])
  return(
    <header id="_header">
      <div id="_header-inner">
        <Link href="/" className="-ml-px inline-px flex-col items-end">
          <p className="starlet-font">Starlet</p>
          <div className="-mt-1 inline-block -rotate-6 border border-white bg-gradient-to-br from-sky-600 to-pink-600 px-1.5 text-[9px] font-bold tracking-widest text-white lg:px-3 lg:text-[10px] leading-[1.5rem]">
            MARKETPLACE INFLUENCER
          </div>
        </Link>
        <div className="flex items-center gap-1 self-center">
          <label
            htmlFor="darkmode-toggle"
            className="relative ml-2 inline-flex cursor-pointer items-center text-2xl"
            title="Toggle dark mode"
          >
            <input
              type="checkbox"
              id="darkmode-toggle"
              className="sr-only"
              checked={darkMode}
              onChange={({ target }) => {
                setDarkMode(target.checked);
                localStorage.theme = target.checked ? 'dark' : 'light';
                document.documentElement.classList.toggle('dark', target.checked);
              }}
            />
            <div className="h-7 w-11 rounded-full bg-elm-electric transition-colors dark:bg-slate-500" />
            <div className="absolute left-0 top-0 m-0.5 h-6 w-6 rounded-full bg-white transition-[left] dark:left-4" />
            <HiSun className="absolute top-0 left-0 m-0.5 opacity-100 transition-all dark:left-4 dark:opacity-0" />
            <HiMoon className="absolute top-0 left-0 m-0.5 opacity-0 transition-all dark:left-4 dark:text-typography-light dark:opacity-100" />
          </label>
          <Head>
            <meta
              name="theme-color"
              content={darkMode ? '#25303f' : '#ffffff'}
              key="meta:theme-color"
            />
          </Head>
        </div>
      </div>
    </header>
  )
}