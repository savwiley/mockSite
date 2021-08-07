import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase.js";
import { NavBarStyle, NavBarIcons, UserPic, UserButton } from "./styled.js";
import DropDown from "./dropdown.js";
import {
  RiHome2Fill,
  RiHome2Line,
  //RiAddBoxFill,
  RiAddBoxLine,
  RiUser3Line,
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
  const [drop, setDrop] = useState(false);
  const dash = useRef(false);
  const userPic = useRef(false);

  //user profile variables
  const user = auth.currentUser;
  const photoURL = user.photoURL;

  //finds the page
  if (page === "dashboard") {
    dash.current = true;
  }

  //finds the user pic
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
          <RiAddBoxLine />
          <IoCompassOutline />
          <IoHeartOutline />

          <UserButton
            onClick={() => {
              drop ? setDrop(false) : setDrop(true);
            }}
          >
            {userPic.current ? (
              <UserPic src={photoURL} title="It's You!"></UserPic>
            ) : (
              <RiUser3Line title="It's You!" />
            )}
          </UserButton>

          {drop && <DropDown />}
        </NavBarIcons>
      </div>
    </NavBarStyle>
  );
};

export default NavBar;
