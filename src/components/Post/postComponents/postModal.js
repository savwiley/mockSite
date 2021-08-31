import React, { /*useState*/ } from "react";
import PropTypes from "prop-types";
import {
  PostBlock,
  PostImage,
  PostContent,
  PostHeader,
  PostMessages,
} from "../styled";

const PostModal = (props) => {
  const postInfo = props;
  //const [likeClick, setLikeClick] = useState(false);
  const post = postInfo.postInfo[0];

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

  /*
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
  */

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
        <PostMessages>{post.postMessage}</PostMessages>
        {/*comment interaction goes here*/}
        {/*
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
            </Interaction>*/}
      </PostContent>
    </PostBlock>
  );
};

PostModal.propTypes = {
  postInfo: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default PostModal;
