import React from "react"
import { slide as Menu } from "react-burger-menu"
import Logo from "../components/logo"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      headerScrolledId: "header",
      logoScrolled: "nav-logo",
      burgerScrolled: "",
      menuCircle: "menu-square",
      toTopLink: "hide-to-top",
    }
  }
  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  listenScrollEvent = e => {
    const window = e.currentTarget
    if (!window.scrollY == 0) {
      this.setState({
        headerScrolledId: "header header-scrolled",
        logoScrolled: "nav-logo nav-logo-scrolled",
        burgerScrolled: "bm-burger-bars burger-bar-scrolled",
        menuCircle: "menu-square menu-square-scrolled",
        toTopLink: "show-to-top",
      })
    } else {
      this.setState({
        headerScrolledId: "header",
        logoScrolled: "nav-logo",
        burgerScrolled: "",
        menuCircle: "menu-square",
        toTopLink: "hide-to-top",
      })
    }
    this.prev = window.scrollY
  }

  render() {
    return (
      <header className={`${this.state.headerScrolledId} w-100`}>
        <div>
          <nav id="nav-bar">
            <Link to="top" spy={true} smooth={true} offset={0} duration={500}>
              <Logo myClass={this.state.logoScrolled} />
            </Link>
            <div className={this.state.menuCircle}>
              <Menu
                right
                isOpen={this.state.menuOpen}
                onStateChange={state => this.handleStateChange(state)}
                burgerBarClassName={this.state.burgerScrolled}
              >
                <Link
                  onClick={() => this.closeMenu()}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={80}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  onClick={() => this.closeMenu()}
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={80}
                  duration={500}
                >
                  Work
                </Link>
                <Link
                  onClick={() => this.closeMenu()}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={80}
                  duration={500}
                >
                  Skills
                </Link>
                <Link
                  onClick={() => this.closeMenu()}
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={80}
                  duration={500}
                >
                  Contact
                </Link>
                <Link
                  onClick={() => this.closeMenu()}
                  to="top"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  id={this.state.toTopLink}
                >
                  <FontAwesomeIcon icon={faHandPointUp} />
                  &nbsp;Back To Top&nbsp;
                  <FontAwesomeIcon icon={faHandPointUp} />
                </Link>
              </Menu>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
