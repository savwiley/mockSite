import React, { useState } from "react";
import ChooseFile from "./postComponents/choosePic.js";
import AcceptFile from "./postComponents/acceptPic.js";
import AddMessage from "./postComponents/addMessage.js";
import { PostModal, PostTop, CloseButton } from "./styled.js";
import { RiCloseLine } from "react-icons/ri";

const NewPost = (props) => {
  const { setShown } = props;
  const [image, setImage] = useState();
  const [accept, setAccept] = useState(false);

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
            didAccept={setAccept}
          />
        ) : (
          <ChooseFile pickedImage={setImage} />
        )}

        {accept ? (
          <AddMessage image={image} />
        ) : (
          <AcceptFile
            image={image}
            pickedImage={setImage}
            didAccept={setAccept}
          />
        )}
      </div>
    </PostModal>
  );
};

export default NewPost;
