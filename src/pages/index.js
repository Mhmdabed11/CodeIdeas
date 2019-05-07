import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/index"
import SEO from "../components/seo"
import Profile from "../components/profile"
import PostCard from "../components/post card"
const IndexPage = () => {
  const posts = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              date
              slug
              description
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
      {posts.allMdx.edges.map(edge => {
        return (
          <PostCard
            key={edge.node.frontmatter.slug}
            title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            description={edge.node.frontmatter.description}
            slug={edge.node.frontmatter.slug}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
