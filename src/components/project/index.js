import React from "react"
import Img from "gatsby-image"
import {
  Container,
  Thumbnail,
  ThumbnailImage,
  InfoWrapper,
  Title,
  SubTitle,
  ViewProjectLink,
  GithubRepoLink,
} from "./project.style"

export default function Project({
  title,
  subtitle,
  projectLink,
  githubLink,
  thumbnail,
}) {
  return (
    <Container>
      <Thumbnail>
        <Img
          fluid={thumbnail}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </Thumbnail>

      <InfoWrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <ViewProjectLink target="_blank" href={projectLink}>
          View Project &rarr;
        </ViewProjectLink>
        <GithubRepoLink target="_blank" href={githubLink}>
          Github repo &rarr;
        </GithubRepoLink>
      </InfoWrapper>
    </Container>
  )
}
