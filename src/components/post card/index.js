import React from "react"
import {
  PostContainer,
  PostTitle,
  PostDate,
  PostDescription,
  PostLink,
} from "./postcard.style"
const PostCard = ({ title, description, date, slug }) => {
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostDate>{date}</PostDate>
      <PostDescription>{description}</PostDescription>
      <PostLink to={slug}>Read Here &rarr;</PostLink>
    </PostContainer>
  )
}

export default PostCard
