import React from "react";
import PropTypes from "prop-types";
import { LikeDropStyle } from "./styled";

const LikeDropDown = (props) => {
  const likedPosts = props;

  return (
    <LikeDropStyle>
      <b>Liked Posts</b>
    </LikeDropStyle>
  );
};

LikeDropDown.propTypes = {
  likedPosts: PropTypes.array,
};

export default LikeDropDown;
