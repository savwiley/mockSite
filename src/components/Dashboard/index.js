import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import PostBoard from "./postComponents/posts.js";
import firebase from "../firebase.js";

const Dashboard = () => {
  const [ posts, setPosts ] = useState();
  const [ ready, setReady ] = useState(false);

  async function callAsync() {
    const postRef = firebase.firestore().collection("posts");
    const eachPost = await postRef.get();
    setPosts(eachPost);
  }

  useEffect(() => {
    if (!posts) {
      callAsync();
    } else {
      setReady(true);
      posts.forEach((e) => {
        console.log(posts);
        console.log(e.data());
      });
    };
  });

  return (
    <>
      <NavBar page={"dashboard"} />

      {ready ? <PostBoard posts={posts} /> : "There's nothing here yet."}

    </>
  )
};

export default Dashboard;

