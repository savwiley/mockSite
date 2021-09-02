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
          {/*
            userPic >
            you liked {userName}'s post >
            preview of post
          */}
        </EachLike>
      })}
    </LikeDropStyle>
  );
};

LikeDropDown.propTypes = {
  likedPosts: PropTypes.array,
};

export default LikeDropDown;
