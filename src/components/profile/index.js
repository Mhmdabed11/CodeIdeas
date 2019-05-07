import React from "react"
import {
  ProfileWrapper,
  Info,
  ImageWrapper,
  TwitterLink,
} from "./profile.style"
import Image from "../image"
import { Link } from "gatsby"
const Profile = () => {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <Image alt="profile-picture" rounded={50} />
      </ImageWrapper>

      <Info>
        <TwitterLink href="https://www.twitter.com"> Mohammad Abed</TwitterLink>{" "}
        - Front End Engineer
        <br /> ReactJs enthusiast.
      </Info>
    </ProfileWrapper>
  )
}

export default Profile
