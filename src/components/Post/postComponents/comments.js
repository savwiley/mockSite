import React, { useRef } from "react";
import PropTypes from "prop-types";
import { CommentSpace } from "../styled";

const Comments = (props) => {
  const { firebase, id } = props;
  const message = useRef();

  const postComment = () => {
    firebase
      .firestore
      .collection("posts")
      .where(`${id}`, "==", `date.seconds`)
      .get()
      .then((query) => {
        query.ref.update({
          comments: {
            //add new map or update current map with comments
            // https://firebase.google.com/docs/firestore/solutions/index-map-field
            // https://firebase.google.com/docs/reference/rules/rules.Map
          }
        })
      })
  }


  return(
    <CommentSpace>
      <form>
        <textarea 
          placeholder="Add a comment..."
          onChange={(e) => {
            message.current = e.target.value;
          }}
        ></textarea>
        <button
          onClick={() => {
            postComment(/*userName*/);
            //and refresh page
          }}
        >Post</button>
      </form>
    </CommentSpace>
  )
};

Comments.propTypes = {
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  id: PropTypes.number,
};

export default Comments;