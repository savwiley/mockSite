import React, { useRef } from "react";
import PropTypes from "prop-types";
import { CommentSpace } from "../styled";

const Comments = (props) => {
  const { firebase, id } = props;
  const message = useRef();

  const user = firebase.auth().currentUser;
  const { displayName } = user;

  const postComment = () => {
    firebase
      .firestore()
      .collection("posts")
      .where("date", "==", id)
      .get()
      .then((query) => {
        query.forEach((doc) => {
          if (doc.data().comment) {
            doc.ref.update({
              commenter: [...doc.data().commenter, displayName],
              comment: [...doc.data().comment, message.current],
            })
          } else {
            doc.ref.update({
              commenter: [displayName],
              comment: [message.current],
            })
          }
        })
      })
  }


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
          const elem = document.querySelector("textarea");
          elem.value = "";
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