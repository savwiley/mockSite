import React from "react";
import { PostHolder } from "../styled.js";

const UserModalPosts = (props) => {
  const { posts } = props;

  return(
    <>
      {posts.map(e => (
        <PostHolder key={e.date} background={e.postPic}>

        </PostHolder>
      ))}
    </>
  )
};

export default UserModalPosts;