import styled from "@emotion/styled"

export const Container = styled.div`
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  border-radius: 20px;
  background-color: #fff;
  padding: 30px;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 1000px) {
    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
`
export const Thumbnail = styled.div`
  width: 100%;
  border-radius: 5px;
  min-height: 200px;
  height: 200px;
`

export const InfoWrapper = styled.div`
  padding: 16px 0 0 0;
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
