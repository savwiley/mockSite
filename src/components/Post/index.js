import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PostModal from "./postComponents/postModal";
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
          postsArr.push(e.data());
        }
      });
      setMakePostInfo(postsArr);
      setReadyPost(true);
    }
  }, [allPostInfo, date]);

  return (
    <>
      <NavBar />

      {readyPost && <PostModal postInfo={makePostInfo} firebase={firebase} />}

      <Footer />
    </>
  );
};

export default PostPage;
