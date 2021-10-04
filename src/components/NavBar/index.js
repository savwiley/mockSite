import React, { useRef, useState, useEffect } from "react";
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
import SearchDrop from "./searchDropdown";
import LikeDropDown from "./likesDropdown";
import DropDown from "./dropdown";
import NewPost from "./newPost";

const NavBar = (props) => {
  const { page } = props;
  const [drop, setDrop] = useState(false);
  const [likeDrop, setLikeDrop] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [likedPosts, setLikedPosts] = useState();
  const [makeLikedPosts, setMakeLikedPosts] = useState();
  const [post, setPost] = useState(false);
  const dash = useRef(false);
  const userPic = useRef(false);

  // pull up random post when using Explore

  // user profile variables
  const user = auth.currentUser;
  const { photoURL, displayName } = user;

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("userLikes", "array-contains", `${displayName}`)
      .orderBy("date", "desc");
    const eachPost = await postRef.get();
    setLikedPosts(eachPost);
  }

  useEffect(() => {
    if (!likedPosts) {
      callAsync();
    } else {
      const postsArr = [];
      likedPosts.forEach((e) => {
        postsArr.push(e.data());
      });
      setMakeLikedPosts(postsArr);
    }
  }, [likedPosts]);

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
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onFocus={() => {
            setSearch(true);
          }}
          onBlur={() => {
            setSearch(false);
            setSearchValue("");
            setSearchCriteria();
          }}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setSearchCriteria(e.target.value);
            e.target.value === "" && setSearchCriteria();
          }}
        />

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
          <button
            onFocus={() => {
              setLikeDrop(true);
            }}
            onBlur={() => {
              setLikeDrop(false);
            }}
            title="Your Liked Posts"
          >
            <IoHeartOutline />
          </button>

          {/* User Icon */}
          <UserButton
            onFocus={() => {
              setDrop(true);
            }}
            onBlur={() => {
              setDrop(false);
            }}
            title="Account"
          >
            {userPic.current ? (
              <UserPic background={photoURL} />
            ) : (
              <RiUser3Line title="It's You!" />
            )}
          </UserButton>

          {/* Dropdowns & Modals */}
          {search && (
            <SearchDrop
              criteria={searchCriteria}
              firebase={firebase}
              clear={setSearchCriteria}
              inputValue={setSearchValue}
            />
          )}
          {likeDrop && (
            <LikeDropDown likedPosts={makeLikedPosts} likeDrop={setLikeDrop} />
          )}
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
