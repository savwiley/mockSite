import React, { useState, useEffect, useParams } from "react";
import firebase from "../firebase";

const PostPage = () => {
  const [ allPostInfo, setAllPostInfo ] = useState();
  const [ makePostInfo, setMakePostInfo ] = useState();
  const [ readyPost, setReadyPost ] = useState(false);
  const { displayName, image } = useParams();

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("postOwner", "==", `${displayName.displayName}`);
    const eachPost = await postRef.get();
    setAllPostInfo(eachPost);
  }

  useEffect(() => {
    if (!allPostInfo) {
      callAsync();
    } else {
      const postsArr = [];
      postsArr.push(allPostInfo.filter(e => {
        e.data().postPic === image.postPic;
      }));
      setMakePostInfo(postsArr);
      setReadyPost(true);
    }
  }, [allPostInfo]);

  return(
    <>
    </>
  )
};

export default PostPage;