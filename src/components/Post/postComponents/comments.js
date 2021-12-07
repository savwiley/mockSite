import React, { useRef } from "react";
import PropTypes from "prop-types";
import { CommentSpace } from "../styled";

const Comments = (props) => {
  const { firebase, id, loading } = props;
  const message = useRef();

  const user = firebase.auth().currentUser;
  const { displayName } = user;

  const postComment = () => {
    let name;
    displayName === null ? (name = "Anon") : (name = displayName);
    firebase
      .firestore()
      .collection("posts")
      .where("date", "==", id)
      .get()
      .then((query) => {
        query.forEach((doc) => {
          if (doc.data().comment) {
            doc.ref.update({
              commenter: [...doc.data().commenter, name],
              comment: [...doc.data().comment, message.current],
            });
          } else {
            doc.ref.update({
              commenter: [name],
              comment: [message.current],
            });
          }
        });
      });
  };

  const reload = () => {
    window.location.reload();
    loading(false);
  };

  return (
    <CommentSpace>
      <textarea
        placeholder="Add a comment..."
        onChange={(e) => {
          message.current = e.target.value;
        }}
      ></textarea>
      <button
        onClick={() => {
          loading(true);
          postComment();
          setTimeout(reload, 8000);
        }}
      >
        Post
      </button>
    </CommentSpace>
  );
};

Comments.propTypes = {
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  id: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  loading: PropTypes.func,
};

export default Comments;
