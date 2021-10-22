import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { Modal, ProfileInfo } from "./styled.js";

const UserModal = (props) => {
  const [posts, setPosts] = useState();
  const [makePosts, setMakePosts] = useState();
  const [profilePic, setProfilePic] = useState();
  const [ready, setReady] = useState(false);
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
        recent.push(e.data());
        !profilePic && setProfilePic(e.data().ownerPic)
      });
      setMakePosts(recent);
      setReady(true);
      //OR should I just put them all in there and display posts[0-2]?
    }
  }, [posts]);

  return (
    <Modal>
      <ProfileInfo profilePic={profilePic}>
        <div />
        <span>{user}</span>
      </ProfileInfo>
    </Modal>
  )
};

export default UserModal;

//a pop-up that appears when icons are hovered over

//either attach it directly to icons or track the mouse

//contains icon, name, 3 most recent user posts