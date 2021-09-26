import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchDropStyle, SearchHead, SearchResults } from "./styled";

const SearchDrop = (props) => {
  const { criteria, firebase, clear } = props; //value from search input field
  const [oldValue, setOldValue] = useState("");
  const [posts, setPosts] = useState();
  const [makePosts, setMakePosts] = useState();

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts");
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
      posts.forEach((e) => {
        if (e.data().postMessage.includes(criteria)) {
          postsArr.push(e.data());
        }
      });
      setMakePosts(postsArr);
    }
  }, [criteria, oldValue, posts]);

  return (
    <SearchDropStyle>
      <SearchHead>
        <h4>Recent</h4>
        <span onMouseDown={(e) => {
          e.preventDefault();
          clear();
        }}>Clear All</span>
      </SearchHead>

      <SearchResults>
        {makePosts && makePosts.map(e => (
          <div key={e.date}>
            {e.postMessage}
          </div>
        ))}
      </SearchResults>
    </SearchDropStyle>
  );
};

export default SearchDrop;

SearchDrop.propTypes = {
  criteria: PropTypes.string,
  clear: PropTypes.func,
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

/**i want this to search for user display names
 * 
 * https://stackoverflow.com/questions/47778294/firebase-check-if-user-exists-by-display-name
 * 
 * also search by post messages
*/