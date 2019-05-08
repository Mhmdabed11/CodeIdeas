import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { PostTitle, PostDate } from "../../components/post card/postcard.style"
import { css } from "@emotion/core"
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      code {
        body
      }
    }
  }
`
const Post = ({ data: { mdx: post } }) => {
  console.log(post)
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <PostDate>{post.frontmatter.date}</PostDate>
      {/* //break line */}
      <br />
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </Layout>
  )
}
export default Post
