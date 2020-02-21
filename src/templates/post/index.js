import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
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
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <PostDate>{post.frontmatter.date}</PostDate>
      {/* //break line */}
      <br />
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </>
  )
}
export default Post
