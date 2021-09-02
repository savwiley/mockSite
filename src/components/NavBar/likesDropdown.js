import React from "react";
import PropTypes from "prop-types";
import { LikeDropStyle, EachLike } from "./styled";

const LikeDropDown = (props) => {
  const likedPosts = props;

  return (
    <LikeDropStyle>
      <b>Liked Posts</b>
      {likedPosts.forEach(e => {
        <EachLike>
          <img src={e.ownerPic} />
          <span>
            You liked <b>{e.postOwner}</b>'s post!
          </span>
          <PreviewPic>
            <img src={e.postPic} />
          </PreviewPic>
        </EachLike>
      })}
    </LikeDropStyle>
  );
};

LikeDropDown.propTypes = {
  likedPosts: PropTypes.array,
};

export default LikeDropDown;
