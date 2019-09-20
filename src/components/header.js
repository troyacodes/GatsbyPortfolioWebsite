import React from "react"
import { slide as Menu } from "react-burger-menu"
import logo from "../images/test.svg"

const Header = () => {
  return (
    <header id="header" className="w-100">
      <div className="container">
        <nav id="nav-bar">
          <img src={logo} width="78" alt="" />
          <Menu right>
            <a className="menu-item" href="/">
              About
            </a>
            <a className="menu-item" href="/burgers">
              Skills
            </a>
            <a className="menu-item" href="/pizzas">
              Work
            </a>
            <a className="menu-item" href="/desserts">
              Contact
            </a>
          </Menu>
        </nav>
      </div>
    </header>
  )
}

export default Header
