import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons"

const Footer = ({ siteTitle }) => {
  return (
    <footer id="footer" className="ctext">
      <section id="email">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="ctext">Drop me a line</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="mailto:michael@sixsidemedia.ca">
                michael@sixsidemedia.ca
              </a>
            </div>
          </div>
        </div>
      </section>
      <span className="footer-line"></span>
      <section id="final-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <a href="https://github.com/troyacodes" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="fa-icon" />
              </a>
            </div>
            <div className="col">
              <a href="https://github.com/troyacodes" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
              </a>
            </div>
            <div className="col">
              <a href="https://github.com/sixsidemedia" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
              </a>
            </div>
            <div className="col">
              <a href="https://dribbble.com/MichaelTroya" target="_blank">
                <FontAwesomeIcon icon={faDribbble} className="fa-icon" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>© 2019 Michael Troya.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
