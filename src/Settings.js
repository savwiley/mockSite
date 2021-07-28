import React, { useRef } from "react";
import { auth } from "./firebase.js";
import NavBar from "./components/NavBar.js";
import { RiUser3Line } from "react-icons/ri";

const Settings = () => {
  const nameBoo = useRef(false);
  const photoBoo = useRef(false);

  //user profile variables
  const user = auth.currentUser;
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const anonBoo = user.isAnonymous;

  //changes booleans
  if (displayName !== null) {
    nameBoo.current = true;
  }
  if (photoURL !== null) {
    photoBoo.current = true;
  }

  return (
    <>
    <NavBar />

    <div id="settings">
      <div className="topper">
        <div className="setPic">
          {photoBoo.current ? (
            <img className="userPic userSet" src={photoURL}></img>
          ) : (
            <RiUser3Line className="userSet" />
          )}
        </div>
        <div className="setName">
          {nameBoo.current ? displayName : email}
        </div>
      </div>

      <div className="form">
        <div>
          <label>
            Username
          </label>
          <input type="text" id="display"></input>
        </div><div>
          <label for="emailForm">
            Email
          </label>
          <input type="email" id="emailForm"></input>
        </div><div>
          <label for="passForm">
            Password
          </label>
          <input type="password" id="passForm"></input>
        </div><div>
          <input type="button" value="Submit" />
          <input type="button" value="Delete Account" />
        </div>
      </div>
    </div>
    </>
  )
};

export default Settings;