import React, { useState } from "react";
import { CreateMessage, MessagePic, MessageCenter } from "../styled.js";

const AddMessage = (props) => {
  const { image, firebase, pickedImage, didAccept } = props;
  const [message, setMessage] = useState();

  const user = firebase.auth().currentUser;
  const displayName = user.displayName;
  const profilePic = user.photoURL;

  const imgURL = `/posts/${displayName}/${image[0].name}`;

  const deletePost = () => {
    const storageRef = firebase.storage().ref();
    const imgRef = storageRef.child(`${imgURL}`);
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
    //save the imgURL, displayName, profilePic, message, time posted
    //should make .doc() the displayName
    firebase
      .firestore()
      .collection("posts")
      .doc()
      .set({
        postPic: `${imgURL}`,
        postOwner: `${displayName}`,
        ownerPic: `${profilePic}`,
        postMessage: `${message}`,
        date: firebase.firestore.Timestamp.now(),
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        alert("Something went wrong!");
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
        ></textarea>

        <input
          type="button"
          value="Post!"
          onClick={() => {
            createPost();
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

export default AddMessage;

// https://firebase.google.com/docs/storage/web/file-metadata

// https://firebase.google.com/docs/database/web/start
