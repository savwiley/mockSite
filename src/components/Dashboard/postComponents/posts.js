import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoHeart, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import {
  PostColumn,
  PostBlock,
  PostImage,
  PostInteract,
  Interaction,
} from "../styled";

const PostBoard = (props) => {
  const { posts, firebase } = props;

  const user = firebase.auth().currentUser;

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
                userLikes: [...doc.data().userLikes, user.uid],
              });
            } else if (didLike === "notLike") {
              const name = doc.data().userLikes.indexOf(`${user.uid}`);
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
              userLikes: [user.uid],
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
        <PostBlock key={e.date} background={e.ownerPic}>
          <header>
            <div title={e.postOwner} />
            <Link to={`/${e.userID}`}>{e.postOwner}</Link>
          </header>

          <Link to={`/${e.userID}/${e.date.seconds}`}>
            <PostImage background={e.postPic} />
          </Link>

          <PostInteract>
            <Interaction>
              <IoHeart
                className={
                  e.userLikes.includes(user.uid) ? "liked" : "disliked"
                }
                onClick={(element) => {
                  const elem = element.nativeEvent.path[1];
                  if (elem.className.baseVal === "liked") {
                    callAsync(`${e.postPic}`, "notLike");
                    elem.setAttribute("class", "disliked");
                  } else {
                    callAsync(`${e.postPic}`, "like");
                    elem.setAttribute("class", "liked");
                  }
                }}
              />
              <Link to={`/${e.userID}/${e.date.seconds}`}>
                <IoChatbubbleEllipsesOutline title="Leave a Comment" />
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
