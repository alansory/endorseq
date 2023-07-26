
import Link from "next/link"
import {
  HiOutlineViewGrid,
  HiOutlineColorSwatch,
  HiOutlineInformationCircle
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
            <HiOutlineInformationCircle className="text-2xl"/>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}