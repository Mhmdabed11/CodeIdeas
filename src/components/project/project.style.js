import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  margin: 50px 0;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
`
export const Thumbnail = styled.div`
  width: 200px;
  border-radius: 10px;
  min-height: 162px;
  height: 162px;
  @media only screen and (max-width: 1000px) {
    min-height: 150px;
    height: 150px;
  }
`

export const InfoWrapper = styled.div`
  padding: 16px;
  @media only screen and (max-width: 1000px) {
    margin-left: 0;
    margin-top: 10px;
    padding: 0;
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
