import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/index"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import Project from "../components/project"

const IntroHeader = styled.h1``
const About = styled.h3`
  font-weight: 500;
`

const Projects = styled.div`
  margin-top: 100px;
`

const projects = [
  {
    title: "React infinite Caoursel",
    subtitle: "A react infinite owl carousle inspired by Netflix UI.",
    projectLink: "https://mhmdabed11.github.io/react-carousel/",
    githubLink: "https://github.com/Mhmdabed11/react-carousel",
    thumbnail: "/react-carousel.JPG",
  },
  {
    title: "Cinema today",
    subtitle:
      "A NextJs app which showcases different categories of movies and their information using themoviedb.org.",
    projectLink: "https://my-nextjs-app.mohammadaabed.now.sh/",
    githubLink: "https://github.com/Mhmdabed11/cinema-today",
    thumbnail: "/Capture.PNG",
  },
  {
    title: "Github Projects Clone",
    subtitle: "A react app clone of github projects using react-beautiful-dnd.",
    projectLink: "https://mhmdabed11.github.io/github-projects-clone/",
    githubLink: "https://github.com/Mhmdabed11/github-projects-clone",
    thumbnail: "./gprojects.JPG",
  },
  {
    title: "Shortest Path (BFS)",
    subtitle:
      "An app which finds the shortest path between two points in an unweighted graph",
    projectLink: "https://mhmdabed11.github.io/algo-visualizer/",
    githubLink: "https://github.com/Mhmdabed11/algo-visualizer",
    thumbnail: "./algo-visualizer.PNG",
  },
]

const IndexPage = () => {
  const renderProjects = () => {
    return projects.map(
      ({ title, subtitle, projectLink, githubLink, thumbnail }) => (
        <Project
          title={title}
          subtitle={subtitle}
          projectLink={projectLink}
          githubLink={githubLink}
          thumbnail={thumbnail}
        />
      )
    )
  }
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <IntroHeader>
        Hello, I am Mohammad Abed. I am a Front end developer and a Reactjs and
        JavaScript enthusiast.
      </IntroHeader>
      <About>
        I have around 2 years of professional experience in building web
        applications with React, Gatsby and Nextjs.
      </About>
      <hr />
      <Projects>
        <h2>
          <u>Projects</u>
        </h2>

        {renderProjects()}
      </Projects>
    </Layout>
  )
}

export default IndexPage
