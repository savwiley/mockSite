import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PostSquare } from "../styled";

const ProfilePosts = (props) => {
  const { profilePosts } = props;

  return (
    <>
      {profilePosts.map((e) => (
        <Link to={`/${e.postOwner}/${e.date.seconds}`} key={e.date}>
          <PostSquare>
            <img src={e.postPic} alt="post" />
          </PostSquare>
        </Link>
      ))}
    </>
  );
};

ProfilePosts.propTypes = {
  profilePosts: PropTypes.array,
};

export default ProfilePosts;
