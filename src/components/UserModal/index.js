import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import UserModalPosts from "./postComponents/postImages.js";
import { Modal, ProfileInfo, PostImages, Stats } from "./styled.js";

const UserModal = (props) => {
  const [posts, setPosts] = useState();
  const [makePosts, setMakePosts] = useState();
  const [profilePic, setProfilePic] = useState();
  const [ready, setReady] = useState(false);
  const [number, setNumber] = useState(0);
  const { user } = props;

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("postOwner", "==", `${user}`)
      .orderBy("date", "desc");
    const eachPost = await postRef.get();
    setPosts(eachPost);
  }

  useEffect(() => {
    if (!posts) {
      callAsync();
    } else {
      let recent = [];
      let postNumber = 0;
      posts.forEach((e) => {
        postNumber += 1;
        if (recent.length < 3) {
          recent.push(e.data());
        }
        !profilePic && setProfilePic(e.data().ownerPic);
      });
      setMakePosts(recent);
      setReady(true);
      setNumber(postNumber);
    }
  }, [posts]);

  return (
    <Modal>
      <ProfileInfo profilePic={profilePic}>
        <div />
        <span>
          <Link to={`/${user}`}>
            {user}
          </Link>
        </span>
      </ProfileInfo>

      <Stats>
        <b>{number}</b>
        posts
      </Stats>

      <PostImages>{ready && <UserModalPosts posts={makePosts} />}</PostImages>
    </Modal>
  );
};

UserModal.propTypes = {
  user: PropTypes.string,
};

export default UserModal;
