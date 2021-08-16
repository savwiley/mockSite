import React, { useState } from "react";
import AddMessage from "./addMessage";
import { AcceptPic, PreviewPic } from "../styled";

// shows & saves the image to firestore
const PreviewImage = (props) => {
  const { image, pickedImage, didAccept, firebase } = props;

  const user = firebase.auth().currentUser;
  const { displayName } = user;

  const storePic = () => {
    const file = image[0];
    const imgURL = `/posts/${displayName}/${file.name}`;

    const photoStore = firebase.storage().ref(imgURL);
    photoStore.put(file);
  };

  return (
    <>
      <PreviewPic>
        <img src={URL.createObjectURL(image[0])} alt="testing" />
      </PreviewPic>
      <div className="previewBtns">
        <input
          type="button"
          value="Continue"
          onClick={() => {
            storePic();
            didAccept(true);
          }}
        />
        <input
          type="button"
          value="Go Back"
          id="delBtn"
          onClick={() => {
            pickedImage(null);
          }}
        />
      </div>
    </>
  );
};

// switches between the preview & message edit screens
const AcceptFile = (props) => {
  const { image, pickedImage, firebase } = props;
  const [accept, setAccept] = useState(false);

  return (
    <AcceptPic>
      {accept ? (
        <AddMessage
          image={image}
          firebase={firebase}
          pickedImage={pickedImage}
          didAccept={setAccept}
        />
      ) : (
        <PreviewImage
          image={image}
          pickedImage={pickedImage}
          didAccept={setAccept}
          firebase={firebase}
        />
      )}
    </AcceptPic>
  );
};

export default AcceptFile;
