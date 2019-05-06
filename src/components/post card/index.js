import React from "react"
import {
  PostContainer,
  PostTitle,
  PostDate,
  PostDescription,
} from "./postcard.style"
const PostCard = ({ title, description, date }) => {
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostDate>{date}</PostDate>
      <PostDescription>{description}</PostDescription>
    </PostContainer>
  )
}

export default PostCard
