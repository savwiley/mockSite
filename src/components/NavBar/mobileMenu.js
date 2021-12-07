import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  //RiHome2Line, dashboard icon
  RiAddBoxLine,
  RiUser3Line,
  RiSettings3Fill,
} from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { auth } from "../firebase";
import NewPost from "./newPost";
import { SideMenu, PostLink } from "./styled";

const MobileMenu = (props) => {
  const { setShown } = props;
  const [post, setPost] = useState(false);
  const user = auth.currentUser;

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        alert("You have signed out.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SideMenu>
      <IoClose
        onClick={() => {
          setShown(false);
        }}
      />

      <Link to="/">
        <h2>Notagram</h2>
      </Link>

      <PostLink
        title="Make A Post!"
        onClick={() => {
          setPost(true);
        }}
      >
        <RiAddBoxLine /> Make A Post!
      </PostLink>

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

      {post && <NewPost setShown={setPost} />}
    </SideMenu>
  );
};

MobileMenu.propTypes = {
  setShown: PropTypes.func,
};

export default MobileMenu;
