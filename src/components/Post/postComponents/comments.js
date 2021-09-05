import React from "react";
import PropTypes from "prop-types";
import { CommentSpace } from "../styled";

const Comments = (props) => {
  const { firebase, id } = props;

  const postComment = () => {
    firebase
      .firestore
      .collection("posts")
      .where(`${date.seconds}`, "==", `${id}`)
      .get()
      .then((query) => {
        query.ref.update({
          //add new map or update current map with comments
        })
      })
  }

  return(
    <CommentSpace>
      <textarea placeholder="Add a comment..."></textarea>
      <button
        onClick={() => {
          postComment();
          //and refresh page
        }}
      >Post</button>
    </CommentSpace>
  )
}

PostModal.propTypes = {
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  id: PropTypes.number,
};

export default Comments;