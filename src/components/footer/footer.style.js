import styled from "@emotion/styled"
import { Link } from "gatsby"
export const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`
export const FooterWrapper = styled.div`
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Github = styled.img`
  margin-bottom: 0;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%, -50%);
`
export const Twitter = styled.img`
  margin-bottom: 0;
`
export const SocialMediaLink = styled("a")`
  text-decoration: none;
  background-color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  position: relative;
  &:first-of-type {
    margin-right: 0.5rem;
  }
`
export const SocialMediaLinksWrapper = styled.div`
  display: flex;
`
