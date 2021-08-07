import React, { useRef, useState } from "react";
import firebase, { auth } from "../firebase.js";
import { SettingsStyle, SettingsTop, SettingsPic, Form } from "./styled.js";
import NavBar from "../NavBar";
import { RiUser3Line } from "react-icons/ri";

const Settings = () => {
  const [userName, setUserName] = useState();
  const [image, setImage] = useState();
  const [newEmail, setEmail] = useState();
  const [password, setPassword] = useState();
  const nameBoo = useRef(false);
  const photoBoo = useRef(false);

  //user profile variables
  const user = auth.currentUser;
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  //const anonBoo = user.isAnonymous;

  //changes booleans
  if (displayName !== null) {
    nameBoo.current = true;
  }
  if (photoURL !== null) {
    photoBoo.current = true;
  }

  const saveChanges = () => {
    //user name
    if (userName) {
      user
        .updateProfile({
          displayName: userName,
        })
        .then(() => {
          alert(`Name changed to ${userName}!`);
        })
        .catch((err) => {
          alert(err);
        });
    }

    //profile image
    if (image) {
      const file = image.files[0];
      const imgURL = `/profile/${file.name}`;

      const photoStore = firebase.storage().ref(imgURL);
      photoStore.put(file);

      photoStore.getDownloadURL().then((url) => {
        user
          .updateProfile({
            photoURL: url,
          })
          .then(() => {
            alert("Profile Pic Uploaded!");
          })
          .catch((err) => {
            alert(err);
          });
      });
    }

    //email
    if (newEmail) {
      user
        .updateProfile({
          email: newEmail,
        })
        .then(() => {
          alert(`Email changed to ${newEmail}!`);
        })
        .catch((err) => {
          alert(err);
        });
    }

    //password
    if (password) {
      user
        .updatePassword(password)
        .then(() => {
          alert(`Password changed!`);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <>
      <NavBar />

      <SettingsStyle>
        <SettingsTop>
          <SettingsPic>
            {photoBoo.current ? (
              <img src={photoURL} alt="It's You!"></img>
            ) : (
              <RiUser3Line />
            )}
          </SettingsPic>
          {nameBoo.current ? displayName : email}
        </SettingsTop>

        <Form>
          <div>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label>Display Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              type="button"
              value="Save Changes"
              onClick={() => {
                saveChanges();
              }}
            />
            <input type="button" value="Delete Account" id="delBtn" />
          </div>
        </Form>
      </SettingsStyle>
    </>
  );
};

export default Settings;

/**TODO
 * - remember to rebuild/rehost
 */
