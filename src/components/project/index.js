import React from "react"
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
        <ThumbnailImage src={thumbnail} alt={title} />
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
