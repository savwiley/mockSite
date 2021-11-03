import React from "react";
import { Link } from "react-router-dom";
import { PostHolder } from "../styled.js";

const UserModalPosts = (props) => {
  const { posts } = props;

  return(
    <>
      {posts.map(e => (
        <Link to={`/${e.postOwner}/${e.date.seconds}`} key={e.date} >
          <PostHolder background={e.postPic} />
        </Link>
      ))}
    </>
  )
};

export default UserModalPosts;
