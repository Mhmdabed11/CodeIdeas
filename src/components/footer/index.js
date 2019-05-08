import React from "react"
import {
  FooterContainer,
  FooterWrapper,
  Github,
  Twitter,
  SocialMediaLink,
  SocialMediaLinksWrapper,
} from "./footer.style"
const github = require("../../../assets/github.png")
const twitter = require("../../../assets/twitter.svg")
const date = new Date()
const year = date.getFullYear()
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div>© {year} - Mohammad Abed</div>
        <SocialMediaLinksWrapper>
          <SocialMediaLink
            href="https://www.twitter.com/mhmdabed18"
            target="__blank"
          >
            <Twitter src={twitter} />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.github.com/mhmdabed11"
            target="__blank"
          >
            <Github src={github} />
          </SocialMediaLink>
        </SocialMediaLinksWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
