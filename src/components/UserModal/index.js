import React, { useEffect, useState } from "react";
import firebase from "../firebase";

const UserModal = () => {
  const [posts, setPosts] = useState();

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .orderBy("date", "desc");
    const eachPost = await postRef.get();
    setPosts(eachPost);
  };

  useEffect(() => {
    if (!posts) {
      callAsync();
    } else {
      //save posts that contain same owner with icon
    }
  });

  return (
    <>
    </>
  )
};

export default UserModal;

//a pop-up that appears when icons are hovered over

//contains icon, name, 3 most recent user posts