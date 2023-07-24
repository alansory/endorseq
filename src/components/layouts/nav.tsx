
import Link from "next/link"
import {
  HiOutlineViewGrid
} from 'react-icons/hi'

export default function Nav(){
  return(
    <nav id="_nav">
      <ul id="_nav-inner">
        <li className="order-2 flex-1">
          <Link href="/" className="nav-link">
            <HiOutlineViewGrid className="text-2xl"/>
            Endorse
          </Link>
        </li>
        <li className="order-2 flex-1">
          <Link href="/selling" className="nav-link">
            <HiOutlineViewGrid className="text-2xl"/>
            Sell
          </Link>
        </li>
      </ul>
    </nav>
  )
}