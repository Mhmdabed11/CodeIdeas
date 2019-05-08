import React from "react"
import {
  ProfileWrapper,
  Info,
  ImageWrapper,
  TwitterLink,
} from "./profile.style"
import Image from "../image"
const Profile = () => {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <Image alt="profile-picture" rounded={50} />
      </ImageWrapper>

      <Info>
        <TwitterLink href="https://www.twitter.com/mhmdabed18" target="__blank">
          Mohammad Abed
        </TwitterLink>
        - Front End Engineer
        <br /> ReactJs enthusiast.
      </Info>
    </ProfileWrapper>
  )
}

export default Profile
