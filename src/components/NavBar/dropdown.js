import React from "react";
import { Link } from "react-router-dom";
import { RiUser3Line, RiSettings3Fill } from "react-icons/ri";
import { auth } from "../firebase";
import { DropDownStyle } from "./styled";

const DropDown = () => {
  const user = auth.currentUser;
  const userID = Date.parse(user.metadata.creationTime);

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
      <Link
        to={`/${userID}`}
        title="Profile"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      >
      {/**if you have no posts, the profile page won't work*/}
      {/**this is the only way to view it if there are no posts*/}
        <RiUser3Line /> Profile
      </Link>
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
