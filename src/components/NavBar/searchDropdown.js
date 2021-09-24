import React from "react";
import { SearchDropStyle, SearchHead } from "./styled";

const SearchDrop = (props) => {
  const {criteria} = props; //value from search input field

  return (
    <SearchDropStyle>
      <SearchHead>
        <h4>Recent</h4>
        <span>Clear All</span>
      </SearchHead>
    </SearchDropStyle>
  );
};

export default SearchDrop;

/**i want this to search for user display names
 * 
 * https://stackoverflow.com/questions/47778294/firebase-check-if-user-exists-by-display-name
 * 
 * also search by post messages
*/