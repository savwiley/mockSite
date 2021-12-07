import React, { useState } from "react";
import PropTypes from "prop-types";
import { CreateMessage, MessagePic, MessageCenter } from "../styled";

const AddMessage = (props) => {
  const { image, firebase, pickedImage, didAccept, loading } = props;
  const [message, setMessage] = useState();

  const user = firebase.auth().currentUser;
  const { displayName } = user;
  const profilePic = user.photoURL;
  const userID = user.uid;

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
    let name;
    displayName === null ? (name = "Anonymous") : (name = displayName);
    imgRef
      .getDownloadURL()
      .then((url) => {
        firebase
          .firestore()
          .collection("posts")
          .doc()
          .set({
            postPic: `${url}`,
            postOwner: `${name}`, //display names can change!!!
            ownerPic: `${profilePic}`, //so can this!!
            postMessage: `${message}`,
            userID: `${userID}`,
            date: firebase.firestore.Timestamp.now(),
            userLikes: [],
            likes: 0,
            commenter: [],
            comment: [],
          })
          .then(() => {
            window.location.reload();
            loading(false);
          })
          .catch((err) => {
            alert("Post wasn't saved!");
            console.log(err);
            loading(false);
          });
      })
      .catch((err) => {
        alert("Something went wrong! Wait a few seconds and try again.");
        console.log(err);
        loading(false);
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
            loading(true);
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
  loading: PropTypes.func,
};

export default AddMessage;

// https://firebase.google.com/docs/storage/web/file-metadata

// https://firebase.google.com/docs/database/web/start

// https://firebase.google.com/docs/storage/web/download-files?authuser=0

// ^to fix the images to show up from storage
