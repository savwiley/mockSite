import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PostHolder } from "../styled.js";

const UserModalPosts = (props) => {
  const { posts } = props;

  return (
    <>
      {posts.map((e) => (
        <Link to={`/${e.userID}/${e.date.seconds}`} key={e.date}>
          <PostHolder background={e.postPic} title={e.postMessage} />
        </Link>
      ))}
    </>
  );
};

UserModalPosts.propTypes = {
  posts: PropTypes.array,
};

export default UserModalPosts;
