import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section id="banner" className="ctext">
        <div className="wrapper">
          <div className="container d-flex align-items-center justify-content-center h-100">
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
              <FontAwesomeIcon icon={faGithub} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faLinkedin} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faTwitterSquare} className="fa-tool" />
            </div>
          </div>
          <div className="row ctext">
            <div className="col">
              <FontAwesomeIcon icon={faGithub} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faLinkedin} className="fa-tool" />
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faTwitterSquare} className="fa-tool" />
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
