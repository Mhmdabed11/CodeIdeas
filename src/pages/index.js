import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import Image from "../components/image"
import SEO from "../components/seo"
import Profile from "../components/profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Profile />
  </Layout>
)

export default IndexPage
