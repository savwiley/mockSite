import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import firebase from "../firebase";
import UserModalPosts from "./postComponents/postImages.js"
import { Modal, ProfileInfo, PostImages } from "./styled.js";

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
        if (recent.length < 3) {
          recent.push(e.data());
        }
        !profilePic && setProfilePic(e.data().ownerPic)
      });
      setMakePosts(recent);
      setReady(true);
    }
  }, [posts]);

  return (
    <Modal>
      <ProfileInfo profilePic={profilePic}>
        <div />
        <span>{user}</span>
      </ProfileInfo>

      <PostImages>
        {ready && <UserModalPosts posts={makePosts} />}
      </PostImages>
    </Modal>
  )
};

UserModal.propTypes = {
  user: PropTypes.string,
};

export default UserModal;