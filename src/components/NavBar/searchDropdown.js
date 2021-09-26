import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchDropStyle, SearchHead, SearchResults } from "./styled";

const SearchDrop = (props) => {
  const { criteria, firebase } = props; //value from search input field
  const [oldValue, setOldValue] = useState("");
  const [posts, setPosts] = useState();
  const [makePosts, setMakePosts] = useState();

  async function callAsync() {
    const postRef = firebase
      .firestore()
      .collection("posts")
      .where("postMessage", "contains", `${criteria}`);
      //.orderBy("date", "desc");
    const eachPost = await postRef.get();
    setPosts(eachPost);
  }

  /**You can't search through firebase by regular means. Recommended to try elasticsearch. */
  //https://www.elastic.co/elasticsearch/
  //https://firebase.googleblog.com/2014/01/queries-part-2-advanced-searches-with.html

  useEffect(() => {
    if (criteria !== oldValue) {
      callAsync();
    } else {
      const postsArr = [];
      posts.forEach((e) => {
        postsArr.push(e.data());
      });
      setMakePosts(postsArr);
      setOldValue(criteria);
    }
  }, [posts, criteria, oldValue]);

  return (
    <SearchDropStyle>
      <SearchHead>
        <h4>Recent</h4>
        <span>Clear All</span>
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
  firebase: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

/**i want this to search for user display names
 * 
 * https://stackoverflow.com/questions/47778294/firebase-check-if-user-exists-by-display-name
 * 
 * also search by post messages
*/