import React, { useRef } from "react";
import PropTypes from "prop-types";
import { CommentSpace } from "../styled";

const Comments = (props) => {
  const { firebase, id } = props;
  const message = useRef();

  const user = firebase.auth().currentUser;
  const { displayName } = user;
  console.log(id);

  const postComment = () => {
    firebase
      .firestore()
      .collection("posts")
      .where("date", "==", id)
      .get()
      .then((query) => {
        query.forEach((doc) => {
          doc.ref.update({
            comments: {
              user: displayName,
              content: message.current,
            }
          })
        })
      })
  }
  //add new map or update current map with comments
  // https://firebase.google.com/docs/firestore/solutions/index-map-field
  // https://firebase.google.com/docs/reference/rules/rules.Map


  return(
    <CommentSpace>
      <textarea 
        placeholder="Add a comment..."
        onChange={(e) => {
          message.current = e.target.value;
        }}
      ></textarea>
      <button
        onClick={() => {
          postComment();
          //and refresh page after authentication bug is fixed
        }}
      >Post</button>
    </CommentSpace>
  )
};

Comments.propTypes = {
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  id: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

export default Comments;