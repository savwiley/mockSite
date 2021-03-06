import React from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { IoHeart } from "react-icons/io5";
import Comments from "./comments";
import {
  PostBlock,
  PostImage,
  PostContent,
  PostHeader,
  PostMessages,
  Interaction,
  Statistics,
  OwnerMessage,
  DeleteButton,
} from "../styled";

const PostModal = (props) => {
  const { userModal, postInfo, firebase, loading } = props;
  const history = useHistory();
  const post = postInfo[0];

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

  const deletePost = (pic) => {
    firebase
      .firestore()
      .collection("posts")
      .where(`postPic`, "==", `${pic}`)
      .get()
      .then((query) => {
        query.forEach((doc) => {
          alert("Post deleted!");
          loading(true);
          doc.ref.delete().then(() => {
            history.push("/");
          });
        });
      })
      .catch((err) => {
        alert("Something went wrong!");
        console.log(err);
      });
  };

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

  const commentLoop = (commenter, comment) => {
    let comments = [];
    for (let i = 0; i < commenter.length; i++) {
      comments.push(
        <div key={comment[i]}>
          <Link to={`/${commenter[i]}`}>
            <b>{commenter[i]}</b>
          </Link>
          <span> {comment[i]}</span>
        </div>
      );
    }
    return comments;
  };
  // consider adding ownerPics to comments

  return (
    <PostBlock>
      <PostImage background={post.postPic} />

      {post.userID === user.uid && (
        <DeleteButton
          onClick={() => {
            if (confirm("Are you sure you want to delete this post?")) {
              deletePost(`${post.postPic}`);
            }
          }}
        >
          Delete
        </DeleteButton>
      )}

      <PostContent>
        <PostHeader background={post.ownerPic}>
          <div
            tabIndex="-1"
            title="Summary"
            onMouseOver={(e) => {
              e.target.focus();
              userModal(true);
            }}
            onBlur={() => {
              userModal(false);
            }}
          />
          <Link to={`/${post.userID}`}>
            <span>{post.postOwner}</span>
          </Link>
        </PostHeader>
        <OwnerMessage>
          <Link to={`/${post.userID}`}>
            <b>{post.postOwner}</b>
          </Link>
          <span> {post.postMessage}</span>
        </OwnerMessage>
        <PostMessages>
          {post.comment && commentLoop(post.commenter, post.comment)}
        </PostMessages>
        <Interaction>
          <IoHeart
            className={post.userLikes.includes(user.uid) ? "liked" : "disliked"}
            onClick={(element) => {
              const elem = element.nativeEvent.path[1];
              if (elem.className.baseVal === "liked") {
                callAsync(`${post.postPic}`, "notLike");
                elem.setAttribute("class", "disliked");
              } else {
                callAsync(`${post.postPic}`, "like");
                elem.setAttribute("class", "liked");
              }
            }}
          />
        </Interaction>
        <Statistics>
          <b>
            {post.likes === 1 ? `${post.likes} like` : `${post.likes} likes`}
          </b>
          {`${readDate(post.date.toDate())}`}
        </Statistics>
        <Comments firebase={firebase} id={post.date} loading={loading} />
      </PostContent>
    </PostBlock>
  );
};

PostModal.propTypes = {
  postInfo: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  userModal: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  loading: PropTypes.func,
};

export default PostModal;
