import React from "react"
import { slide as Menu } from "react-burger-menu"
import Logo from "../components/logo"
import { Link, animateScroll as scroll } from "react-scroll"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      headerScrolledId: "header",
    }
  }
  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({ headerScrolledId: "header-scrolled" })
      console.log(this.state.headerScrolledId)
    } else {
      this.setState({ headerScrolledId: "header" })
      console.log(this.state.headerScrolledId)
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  render() {
    return (
      <header id={this.state.headerScrolledId} className="w-100">
        <div>
          <nav id="nav-bar">
            <Link to="top" spy={true} smooth={true} offset={-70} duration={500}>
              <Logo />
            </Link>
            <Menu
              right
              isOpen={this.state.menuOpen}
              onStateChange={state => this.handleStateChange(state)}
            >
              <Link
                onClick={() => this.closeMenu()}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
              <Link
                onClick={() => this.closeMenu()}
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
              <Link
                onClick={() => this.closeMenu()}
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
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
