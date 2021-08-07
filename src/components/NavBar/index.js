import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase.js";
import {
  RiHome2Fill,
  RiHome2Line,
  //RiAddBoxFill,
  RiAddBoxLine,
  RiUser3Line,
  RiSettings3Fill,
} from "react-icons/ri";
import {
  //IoPaperPlane,
  IoPaperPlaneOutline,
  //IoCompass,
  IoCompassOutline,
  //IoHeart,
  IoHeartOutline,
  //IoBookmarkOutline,
} from "react-icons/io5";

const NavBar = (props) => {
  const { page } = props;
  const dash = useRef(false);
  const userPic = useRef(false);

  //user profile variables
  const user = auth.currentUser;
  const displayName = user.displayName;
  const photoURL = user.photoURL;

  //finds the page
  if (page === "dashboard") {
    dash.current = true;
  }

  //finds the user pic
  if (photoURL !== null) {
    userPic.current = true;
  }

  //clicking on the userpic
  useEffect(() => {
    const userPicDrop = document.querySelector(".userDrop");
    const drop = document.querySelector(".drop");

    userPicDrop.addEventListener("click", () => {
      if (drop.style.display !== "flex") {
        drop.style.display = "flex";
      } else {
        drop.style.display = "none";
      }
    });
  });

  const signOut = () => {
    auth.signOut().then(() => {
      alert("signed out")
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div id="NavBar">
      <div className="inner">
        <h1>Notagram</h1>

        <input type="text" placeholder="Search" />

        <div className="icons">
          <Link to="/dashboard">
            {dash.current ? <RiHome2Fill /> : <RiHome2Line />}
          </Link>
          <IoPaperPlaneOutline />
          <RiAddBoxLine />
          <IoCompassOutline />
          <IoHeartOutline />

          {userPic.current ? (
            <img className="userPic userDrop" src={photoURL} alt="profile"></img>
          ) : (
            <RiUser3Line className="userDrop" />
          )}

          <div className="drop">
            <Link to={`/` + displayName}>
              <RiUser3Line /> Profile
            </Link>
            <Link to="/settings">
              <RiSettings3Fill /> Settings
            </Link>
            <Link onClick={() => {signOut()}} to="/">Log Out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
