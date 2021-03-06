import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RiUser3Line, RiChat3Line } from "react-icons/ri";
import {
  SearchDropStyle,
  SearchHead,
  SearchResults,
  SearchItem,
} from "./styled";

const SearchDrop = (props) => {
  const { criteria, firebase, clear, inputValue } = props;
  const [oldValue, setOldValue] = useState("");
  const [posts, setPosts] = useState();
  const [makePosts, setMakePosts] = useState();
  const [makeUsers, setMakeUsers] = useState();

  async function callAsync() {
    const postRef = firebase.firestore().collection("posts");
    //.orderBy("date", "desc");
    const eachPost = await postRef.get();
    setPosts(eachPost);
    setOldValue(criteria);
  }

  useEffect(() => {
    if (criteria != oldValue) {
      callAsync();
    } else {
      const postsArr = [];
      const userArr = [];
      const userIDs = [];
      let searching;
      criteria && (searching = criteria.toLowerCase());
      posts.forEach((e) => {
        const dataMessage = e.data().postMessage.toLowerCase();
        const dataOwner = e.data().postOwner.toLowerCase();
        dataMessage.includes(searching) && postsArr.push(e.data());
        if (dataOwner.includes(searching) && userArr.length > 0) {
          userIDs.map((a) => {
            if (!a.includes(e.data().userID)) {
              userArr.push([
                e.data().postOwner,
                e.data().ownerPic,
                e.data().userID,
              ]);
              userIDs.push(e.data().userID);
            }
          });
        } else if (dataOwner.includes(searching)) {
          userArr.push([
            e.data().postOwner,
            e.data().ownerPic,
            e.data().userID,
          ]);
        }
      });
      setMakePosts(postsArr);
      setMakeUsers(userArr);
    }
  }, [criteria, oldValue, posts]);

  return (
    <SearchDropStyle>
      <SearchHead>
        <h4>Recent</h4>
        <span
          onMouseDown={(e) => {
            e.preventDefault();
            clear("");
            inputValue("");
          }}
        >
          Clear All
        </span>
      </SearchHead>

      <SearchResults>
        {makeUsers &&
          makeUsers.map((e) => (
            <Link
              to={`/${e[2]}`}
              title="Profile"
              key={e[2]}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
            >
              <SearchItem image={e[1]}>
                <RiUser3Line className="icon" />
                {e[0]}
              </SearchItem>
            </Link>
          ))}
        {makePosts &&
          makePosts.map((e) => (
            <Link
              to={`/${e.userID}/${e.date.seconds}`}
              title="Post"
              key={e.date}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
            >
              <SearchItem image={e.postPic}>
                <RiChat3Line className="icon" />
                {e.postMessage}
              </SearchItem>
            </Link>
          ))}
      </SearchResults>
    </SearchDropStyle>
  );
};

export default SearchDrop;

SearchDrop.propTypes = {
  criteria: PropTypes.string,
  clear: PropTypes.func,
  inputValue: PropTypes.func,
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
