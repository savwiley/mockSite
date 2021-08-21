import React from "react";
import PropTypes from "prop-types";
import { PostSquare } from "../styled";

const ProfilePosts = (props) => {
  const { posts } = props;

  return (
    <>
      {posts.map((e) => {
        <PostSquare key={e.date}>
          <img src={e.postPic} alt="post" />
        </PostSquare>;
      })}
    </>
  );
};

PostBoard.propTypes = {
  posts: PropTypes.array,
};

export default ProfilePosts;
