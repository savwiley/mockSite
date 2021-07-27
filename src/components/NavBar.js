import React from "react";

const NavBar = () => {

  return (
    <div id="NavBar">
      <div className="inner">
        <h1>
          Notagram
        </h1>

        <input type="text" placeholder="Search" />

        <div className="icons">icons</div>
      </div>
    </div>
  )
};

export default NavBar;