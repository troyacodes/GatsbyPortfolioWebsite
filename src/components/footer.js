import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = ({ siteTitle }) => {
  return (
    <footer id="footer" className="ctext">
      <section id="email">
        <div className="container">
          <div className="row">
            <div className="col">
              <a href="mailto:michael@sixsidemedia.ca">
                michael@sixsidemedia.ca
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="social-links">
        <div className="container">
          <div className="row">
            <div className="col">
              <FontAwesomeIcon icon={faGithub} className="fa-icon" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faTwitterSquare} className="fa-icon" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
            </div>
          </div>
        </div>
      </section>
      <section id="final-footer">
        <span className="footer-line"></span>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="light-text no-margin">
                Copyright © 2019 Michael Troya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
