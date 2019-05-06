import React from "react"
import { ProfileWrapper, Info, ImageWrapper } from "./profile.style"
import Image from "../image"
const Profile = () => {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <Image rounded={50} />
      </ImageWrapper>

      <Info>
        Mohammad Abed - Front End Engineer<br /> ReactJs enthusiast.
      </Info>
    </ProfileWrapper>
  )
}

export default Profile
