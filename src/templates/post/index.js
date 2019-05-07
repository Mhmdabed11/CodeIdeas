import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import Layout from "../../components/layout"
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
      <div>{post.frontmatter.title}</div>
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </Layout>
  )
}
export default Post
