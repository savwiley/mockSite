import React from "react";
import PropTypes from "prop-types";

const ProfilePosts = (props) => {
  const { posts } = props;

  return (
    <>
    {posts.map((e) => {
      <PostSquare key={e.date}>
        
      </PostSquare>
    })}
    </>
  )
};

PostBoard.propTypes = {
  posts: PropTypes.array,
};

export default ProfilePosts;