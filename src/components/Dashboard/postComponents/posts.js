import React from "react";
import PropTypes from "prop-types";
import { PostColumn, PostBlock, PostImage, PostInteract } from "../styled";

const PostBoard = (props) => {
  const { posts } = props;

  console.log("running");

  return (
    <PostColumn>
      {posts.map((e) => (
        <PostBlock key={e.date}>
          <header>
            <img src={e.ownerPic} alt="profile" />
            {e.postOwner}
          </header>

          <PostImage>
            <img src={e.postPic} alt="post" />
          </PostImage>

          <PostInteract>
            <div className="message">{e.postMessage}</div>
            <div className="date">{e.data}</div>
          </PostInteract>
        </PostBlock>
      ))}
    </PostColumn>
  );
};

PostBoard.propTypes = {
  posts: PropTypes.array,
}

export default PostBoard;

// FIX DATE
/**
 * profilePic displayName
 * image
 * message
 * date
 */
