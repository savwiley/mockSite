import React from "react";
import { Link } from "react-router-dom";
import { RiUser3Line, RiSettings3Fill } from "react-icons/ri";
import { auth } from "../firebase";
import { DropDownStyle } from "./styled";

const DropDown = () => {
  const user = auth.currentUser;

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        alert("You have signed out.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DropDownStyle>
      <Link
        to={`/${user.uid}`}
        title="Profile"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      >
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
