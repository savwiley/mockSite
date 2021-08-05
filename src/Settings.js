import React, { useRef, useEffect } from "react";
import firebase, { auth } from "./firebase.js";
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

  useEffect(() => {
    const newName = document.querySelector("#display");
    const uploadImage = document.querySelector("#disImage");
    const newEmail = document.querySelector("#emailForm");
    const newPW = document.querySelector("#passForm");
    const saveChanges = document.querySelector("#saveChanges");

    saveChanges.addEventListener("click", () => {
      //display name
      if (newName.value) {
        user.updateProfile({
          displayName: newName.value,
        }).then(() => {
          alert(`Name changed to ${newName.value}!`);
        }).catch((err) => {
          alert(err);
        })
      }

      //profile image
      if (uploadImage.value) {
        const file = uploadImage.files[0];
        const imgURL = `/profile/${file.name}`;
        
        const photoStore = firebase.storage().ref(imgURL);
        photoStore.put(file);

        photoStore.getDownloadURL().then((url) => {
          user.updateProfile({
            photoURL: url,
          }).then(() => {
            alert("Profile Pic Uploaded!");
          }).catch((err) => {
            alert(err);
          })
        })
      }

      //email
      if (newEmail.value) {
        user.updateProfile({
          email: newEmail.value,
        }).then(() => {
          alert(`Email changed to ${newEmail.value}!`);
        }).catch((err) => {
          alert(err);
        })
      }

      //password
      if (newPW.value) {
        user.updatePassword((
          newPW.value
        )).then(() => {
          alert(`Password changed!`);
        }).catch((err) => {
          alert(err);
        })
      }
    })
  })

  return (
    <>
    <NavBar />

    <div id="settings">
      <div className="topper">
        <div className="setPic">
          {photoBoo.current ? (
            <img className="userPic userSet" src={photoURL} alt="profile"></img>
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
          <label>
            Display Image
          </label>
          <input type="file" id="disImage" accept="image/*" />
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
          <input type="button" value="Save Changes" id="saveChanges" />
          <input type="button" value="Delete Account" id="delBtn" />
        </div>
      </div>
    </div>
    </>
  )
};

export default Settings;


/**TODO
 * - connect other info to be saved
 * - make sure not to resave something that hasn't been edited
 * - remember to rebuild/rehost
 */