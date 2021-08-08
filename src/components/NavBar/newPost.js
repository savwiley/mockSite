import React, { useState } from "react";
import ChooseFile from "./components/choosePic.js";
import AcceptFile from "./components/acceptPic.js";
import { PostModal, PostTop, CloseButton } from "./styled.js";
import { RiCloseLine } from "react-icons/ri";

const NewPost = (props) => {
  const { setShown } = props;
  const [ image, setImage ] = useState();

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

        {image ? 
          <AcceptFile image={image} /> 
          : 
          <ChooseFile pickedImage={setImage} 
        />}

      </div>
    </PostModal>
  );
};

export default NewPost;
