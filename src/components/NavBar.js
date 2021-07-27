import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiHome2Fill,
  RiHome2Line,
  RiAddBoxFill,
  RiAddBoxLine,
  RiUser3Fill,
  RiUser3Line,
  RiSettings3Fill,
} from "react-icons/ri";
import {
  IoPaperPlane,
  IoPaperPlaneOutline,
  IoCompass,
  IoCompassOutline,
  IoHeart,
  IoHeartOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

/**
 * Needs props to come into it to say what page we're on and which icons to use.
 * Also need to check if user has image or not.
 */

const NavBar = (props) => {
  const { page } = props;
  const dash = useRef(false);

  useEffect(() => {
    if (page === "dashboard") {
      dash.current = true;
    }
  })

  return (
    <div id="NavBar">
      <div className="inner">
        <h1>Notagram</h1>

        <input type="text" placeholder="Search" />

        <div className="icons">
          <Link to="/dashboard">
            {dash.current ? <RiHome2Fill /> : <RiHome2Line /> }
          </Link>
          <IoPaperPlaneOutline />
          <RiAddBoxLine />
          <IoCompassOutline />
          <IoHeartOutline />
          <RiUser3Line />
        </div>
      </div>
    </div>
  );
};

export default NavBar;


/**
 * ONE:
 * make a useRef for every page and set them to booleans, use ternary ops in jsx
 * 
 * TWO:
 * make a useRef for a single value, use if/else in jsx
 */