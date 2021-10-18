import React, { useEffect, useState } from "react";
import firebase from "../firebase";

const UserModal = () => {
  const [posts, setPosts] = useState();
  //user being hovered over? useState();
  //could be added through props after this component is added as a "hover effect"

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .orderBy("date", "desc");
      //just need most recent three
    const eachPost = await postRef.get();
    setPosts(eachPost);
  };

  useEffect(() => {
    if (!posts) {
      callAsync();
    } else {
      //save posts that contain same owner with icon
    }
  }, [posts]);

  return (
    <>
    </>
  )
};

export default UserModal;

//a pop-up that appears when icons are hovered over

//contains icon, name, 3 most recent user posts