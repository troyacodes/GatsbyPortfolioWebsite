import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Test from "../images/cat.jpg"
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
            <div className="row">
              <div className="col">
                <h1 className="light-text">
                  Hello, <br />
                  I'm <span className="dark-text">Michael</span>,<br />a Front
                  End Developer
                </h1>
                <button className="btn btn-main">Contact Me</button>
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
                I am a Toronto-based software developer. I like learning new
                things, building applications, and solving real-world problems
                for real-world stakeholders. I have a background in auditing,
                where I developed skills in collaborative problem-solving,
                overall financial acumen, and data analysis. When I'm not doing
                serious things, I'm aggressively passionate about escape rooms,
                street dance, and board games.
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
                <div className="work-img">
                  <img src={Test} alt="" className="w-100" />
                </div>
                <div className="work-text">
                  <h3>JS WORK</h3>
                  <ul className="tech-list">
                    <li>HTML</li>
                    <li>REACT</li>
                    <li>GIT</li>
                  </ul>
                  <p>
                    Gesture-controlled note-taking app for writing down your
                    thoughts and typing symbols.
                  </p>
                  <button className="btn btn-main">View</button>
                  <button className="btn btn-main">Github</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="work-item">
                <div className="work-img">
                  <img src={Test} alt="" className="w-100" />
                </div>
                <div className="work-text">
                  <h3>JS WORK</h3>
                  <ul className="tech-list">
                    <li>HTML</li>
                    <li>REACT</li>
                    <li>GIT</li>
                  </ul>
                  <p>
                    Gesture-controlled note-taking app for writing down your
                    thoughts and typing symbols.
                  </p>
                  <button className="btn btn-main">View</button>
                  <button className="btn btn-main">Github</button>
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
            <div className="col">
              <FontAwesomeIcon icon={faHtml5} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faCss3Alt} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faSass} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faJsSquare} className="fa-tool" />
            </div>
          </div>
          <div className="row ctext">
            <div className="col">
              <FontAwesomeIcon icon={faReact} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faGit} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faNpm} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faWordpress} className="fa-tool" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
