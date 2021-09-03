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
        <EachLike key={e.date}>
          <Link to={`/${e.postOwner}`} title="Profile">
            <img src={e.ownerPic} />
          </Link>
          <span>
            You liked <b>{e.postOwner}</b>&apos;s post!
          </span>
          <PreviewLikePic>
            <Link to={`/${e.postOwner}/${e.date.seconds}`} title="Post">
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
};

export default LikeDropDown;
