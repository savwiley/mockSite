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
import firebase, { auth } from "../firebase";
import { NavBarStyle, NavBarIcons, UserPic, UserButton } from "./styled";
import LikeDropDown from "./likesDropdown";
import DropDown from "./dropdown";
import NewPost from "./newPost";

const NavBar = (props) => {
  const { page } = props;
  const [drop, setDrop] = useState(false);
  const [likeDrop, setLikeDrop] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [post, setPost] = useState(false);
  const dash = useRef(false);
  const userPic = useRef(false);

  // user profile variables
  const user = auth.currentUser;
  const { photoURL, displayName } = user;

  async function callAsync() {
    firebase
      .firestore()
      .collection("posts")
      .orderBy("date", "desc")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          if (doc.data().userLikes.includes(displayName)) {
            setLikedPosts([...likedPosts, doc.data()]);
          }
        });
      });
  }

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
        {/* Header */}
        <Link to="/">
          <h1>Notagram</h1>
        </Link>

        {/* Search */}
        <input type="text" placeholder="Search" />

        {/* Icons */}
        <NavBarIcons>
          {/* Home Icon to Dashboard */}
          <Link to="/dashboard" title="Dashboard">
            {dash.current ? <RiHome2Fill /> : <RiHome2Line />}
          </Link>
          {/* DM Icon [NOT IMPLEMENTED] */}
          <IoPaperPlaneOutline />
          {/* Make a Post Icon */}
          <RiAddBoxLine
            onClick={() => {
              setPost(true);
            }}
            title="Make A Post!"
          />
          {/* Explore Icon [NOT IMPLEMENTED] */}
          <IoCompassOutline />
          {/* Likes Dropdown Icon */}
          <IoHeartOutline
            onClick={() => {
              if (likeDrop) {
                setLikeDrop(false);
              } else {
                callAsync();
                setLikeDrop(true);
              }
            }}
          />

          {/* User Icon */}
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

          {/* Dropdowns & Modals */}
          {likeDrop && <LikeDropDown likedPosts={likedPosts} />}
          {drop && <DropDown />}
          {post && <NewPost setShown={setPost} />}
        </NavBarIcons>
      </div>
    </NavBarStyle>
  );
};

NavBar.propTypes = {
  page: PropTypes.string,
};

export default NavBar;
