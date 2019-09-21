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
      logoScrolled: "nav-logo",
      burgerScrolled: "",
    }
  }
  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  componentDidMount() {
    this.prev = window.scrollY
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  listenScrollEvent = e => {
    const window = e.currentTarget
    if (this.prev > window.scrollY) {
      this.setState({ headerScrolledId: "header-scrolled" })
      this.setState({ logoScrolled: "nav-logo-scrolled" })
      this.setState({ burgerScrolled: "burger-bar-scrolled" })
    } else {
      this.setState({ headerScrolledId: "header" })
      this.setState({ logoScrolled: "nav-logo" })
      this.setState({ burgerScrolled: "" })
    }
    this.prev = window.scrollY
  }

  render() {
    return (
      <header id={this.state.headerScrolledId} className="w-100">
        <div>
          <nav id="nav-bar">
            <Link to="top" spy={true} smooth={true} offset={-70} duration={500}>
              <Logo isScrolled={this.state.logoScrolled} />
            </Link>
            <Menu
              right
              isOpen={this.state.menuOpen}
              onStateChange={state => this.handleStateChange(state)}
              burgerBarClassName={this.state.burgerScrolled}
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
