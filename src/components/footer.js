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
              <a
                href="https://github.com/troyacodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="fa-icon" />
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.linkedin.com/in/michael-troya-b47989115/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
              </a>
            </div>
            <div className="col">
              <a
                href="https://instagram.com/sixsidemedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
              </a>
            </div>
            <div className="col">
              <a
                href="https://dribbble.com/MichaelTroya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDribbble} className="fa-icon" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>© 2020 Michael Troya.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
