import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  margin: 50px 0;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`
export const Thumbnail = styled.div`
  width: 200px;
  height: 150px;
`

export const ThumbnailImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`
export const InfoWrapper = styled.div`
  margin-left: 31px;
  @media only screen and (max-width: 1000px) {
    margin-left: 0;
    margin-top: 10px;
  }
`
export const Title = styled.h2`
  margin-bottom: 10px;
`
export const SubTitle = styled.p`
  margin-bottom: 15px;
`

export const ViewProjectLink = styled.a``
export const GithubRepoLink = styled.a`
  margin-left: 30px;
`
