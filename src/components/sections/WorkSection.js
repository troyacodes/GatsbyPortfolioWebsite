import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function WorkSection() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulItem(sort: { fields: [index], order: ASC }) {
        edges {
          node {
            index
            image {
              file {
                url
              }
            }
            name
            description
            techList
            buttons {
              name
              link
            }
          }
        }
      }
    }
  `)

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
          {data.allContentfulItem.edges.map(item => (
            <div className="col-sm-12 col-md-6">
              <div className="work-item">
                <img src={item.node.image.file.url} alt="" className="w-100" />
                <div className="work-text">
                  <h3>{item.node.name}</h3>
                  <ul className="tech-list">
                    {item.node.techList.map(techItem => (
                      <li>{techItem}</li>
                    ))}
                  </ul>
                  <p>{item.node.description}</p>

                  {item.node.buttons.map(button => (
                    <a
                      href={button.link}
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-main">{button.name}</button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
