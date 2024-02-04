import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
   <nav>
    <Link to ='/'>W-safe</Link>
    <ul>
        <li>
            <Link to = "/about">About</Link>
        </li>
        <li>
        <Link to = "/marks">Mark flag</Link>
        </li>
        <li>
        <Link to = "/friends">your Friends</Link>
        </li>
    </ul>
   </nav>
  )
}
