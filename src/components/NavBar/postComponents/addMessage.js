import React, { useState } from "react";
import PropTypes from "prop-types";
import { CreateMessage, MessagePic, MessageCenter } from "../styled";

const AddMessage = (props) => {
  const { image, firebase, pickedImage, didAccept } = props;
  const [message, setMessage] = useState();

  const user = firebase.auth().currentUser;
  const { displayName } = user;
  const profilePic = user.photoURL;

  const imgURL = `/posts/${displayName}/${image[0].name}`;
  const storageRef = firebase.storage().ref();
  const imgRef = storageRef.child(`${imgURL}`);

  const deletePost = () => {
    imgRef
      .delete()
      .then(() => {
        didAccept(false);
        pickedImage(null);
      })
      .catch((err) => {
        alert("Something went wrong!");
        console.log(err);
      });
  };

  const createPost = () => {
    imgRef
      .getDownloadURL()
      .then((url) => {
        firebase
          .firestore()
          .collection("posts")
          .doc()
          .set({
            postPic: `${url}`,
            postOwner: `${displayName}`,
            ownerPic: `${profilePic}`,
            postMessage: `${message}`,
            date: firebase.firestore.Timestamp.now(),
          })
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            alert("Post wasn't saved!");
            console.log(err);
          });
      })
      .catch((err) => {
        alert("Something went wrong! Wait a few seconds and try again.");
        console.log(err);
      });
  };

  return (
    <CreateMessage>
      <MessagePic>
        <img src={URL.createObjectURL(image[0])} alt="testing" />
      </MessagePic>

      <MessageCenter>
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <input
          type="button"
          value="Post!"
          onClick={() => {
            setTimeout(createPost, 8000);
          }}
        />
        <input
          type="button"
          value="Start Over"
          id="delBtn"
          onClick={() => {
            deletePost();
          }}
        />
      </MessageCenter>
    </CreateMessage>
  );
};

AddMessage.propTypes = {
  image: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pickedImage: PropTypes.func,
  didAccept: PropTypes.func,
};

export default AddMessage;

// https://firebase.google.com/docs/storage/web/file-metadata

// https://firebase.google.com/docs/database/web/start

// https://firebase.google.com/docs/storage/web/download-files?authuser=0

// ^to fix the images to show up from storage
