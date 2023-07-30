
import Link from "next/link"
import {
  HiOutlineViewGrid,
  HiOutlineColorSwatch,
  HiOutlineUserCircle
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
          <Link href="/studio" className="nav-link">
              <HiOutlineColorSwatch className="text-2xl"/>
              Studio
          </Link>
        </li>
        <li className="order-2 flex-1">
          <Link href="/about" className="nav-link">
            <HiOutlineUserCircle className="text-2xl"/>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  )
}