import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LikeDropStyle, EachLike, PreviewLikePic } from "./styled";

const LikeDropDown = (props) => {
  const { likedPosts } = props;

  return (
    <LikeDropStyle>
      <b>Liked Posts</b>
      {likedPosts.map((e) => (
        <EachLike key={e.date} userPic={e.ownerPic}>
          <Link
            to={`/${e.userID}`}
            title="Profile"
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <div />
          </Link>
          <span>
            You liked <b>{e.postOwner}</b>&apos;s post!
          </span>
          <PreviewLikePic imagePic={e.postPic}>
            <Link
              to={`/${e.userID}/${e.date.seconds}`}
              title="Post"
              onMouseDown={(e) => {
                e.preventDefault();
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
};

export default LikeDropDown;
