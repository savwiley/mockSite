import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoHeart, IoChatbubbleEllipses } from "react-icons/io5";
import { PostSquare, PostOverlay } from "../styled";

const ProfilePosts = (props) => {
  const { profilePosts } = props;

  return (
    <>
      {profilePosts.map((e) => (
        <Link to={`/${e.postOwner}/${e.date.seconds}`} key={e.date}>
          <PostSquare background={e.postPic}>
            <PostOverlay>
              <IoHeart /> {e.likes}
              <IoChatbubbleEllipses /> {e.comment.length}
            </PostOverlay>
          </PostSquare>
        </Link>
      ))}
    </>
  );
};

ProfilePosts.propTypes = {
  profilePosts: PropTypes.array,
};

export default ProfilePosts;
