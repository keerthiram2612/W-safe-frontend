import React , {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"
import "../App.css"
export default function Navbar() {
    const [menuOpen ,setMenuOpen]=useState(false)
  return (
   <nav>
    <Link to ='/' className='title'>Way-safe</Link>
    <div className='menu' onClick={()=>{
        setMenuOpen(!menuOpen);
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
        <li>
            <NavLink to = "/about">About</NavLink>
        </li>
        <li>
        <NavLink to = "/marks">Mark Flag</NavLink>
        </li>
        <li>
        <NavLink to = "/friends">Your Friends</NavLink>
        </li>
        <li>
        <NavLink to = "/login">Login</NavLink>
        </li>
    </ul>
   </nav>
  )
}
