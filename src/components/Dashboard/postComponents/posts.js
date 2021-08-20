import React from "react";
import PropTypes from "prop-types";
import { PostColumn, PostBlock, PostImage, PostInteract } from "../styled";

const PostBoard = (props) => {
  const { posts, firebase } = props;

  const readDate = (postDate) => {
    //postDate is e.date.toDate()
    const day = postDate.toLocaleDateString();
    const now = firebase.firestore.Timestamp.now().toDate();
    if (day === now.toLocaleDateString()) {
      return `Today at ${postDate
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`;
    } else {
      return `${now.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`
    }
  }

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
            <div className="date">{`${readDate(e.date.toDate())}`}</div>
          </PostInteract>
        </PostBlock>
      ))}
    </PostColumn>
  );
};

PostBoard.propTypes = {
  posts: PropTypes.array,
  firebase: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
};

export default PostBoard;

// FIX DATE
/**
 * profilePic displayName
 * image
 * message
 * date
 */
