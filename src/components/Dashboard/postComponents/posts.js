import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoHeartOutline, IoHeart, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import {
  PostColumn,
  PostBlock,
  PostImage,
  PostInteract,
  Interaction,
} from "../styled";

const PostBoard = (props) => {
  const { posts, firebase } = props;
  const [likeClick, setLikeClick] = useState(false);

  const user = firebase.auth().currentUser;
  const { displayName } = user;

  async function callAsync(pic, didLike) {
    firebase
      .firestore()
      .collection("posts")
      .where("postPic", "==", `${pic}`)
      .get()
      .then((queries) => {
        queries.forEach((doc) => {
          if (doc.data().likes) {
            if (didLike === "like") {
              doc.ref.update({
                likes: doc.data().likes + 1,
                userLikes: [...doc.data().userLikes, displayName],
              });
            } else if (didLike === "notLike") {
              const name = doc.data().userLikes.indexOf(`${displayName}`);
              const array = doc.data().userLikes;
              array.splice(name, 1);
              doc.ref.update({
                likes: doc.data().likes - 1,
                userLikes: array,
              });
            }
          } else {
            doc.ref.update({
              likes: 1,
              userLikes: [displayName],
            });
          }
        });
      });
  }

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
              {e.userLikes.includes(displayName) || likeClick ? (
                <IoHeart
                  onClick={() => {
                    callAsync(`${e.postPic}`, "notLike");
                    setLikeClick(false);
                  }}
                  className="heart"
                />
              ) : (
                <IoHeartOutline
                  onClick={() => {
                    callAsync(`${e.postPic}`, "like");
                    setLikeClick(true);
                  }}
                  className="heart"
                />
              )}
              <Link to={`/${e.postOwner}/${e.date.seconds}`}>
                <IoChatbubbleEllipsesOutline />
              </Link>
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
