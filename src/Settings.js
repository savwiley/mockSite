<<<<<<< HEAD
import React, { useRef, useEffect } from "react";
import firebase, { auth } from "./firebase.js";
=======
import React, { useRef } from "react";
import { auth } from "./firebase.js";
>>>>>>> 4ff5c8de1d75ea7d94349e3240d204724138058b
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
<<<<<<< HEAD

  useEffect(() => {
    const uploadImage = document.querySelector("#disImage");
    const saveChanges = document.querySelector("#saveChanges");

    saveChanges.addEventListener("click", () => {
      const file = uploadImage.files[0];
      const imgURL = `/profile/${file.name}`;
      
      const photoStore = firebase.storage().ref(imgURL);
      photoStore.put(file);

      user.updateProfile({
        photoURL: imgURL,
      }).then(() => {
        alert("Done!");
      }).catch((err) => {
        alert(err);
      })
    })

    //need to host on fb to see pic changes
  })
=======
>>>>>>> 4ff5c8de1d75ea7d94349e3240d204724138058b

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
          <input type="text" id="display" value={displayName}></input>
        </div><div>
<<<<<<< HEAD
          <label>
            Display Image
          </label>
          <input type="file" id="disImage" accept="image/*" />
        </div><div>
=======
>>>>>>> 4ff5c8de1d75ea7d94349e3240d204724138058b
          <label for="emailForm">
            Email
          </label>
          <input type="email" id="emailForm" value={email}></input>
        </div><div>
          <label for="passForm">
            Password
          </label>
          <input type="password" id="passForm"></input>
        </div><div>
<<<<<<< HEAD
          <input type="button" value="Save Changes" id="saveChanges" />
=======
          <input type="button" value="Save Changes" />
>>>>>>> 4ff5c8de1d75ea7d94349e3240d204724138058b
          <input type="button" value="Delete Account" id="delBtn" />
        </div>
      </div>
    </div>
    </>
  )
};

export default Settings;