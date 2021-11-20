import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiUser3Line, RiSettings3Fill } from "react-icons/ri";
import firebase, { auth } from "../firebase";
import { DropDownStyle } from "./styled";

const DropDown = () => {
  const [ profilePosts, setProfilePosts ] = useState(null);
  const [ readyLink, setReadyLink ] = useState(false);
  const user = auth.currentUser;

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("userID", "==", `${user.uid}`);
    const eachPost = await postRef.get();
    if (eachPost.length > 0) {
      setProfilePosts(true);
    } else {
      setProfilePosts(false);
    }
  }

  useEffect(() => {
    if (profilePosts === null) {
      callAsync();
    } else {
      profilePosts && setReadyLink(true);
    }
  }, [profilePosts]);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        alert("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DropDownStyle>
      {readyLink &&
        <Link
          to={`/${user.uid}`}
          title="Profile"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          <RiUser3Line /> Profile
        </Link>
      }
      {/**if you have no posts, the profile page won't work*/}
      {/**this is the only way to view it if there are no posts*/}
      <Link
        to="/settings"
        title="Settings"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      >
        <RiSettings3Fill /> Settings
      </Link>
      <Link
        to="/"
        title="Log Out"
        onMouseDown={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Log Out
      </Link>
    </DropDownStyle>
  );
};

export default DropDown;
