import React, { useEffect, useState } from "react";
import firebase from "../firebase";

const UserModal = (props) => {
  const [posts, setPosts] = useState();
  const { user } = props;
  //user added as a "hover effect"

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("postOwner", "==", `${user}`)
      .orderBy("date", "desc");
    const eachPost = await postRef.get();
    setPosts(eachPost);
  };

  useEffect(() => {
    if (!posts) {
      callAsync();
    } else {
      let recent = [];
      posts.forEach(e => {
        //most recent three
      })
      for (let i = 0; i < 3; i++) {
        //use loop??
      }
      //OR should I just put them all in there and display posts[0-2]?
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