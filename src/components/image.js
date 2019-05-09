import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ size, rounded }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-picture.jpg" }) {
        childImageSharp {
          fixed(width: 56, height: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Img
      style={{
        borderRadius: (rounded || "50") + "%",
      }}
      fixed={data.file.childImageSharp.fixed}
    />
  )
}

export default Image
