import React from "react";
import PropTypes from "prop-types";
import {
  PostBlock,
  PostImage,
  PostContent,
  PostHeader,
  PostMessages,
} from "../styled";

const PostModal = (props) => {
  const postInfo = props;

  const post = postInfo.postInfo[0];

  /*
  const readDate = (postDate) => {
    //postDate is e.date.toDate()
    const day = postDate.toLocaleDateString();
    const now = firebase.firestore.Timestamp.now()
      .toDate()
      .toLocaleDateString();
    if (day === now) {
      return `Today at ${postDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    } else {
      return `${postDate.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`;
    }
  };
  */

  return (
    <PostBlock>
      <PostImage>
        <img src={post.postPic} alt={post.postMessage} />
      </PostImage>

      <PostContent>
        <PostHeader>
          <img src={post.ownerPic} alt="It's them!" />
          <span>{post.postOwner}</span>
        </PostHeader>
        <PostMessages>{post.postMessage}</PostMessages>
        {/*comment interaction goes here*/}
      </PostContent>
    </PostBlock>
  );
};

PostModal.propTypes = {
  postInfo: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default PostModal;
