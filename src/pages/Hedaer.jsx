import React from 'react'
import { Logoimg } from '../components/Logo/Logo'
import './Header.css'
export const Hedaer = () => {
  return (
    <div>
        <header>
      <nav>
        <div className="logo">
        <Logoimg />
         </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
          <li>
            <a href="/rigster">Rigster</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/TodoPage">Todo</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}
