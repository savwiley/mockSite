import React from "react";
import PropTypes from "prop-types";
import { PostSquare } from "../styled";

const ProfilePosts = (props) => {
  const { profilePosts } = props;

  return (
    <>
      {profilePosts.map((e) => (
        <PostSquare key={e.date} >
          <img src={e.postPic} alt="post" />
        </PostSquare>
      ))}
    </>
  );
};

ProfilePosts.propTypes = {
  profilePosts: PropTypes.array,
};

export default ProfilePosts;
