import React from "react"

import Jabber from "../../images/jabber.png"
import Filmstudy from "../../images/filmstudy.png"
import Socialbug from "../../images/socialbug.png"
import Mt from "../../images/mt.png"

function WorkSection() {
  return (
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
                <h3>Michael Troya Porfolio Website</h3>
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
                  rel="noopener noreferrer"
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
                <h3>Social Bug App</h3>
                <ul className="tech-list">
                  <li>REACT</li>
                  <li>REDUX</li>
                  <li>EXPRESS/NODE</li>
                  <li>FIREBASE</li>
                </ul>
                <p>
                  A fullstack app featuring a backend built with Node/Express on
                  top of Firebase and frontend created using React/Redux and
                  Material UI.
                </p>

                <a
                  href="https://github.com/troyacodes/socialbug-react-frontend"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-main">View Frontend</button>
                </a>
                <a
                  href="https://github.com/troyacodes/socialbug-fb-express-backend"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-main">View Backend</button>
                </a>
                <a
                  href="https://socialbug-bd2eb.firebaseapp.com/"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-main">View Live</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="work-item">
              <img src={Filmstudy} alt="" className="w-100" />
              <div className="work-text">
                <h3>Film Study App</h3>
                <ul className="tech-list">
                  <li>REACT</li>
                  <li>REST API</li>
                  <li>BOOTSTRAP</li>
                  <li>SCSS</li>
                </ul>
                <p>
                  This single page web app retrieves data from the MovieDB API
                  and displays informative stats based on the movies users
                  select
                </p>
                <a
                  href="https://troyacodes-filmstudy.netlify.com/"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-main">View Live</button>
                </a>
                <a
                  href="https://github.com/troyacodes/filmstudy"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-main">View Github</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="work-item">
              <img src={Jabber} alt="" className="w-100" />
              <div className="work-text">
                <h3>Jabber Chat App</h3>
                <ul className="tech-list">
                  <li>NODE JS</li>
                  <li>REACT</li>
                  <li>SOCKET.IO</li>
                </ul>
                <p>
                  A realtime chat app created using web sockets built with
                  Socket.io, Node.js, React.js and custom styling using SCSS
                </p>
                <a
                  href="https://troyacodes-jabber-chat.netlify.com"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-main">View Live</button>
                </a>
                <a
                  href="https://github.com/troyacodes/jabber"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-main">View Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
