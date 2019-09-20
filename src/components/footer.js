import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const Footer = ({ siteTitle }) => {
  return (
    <footer id="footer" className="ctext">
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
              <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            </div>
          </div>
        </div>
      </section>
      <section id="final-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="light-text no-margin">Copyright © 2019 Michael.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
