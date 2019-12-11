import React from "react"
import Logo from "../logo"

import { Link } from "react-scroll"
function BannerSection() {
  return (
    <section id="banner">
      <div className="wrapper">
        <div className="container d-flex align-items-center h-100">
          <Logo myClass="banner-logo" />
          <div className="row">
            <div className="col">
              <h1 className="light-text">
                Hello, <br />
                I'm <span className="dark-text">Michael</span>,<br />a Front End
                Developer
              </h1>
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={80}
                duration={500}
              >
                <button className="btn btn-main">View Work</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BannerSection
