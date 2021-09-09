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
        <EachLike key={e.date}>
          <Link
            to={`/${e.postOwner}`}
            title="Profile"
            onClick={() => {
              likeDrop(false);
            }}
          >
            <img src={e.ownerPic} />
          </Link>
          <span>
            You liked <b>{e.postOwner}</b>&apos;s post!
          </span>
          <PreviewLikePic>
            <Link
              to={`/${e.postOwner}/${e.date.seconds}`}
              title="Post"
              onClick={() => {
                likeDrop(false);
              }}
            >
              <img src={e.postPic} />
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
