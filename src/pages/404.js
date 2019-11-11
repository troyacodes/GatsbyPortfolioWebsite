import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section id="four-oh-four">
      <div className="wrapper">
        <div className="container d-flex align-items-center h-100 justify-content-center">
          <div className="row">
            <div className="col">
              <h1 className="light-text">404</h1>
              <h2 className="dark-text">Oops...page not found</h2>
              <Link to="/">
                <button className="btn btn-main">Return to homepage</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
