import React from "react"
import { slide as Menu } from "react-burger-menu"
import logo from "../images/test.svg"
import { Link, animateScroll as scroll } from "react-scroll"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen })
  }
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <header id="header" className="w-100">
        <div className="container">
          <nav id="nav-bar">
            <img src={logo} width="78" alt="" />
            <Menu
              right
              isOpen={this.state.menuOpen}
              onStateChange={state => this.handleStateChange(state)}
            >
              <Link
                onClick={() => this.closeMenu()}
                className="menu-item"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
              <Link
                onClick={() => this.closeMenu()}
                className="menu-item"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Skills
              </Link>
            </Menu>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
