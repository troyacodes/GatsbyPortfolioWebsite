import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import Reactify from "../images/reactify.jpg"
import Reactulator from "../images/reactulator.jpg"
import Mt from "../images/Mt.jpg"
import Sixside from "../images/sixside.jpg"
import { Link } from "react-scroll"
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

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section id="banner">
        <div className="wrapper">
          <div className="container d-flex align-items-center h-100">
            <Logo myClass="banner-logo" />
            <div className="row">
              <div className="col">
                <h1 className="light-text">
                  Hello, <br />
                  I'm <span className="dark-text">Michael</span>,<br />a Front
                  End Developer
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
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>ABOUT ME</h2>
              <span className="underline"></span>
              <p>
                I am a Toronto-based front-end developer. I like learning new
                things, building applications, and solving real-world problems
                for real-world stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>MY WORK</h2>
              <span className="underline"></span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="work-item">
                <img src={Reactify} alt="" className="w-100" />
                <div className="work-text">
                  <h3>React Spotify App</h3>
                  <ul className="tech-list">
                    <li>JSX</li>
                    <li>REACT</li>
                    <li>REST API</li>
                  </ul>
                  <p>
                    Gesture-controlled note-taking app for writing down your
                    thoughts and typing symbols.
                  </p>
                  <a href="http://troya-music-app.surge.sh/" target="__blank">
                    <button className="btn btn-main">View Live</button>
                  </a>
                  <a
                    href="https://github.com/troyacodes/Music-App"
                    target="__blank"
                  >
                    <button className="btn btn-main">View Github</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="work-item">
                <img src={Reactulator} alt="" className="w-100" />
                <div className="work-text">
                  <h3>React Calculator</h3>
                  <ul className="tech-list">
                    <li>HTML</li>
                    <li>REACT</li>
                    <li>GIT</li>
                  </ul>
                  <p>
                    Gesture-controlled note-taking app for writing down your
                    thoughts and typing symbols.
                  </p>
                  <a
                    href="http://troyacodes-reactulator.surge.sh"
                    target="__blank"
                  >
                    <button className="btn btn-main">View Live</button>
                  </a>
                  <a
                    href="https://github.com/troyacodes/react-calculator"
                    target="__blank"
                  >
                    <button className="btn btn-main">View Github</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="work-item">
                <img src={Mt} alt="" className="w-100" />
                <div className="work-text">
                  <h3>Michael Troya Website</h3>
                  <ul className="tech-list">
                    <li>SCSS</li>
                    <li>REACT</li>
                    <li>GATSBY</li>
                    <li>GRAPHQL</li>
                  </ul>
                  <p>
                    Gesture-controlled note-taking app for writing down your
                    thoughts and typing symbols.
                  </p>
                  <a
                    href="https://github.com/troyacodes/GatsbyPortfolioWebsite"
                    target="__blank"
                  >
                    <button className="btn btn-main">View Github</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="work-item">
                <img src={Sixside} alt="" className="w-100" />
                <div className="work-text">
                  <h3>Six Side Media Website</h3>
                  <ul className="tech-list">
                    <li>HTML</li>
                    <li>JS</li>
                    <li>WORDPRESS</li>
                    <li>PHP</li>
                  </ul>
                  <p>
                    Gesture-controlled note-taking app for writing down your
                    thoughts and typing symbols.
                  </p>
                  <a href="https://sixsidemedia.ca/" target="__blank">
                    <button className="btn btn-main">View Live</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>MY TOOLBOX</h2>
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
    </Layout>
  )
}

export default IndexPage
