import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { ProfilePosts } from "./postComponents/profilePosts";
import { ProfileHeader } from "./styled";
import firebase from "../firebase";

const Profile = () => {
  const [profilePosts, setProfilePosts] = useState();
  const [makeProfilePosts, setMakeProfilePosts] = useState();
  const [profilePic, setProfilePic] = useState();
  const [readyProfile, setReadyProfile] = useState(false);
  const id = useParams();

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("postOwner", "==", id.displayName)
      .orderBy("date", "desc");
    const eachPost = await postRef.get();
    setProfilePosts(eachPost);
  }

  useEffect(() => {
    if (!profilePosts) {
      callAsync();
    } else {
      const postsArr = [];
      profilePosts.forEach((e) => {
        postsArr.push(e.data());
        !profilePic && setProfilePic(e.data().ownerPic);
      });
      setMakeProfilePosts(postsArr);
      setReadyProfile(true);
    }
  }, [profilePosts]);

  return (
    <>
      <NavBar />
      <ProfileHeader>
        <img src={profilePic} alt="It's them!" /> 
        {id.displayName}
      </ProfileHeader>

      {readyProfile ? (
        <ProfilePosts posts={makeProfilePosts} />
      ) : (
        "There's nothing here yet."
      )}
    </>
  );
};

export default Profile;

//https://firebase.google.com/docs/auth/admin/manage-users

//useParams creates an object => {displayName: "SavWileyy"}
