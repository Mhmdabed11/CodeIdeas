import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/index"
import Image from "../components/image"
import SEO from "../components/seo"
import Profile from "../components/profile"
import PostCard from "../components/post card"
const IndexPage = () => {
  const posts = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Profile />
      {posts.allMarkdownRemark.edges.map(edge => {
        return (
          <PostCard
            title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            description={edge.node.excerpt}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
