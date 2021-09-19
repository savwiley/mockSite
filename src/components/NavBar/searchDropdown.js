import React from "react";
import { SearchDropStyle, SearchHead } from "./styled";

const SearchDrop = () => {
  return(
    <SearchDropStyle>
      <SearchHead>
        <h4>Recent</h4>
        <span>Clear All</span>
      </SearchHead>
    </SearchDropStyle>
  )
};

export default SearchDrop