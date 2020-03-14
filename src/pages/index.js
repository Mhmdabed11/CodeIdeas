import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import Project from "../components/project"
import { graphql } from "gatsby"

const IntroHeader = styled.h1`
  font-size: 35px;
`
const About = styled.h3`
  font-weight: normal;
`

const Projects = styled.div``

const IndexPage = ({ data }) => {
  const renderProjects = () => {
    return data.allProjectsJson.edges.map((node, index) => {
      return (
        <Project
          key={index}
          title={node.node.title}
          subtitle={node.node.subtitle}
          projectLink={node.node.projectLink}
          githubLink={node.node.githubLink}
          thumbnail={
            node.node.thumbnail && node.node.thumbnail.childImageSharp.fluid
          }
        />
      )
    })
  }
  return (
    <>
      <SEO
        title="Home"
        keywords={[
          "blog",
          "javascript",
          "Mohammad Abed",
          "Mohammad",
          "Abed",
          "Mabed",
          `application`,
          `react`,
        ]}
      />

      <IntroHeader>
        Hello, I am Mohammad Abed. I am a Front end developer and a Reactjs and
        JavaScript enthusiast.
      </IntroHeader>

      <About>
        I have around 2 years of professional experience in building web
        applications with React, Gatsby and Nextjs. During my free time, I like
        to do some exciting software projects !
      </About>
      <hr />
      <Projects>
        <h1>
          <u>Things I have done so far &#128187; &#128640;</u>
        </h1>

        {renderProjects()}
      </Projects>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          title
          subtitle
          projectLink
          githubLink
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
