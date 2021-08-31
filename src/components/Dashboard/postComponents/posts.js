import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { PostColumn, PostBlock, PostImage, PostInteract, Interaction } from "../styled";

const PostBoard = (props) => {
  const { posts, firebase } = props;
  //click needs to stay if user already liked it
  const [likeClick, setLikeClick] = useState(false);

  const user = firebase.auth().currentUser;
  const { displayName } = user;

  async function callAsync(e, didLike) {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("postPic", "===", `${e.postPic}`)
      .then(postRef => {
        postRef.forEach(doc => {
          if (e.likes) {
            if (didLike === "like") {
              doc.update({
                likes: e.likes + 1,
                userLikes: [...e.userLikes, displayName],
              });
            } else {
              const name = e.userLikes.indexOf(displayName);
              doc.update({
                likes: e.likes - 1,
                userLikes: e.userLikes.splice(name, 1),
              });
            }
          } else {
            doc.update({
              likes: 1,
              userLikes: [displayName],
            });
          }
        })
      });
    
  }

  // Unhandled Rejection (TypeError): postRef.update is not a function
  // https://stackoverflow.com/questions/65686026/update-not-a-function-firebase-firestore

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
