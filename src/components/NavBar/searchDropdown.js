import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchDropStyle, SearchHead, SearchResults } from "./styled";

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
      let searching;
      criteria && (searching = criteria.toLowerCase());
      posts.forEach((e) => {
        const dataMessage = e.data().postMessage.toLowerCase();
        const dataOwner = e.data().postOwner.toLowerCase();
        dataMessage.includes(searching) && postsArr.push(e.data());
        dataOwner.includes(searching) && userArr.push(e.data().postOwner);
      });
      setMakePosts(postsArr);
      setMakeUsers([...new Set(userArr)]);
    }
  }, [criteria, oldValue, posts]);

  return (
    <SearchDropStyle>
      <SearchHead>
        <h4>Recent</h4>
        <span
          onMouseDown={(e) => {
            e.preventDefault();
            clear();
            inputValue("");
          }}
        >
          Clear All
        </span>
      </SearchHead>

      <SearchResults>
        {makeUsers && makeUsers.map((e) => <div key={e}>{e}</div>)}
        {makePosts &&
          makePosts.map((e) => <div key={e.date}>{e.postMessage}</div>)}
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
