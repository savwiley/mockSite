import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { ModalLoading } from "../Loading";
import PostBoard from "./postComponents/posts";
//import UserModal from "../UserModal";
import firebase from "../firebase";

const Dashboard = () => {
  const [posts, setPosts] = useState();
  const [makePosts, setMakePosts] = useState();
  const [ready, setReady] = useState(false);
  //const [userRead, setUserReady] = useState(false);
  //i need to grab display names somehow

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .orderBy("date", "desc");
    const eachPost = await postRef.get();
    setPosts(eachPost);
  }

  useEffect(() => {
    if (!posts) {
      callAsync();
    } else {
      const postsArr = [];
      posts.forEach((e) => {
        postsArr.push(e.data());
      });
      setMakePosts(postsArr);
      setReady(true);
    }
  }, [posts]);

  return (
    <>
      <NavBar page="dashboard" />

      {ready ? (
        <PostBoard posts={makePosts} firebase={firebase} />
      ) : (
        <ModalLoading />
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
