import React, { useState } from 'react';
import { CreateMessage, MessagePic, MessageCenter } from '../styled';

const AddMessage = (props) => {
  const {
    image, firebase, pickedImage, didAccept,
  } = props;
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
        alert('Something went wrong!');
        console.log(err);
      });
  };

  const createPost = () => {
    let imgPostURL;
    // save the imgURL, displayName, profilePic, message, time posted
    // should make .doc() the displayName

    // need to create "download" url's of the images
    // check at the bottom for docs
    imgRef
      .getDownloadURL()
      .then((url) => {
        imgPostURL = url;
      })
      .catch((err) => {
        alert('Something went wrong!');
        console.log(err);
      });

    firebase
      .firestore()
      .collection('posts')
      .doc()
      .set({
        postPic: `${imgPostURL}`,
        postOwner: `${displayName}`,
        ownerPic: `${profilePic}`,
        postMessage: `${message}`,
        date: firebase.firestore.Timestamp.now(),
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        alert('Something went wrong!');
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

// https://firebase.google.com/docs/storage/web/download-files?authuser=0

// ^to fix the images to show up from storage
