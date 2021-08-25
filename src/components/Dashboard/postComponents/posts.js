import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { PostColumn, PostBlock, PostImage, PostInteract } from "../styled";

const PostBoard = (props) => {
  const { posts, firebase } = props;
  //click needs to stay if user already liked it
  const [likeClick, setLikeClick] = useState(false);

  const user = auth.currentUser;
  const { displayName } = user;

  async function callAsync(e, didLike) {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .doc()
      .where("date", "===", `${e.date}`);
    if (didLike === "like") {
      await postRef.update({
        likes: e.likes + 1,
        //if there are no likes, then what?
        //i should probably create them with likes: 0;
        userLikes: displayName,
      });
    } else {
      await postRef.update({
        likes: e.likes - 1,
        //if there are no likes, then what?
        //i should probably create them with likes: 0;

        //remove name from userLikes
      });
    }
  }

  //maybe you just can't take your likes back

  const readDate = (postDate) => {
    //postDate is e.date.toDate()
    const day = postDate.toLocaleDateString();
    const now = firebase.firestore.Timestamp.now()
      .toDate()
      .toLocaleDateString();
    if (day === now) {
      return `Today at ${postDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    } else {
      return `${postDate.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`;
    }
  };

  return (
    <PostColumn>
      {posts.map((e) => (
        <PostBlock key={e.date}>
          <header>
            <img src={e.ownerPic} alt="profile" />
            {e.postOwner}
          </header>

          <PostImage>
            <Link to={`/${e.postOwner}/${e.date.seconds}`}>
              <img src={e.postPic} alt="post" />
            </Link>
          </PostImage>

          <PostInteract>
            <Interaction>
              {likeClick ? (
                <IoHeart
                  onClick={(e) => {
                    callAsync(e, "notLike");
                    setLikeClick(false);
                  }}
                />
              ) : (
                <IoHeartOutline
                  onClick={(e) => {
                    callAsync(e, "like");
                    setLikeClick(true);
                  }}
                />
              )}
            </Interaction>
            <div className="message">{e.postMessage}</div>
            <div className="date">{`${readDate(e.date.toDate())}`}</div>
          </PostInteract>
        </PostBlock>
      ))}
    </PostColumn>
  );
};

PostBoard.propTypes = {
  posts: PropTypes.array,
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default PostBoard;

// FIX DATE
/**
 * profilePic displayName
 * image
 * message
 * date
 */
