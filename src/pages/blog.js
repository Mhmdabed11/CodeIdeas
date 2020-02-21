import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/index"
import SEO from "../components/seo"
import Profile from "../components/profile"
import PostCard from "../components/post card"
const Blog = () => {
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
    <>
      <SEO
        title="Blog"
        keywords={[
          `blog`,
          posts.allMdx.edges[0].node.frontmatter.title,
          `application`,
          `react`,
          "react",
          "javascript",
          "Mohammad Abed",
          "Mohammad",
          "Abed",
        ]}
      />
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
    </>
  )
}

export default Blog
