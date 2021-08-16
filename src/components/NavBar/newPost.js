import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import firebase from '../firebase';
import ChooseFile from './postComponents/choosePic';
import AcceptFile from './postComponents/acceptPic';
import { PostModal, PostTop, CloseButton } from './styled';

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
