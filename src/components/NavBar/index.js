import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  RiHome2Fill,
  RiHome2Line,
  // RiAddBoxFill,
  RiAddBoxLine,
  RiUser3Line,
} from "react-icons/ri";
import {
  // IoPaperPlane,
  IoPaperPlaneOutline,
  // IoCompass,
  IoCompassOutline,
  // IoHeart,
  IoHeartOutline,
  // IoBookmarkOutline,
} from "react-icons/io5";
import { auth } from "../firebase";
import { NavBarStyle, NavBarIcons, UserPic, UserButton } from "./styled";
import DropDown from "./dropdown";
import NewPost from "./newPost";

const NavBar = (props) => {
  const { page } = props;
  const [drop, setDrop] = useState(false);
  const [post, setPost] = useState(false);
  const dash = useRef(false);
  const userPic = useRef(false);

  // user profile variables
  const user = auth.currentUser;
  const { photoURL } = user;

  // finds the page
  if (page === "dashboard") {
    dash.current = true;
  }

  // finds the user pic
  if (photoURL !== null) {
    userPic.current = true;
  }

  return (
    <NavBarStyle>
      <div className="inner">
        <h1>Notagram</h1>

        <input type="text" placeholder="Search" />

        <NavBarIcons>
          <Link to="/dashboard" title="Dashboard">
            {dash.current ? <RiHome2Fill /> : <RiHome2Line />}
          </Link>
          <IoPaperPlaneOutline />
          <RiAddBoxLine
            onClick={() => {
              setPost(true);
            }}
            title="Make A Post!"
          />
          <IoCompassOutline />
          <IoHeartOutline />

          <UserButton
            onClick={() => {
              drop ? setDrop(false) : setDrop(true);
            }}
          >
            {userPic.current ? (
              <UserPic src={photoURL} title="It's You!" />
            ) : (
              <RiUser3Line title="It's You!" />
            )}
          </UserButton>

          {drop && <DropDown />}
          {post && <NewPost setShown={setPost} />}
        </NavBarIcons>
      </div>
    </NavBarStyle>
  );
};

NavBar.propTypes = {
  page: PropTypes.string,
}

export default NavBar;
