import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ProfilePosts from "./postComponents/profilePosts";
import { Loading } from "../Loading";
import { ProfileHeader, PostSection } from "./styled";
import firebase, { auth } from "../firebase";

const Profile = () => {
  const [profilePosts, setProfilePosts] = useState();
  const [makeProfilePosts, setMakeProfilePosts] = useState();
  const [profilePic, setProfilePic] = useState();
  const [profileName, setProfileName] = useState();
  const [readyProfile, setReadyProfile] = useState(false);
  const id = useParams();

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("userID", "==", `${id.userID}`)
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
        !profileName && setProfileName(e.data().postOwner);
      });
      setMakeProfilePosts(postsArr);
      setReadyProfile(true);
    }
  }, [profilePosts]);

  return (
    <>
      <NavBar />
      <ProfileHeader background={profilePic}>
        <div />
        <span>{profileName}</span>
      </ProfileHeader>

      <PostSection>
        {readyProfile ? (
          <ProfilePosts profilePosts={makeProfilePosts} />
        ) : (
          <Loading />
        )}
      </PostSection>
      <Footer />
    </>
  );
};

export default Profile;

//https://firebase.google.com/docs/auth/admin/manage-users

//useParams creates an object => {displayName: "SavWileyy"}
