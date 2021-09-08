import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  IoHeartOutline,
  IoHeart,
  //IoPaperPlaneOutline,
} from "react-icons/io5";
import Comments from "./comments";
import {
  PostBlock,
  PostImage,
  PostContent,
  PostHeader,
  PostMessages,
  Interaction,
  Statistics,
  Names,
  Messages,
} from "../styled";

const PostModal = (props) => {
  const { postInfo, firebase } = props;
  const [likeClick, setLikeClick] = useState(false);
  const post = postInfo[0];

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
    <PostBlock>
      <PostImage>
        <img src={post.postPic} alt={post.postMessage} />
      </PostImage>

      <PostContent>
        <PostHeader>
          <img src={post.ownerPic} alt="It's them!" />
          <span>{post.postOwner}</span>
        </PostHeader>
        <PostMessages>
          <b>{post.postOwner}:</b> {post.postMessage}
          <Names>
            {post.commenter.forEach(e => (
              <b>{e}:</b>
            ))}
          </Names>
          <Messages>
            {post.comment.forEach(e => {
              <span>{e}</span>
              {console.log(e)}
            })}
          </Messages>
        </PostMessages>
        <Interaction>
          {post.userLikes.includes(displayName) || likeClick ? (
            <IoHeart
              onClick={() => {
                callAsync(`${post.postPic}`, "notLike");
                setLikeClick(false);
              }}
              className="heart"
              title="Unlike Post"
            />
          ) : (
            <IoHeartOutline
              onClick={() => {
                callAsync(`${post.postPic}`, "like");
                setLikeClick(true);
              }}
              className="heart"
              title="Like Post"
            />
          )}
        </Interaction>
        <Statistics>
          <b>{(post.likes === undefined) ? 
            `0 likes` :
            (post.likes === 1) ? 
            `${post.likes} like` :
            `${post.likes} likes`
          }</b>
          {`${readDate(post.date.toDate())}`}
        </Statistics>
        <Comments firebase={firebase} id={post.date} />
      </PostContent>
    </PostBlock>
  );
};

PostModal.propTypes = {
  postInfo: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default PostModal;
