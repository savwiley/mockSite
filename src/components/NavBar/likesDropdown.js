import React from "react";
import PropTypes from "prop-types";
import { LikeDropStyle, EachLike, PreviewLikePic } from "./styled";

const LikeDropDown = (props) => {
  const likedPosts = props;

  return (
    <LikeDropStyle>
      <b>Liked Posts</b>
      {likedPosts.forEach(e => {
        <EachLike key={e.date}>
          <img src={e.ownerPic} />
          <span>
            You liked <b>{e.postOwner}</b>&apos;s post!
          </span>
          <PreviewLikePic>
            <img src={e.postPic} />
          </PreviewLikePic>
        </EachLike>
      })}
    </LikeDropStyle>
  );
};

LikeDropDown.propTypes = {
  likedPosts: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default LikeDropDown;
