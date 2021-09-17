import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LikeDropStyle, EachLike, PreviewLikePic } from "./styled";

const LikeDropDown = (props) => {
  const { likedPosts, likeDrop } = props;

  return (
    <LikeDropStyle>
      <b>Liked Posts</b>
      {likedPosts.map((e) => (
        <EachLike key={e.date} userPic={e.ownerPic}>
          <Link
            to={`/${e.postOwner}`}
            title="Profile"
            onClick={() => {
              likeDrop(false);
            }}
          >
            <div />
          </Link>
          <span>
            You liked <b>{e.postOwner}</b>&apos;s post!
          </span>
          <PreviewLikePic imagePic={e.postPic}>
            <Link
              to={`/${e.postOwner}/${e.date.seconds}`}
              title="Post"
              onClick={() => {
                likeDrop(false);
              }}
            >
              <div />
            </Link>
          </PreviewLikePic>
        </EachLike>
      ))}
    </LikeDropStyle>
  );
};

LikeDropDown.propTypes = {
  likedPosts: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  likeDrop: PropTypes.func,
};

export default LikeDropDown;
