"use client"
import Link from 'next/link';

export default function Header(){
  return(
    <header id="_header">
      <div id="_header-inner">
        <Link href="/" className="flex items-center">
          <img 
            width={320 * 0.48}
            height={118 * 0.48}
            src="/images/star.svg"
            alt="Starlet logo"
            className="h-auto w-10 lg:w-[50px]"
          />
          <p className="starlet-font">Starlet</p>
        </Link>
        <div className="flex items-center">
          <a className="py-6 px-[3vw] h-full custom-border hover:border-black hover:text-black hover:bg-[#FF9800]">
            Login
          </a>
          <a className="py-6 px-[3vw] h-full w-full bg-white border-b-2 border-black text-black hover:text-black hover:bg-[#FF9800] border-l-2">
            Register
          </a>
        </div>
      </div>
    </header>
  )
}