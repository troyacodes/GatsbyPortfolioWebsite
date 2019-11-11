import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import Reactify from "../images/reactify.png"
import Reactulator from "../images/reactulator.png"
import Socialbug from "../images/socialbug.png"
import Mt from "../images/mt.png"
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
                I am a Toronto-based front end developer. Like a lot of people,
                the majority of my skills have been self taught. I started with
                HTML, CSS, and PHP in 2013 while in high school, messing around
                with frameworks like CodeIgniter and Bootstrap. Upon graduation
                I started post-secondary at George Brown College and received a
                diploma in Computer Programming. While in college I started my
                freelance business called Six Side Media, mainly focusing on
                WordPress and graphic design. Recently, I've shifted my focus to
                front end development, learning modern front end practices and
                frameworks. I enjoy learning new things, building applications,
                working with people, and solving real-world problems for
                real-world stakeholders.
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
                    The current static portfolio website you are viewing was
                    created using Gatsby.js, SCSS, and bootstrap.
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
                <img src={Socialbug} alt="" className="w-100" />
                <div className="work-text">
                  <h3>Social Bug Application</h3>
                  <ul className="tech-list">
                    <li>REACT</li>
                    <li>REDUX</li>
                    <li>EXPRESS/NODE</li>
                    <li>FIREBASE</li>
                  </ul>
                  <p>
                    A fullstack app featuring a backend built with Node/Express
                    on top of Firebase and frontend created using React/Redux
                    and Material UI.
                  </p>
                  <a
                    href="https://socialbug-bd2eb.firebaseapp.com/"
                    target="__blank"
                  >
                    <button className="btn btn-main">View Live</button>
                  </a>
                  <a
                    href="https://github.com/troyacodes/socialbug-react-frontend"
                    target="__blank"
                  >
                    <button className="btn btn-main">View Frontend</button>
                  </a>
                  <a
                    href="https://github.com/troyacodes/socialbug-fb-express-backend"
                    target="__blank"
                  >
                    <button className="btn btn-main">View Backend</button>
                  </a>
                </div>
              </div>
            </div>
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
                    Built using React and Spotify's API, this application allows
                    users to sign in, search for music, and add them to a new
                    playlist.
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
                    This is a simple calculator built with React that handles
                    division, multiplication, addition and subtraction.
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
          </div>
        </div>
      </section>
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
    </Layout>
  )
}

export default IndexPage
