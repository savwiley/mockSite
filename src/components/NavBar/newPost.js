import React, { useState } from "react";
import firebase from "../firebase.js";
import ChooseFile from "./postComponents/choosePic.js";
import AcceptFile from "./postComponents/acceptPic.js";
import { PostModal, PostTop, CloseButton } from "./styled.js";
import { RiCloseLine } from "react-icons/ri";

const NewPost = (props) => {
  const { setShown } = props;
  const [image, setImage] = useState(null);

  return (
    <PostModal>
      <div className="inner">
        <PostTop>
          <h2>New Post</h2>

          <CloseButton
            onClick={() => {
              setShown(false);
            }}
          >
            <RiCloseLine />
          </CloseButton>
        </PostTop>

        {image ? (
          <AcceptFile
            image={image}
            pickedImage={setImage}
            firebase={firebase}
          />
        ) : (
          <ChooseFile pickedImage={setImage} />
        )}
      </div>
    </PostModal>
  );
};

export default NewPost;
