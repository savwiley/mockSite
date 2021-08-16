import React, { useState } from "react";
import PropTypes from "prop-types";
import { RiCloseLine } from "react-icons/ri";
import firebase from "../firebase";
import ChooseFile from "./postComponents/choosePic";
import AcceptFile from "./postComponents/acceptPic";
import { PostModal, PostTop, CloseButton } from "./styled";

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

NewPost.propTypes = {
  setShown: PropTypes.func,
}

export default NewPost;
