import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../firebase";

const PostPage = () => {
  const [allPostInfo, setAllPostInfo] = useState();
  const [makePostInfo, setMakePostInfo] = useState();
  const [readyPost, setReadyPost] = useState(false);
  const id = useParams();
  const date = useParams();

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("postOwner", "==", `${id.displayName}`);
    const eachPost = await postRef.get();
    setAllPostInfo(eachPost);
  }

  useEffect(() => {
    if (!allPostInfo) {
      callAsync();
    } else {
      const postsArr = [];
      allPostInfo.forEach((e) => {
        if (e.data().date.seconds === Number(date.date)) {
          console.log(e.data());
          postsArr.push(e.data());
        }
      });
      setMakePostInfo(postsArr);
      setReadyPost(true);
    }
  }, [allPostInfo]);

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

  return <>{readyPost && console.log(makePostInfo)}</>;
};

export default PostPage;
