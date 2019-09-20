import React from "react"
import { slide as Menu } from "react-burger-menu"
import Logo from "../components/logo"
import { Link, animateScroll as scroll } from "react-scroll"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <header id="header" className="w-100">
        <div className="container">
          <nav id="nav-bar">
            <Logo />
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
              <Link
                onClick={() => this.closeMenu()}
                className="menu-item"
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Work
              </Link>
            </Menu>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
