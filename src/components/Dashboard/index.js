import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import PostBoard from "./postComponents/posts";
import firebase from "../firebase";

const Dashboard = () => {
  const [posts, setPosts] = useState();
  const [makePosts, setMakePosts] = useState();
  const [ready, setReady] = useState(false);

  async function callAsync() {
    const postRef = firebase.firestore().collection("posts");
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

      {ready ? <PostBoard posts={makePosts} firebase={firebase} /> : "There's nothing here yet."}
    </>
  );
};

export default Dashboard;
