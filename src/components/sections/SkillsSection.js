import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJsSquare,
  faReact,
  faHtml5,
  faSass,
  faCss3Alt,
  faGit,
  faNpm,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons"

function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>MY SKILLS</h2>
            <span className="underline"></span>
          </div>
        </div>
        <div className="row ctext">
          <div className="col col-md-3">
            <FontAwesomeIcon icon={faHtml5} className="fa-tool" />
            <h5>HTML5</h5>
          </div>
          <div className="col col-md-3">
            <FontAwesomeIcon icon={faCss3Alt} className="fa-tool" />
            <h5>CSS3</h5>
          </div>
          <div className="col col-md-3">
            <FontAwesomeIcon icon={faSass} className="fa-tool" />
            <h5>SASS/SCSS</h5>
          </div>
          <div className="col col-md-3">
            <FontAwesomeIcon icon={faJsSquare} className="fa-tool" />
            <h5>JavaScript</h5>
          </div>
          <div className="col col-md-3">
            <FontAwesomeIcon icon={faReact} className="fa-tool" />
            <h5>React JS</h5>
          </div>
          <div className="col col-md-3">
            <FontAwesomeIcon icon={faGit} className="fa-tool" />
            <h5>Git</h5>
          </div>
          <div className="col col-md-3">
            <FontAwesomeIcon icon={faNpm} className="fa-tool" />
            <h5>NPM</h5>
          </div>
          <div className="col col-md-3">
            <FontAwesomeIcon icon={faWordpress} className="fa-tool" />
            <h5>Wordpress</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
