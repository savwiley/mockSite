import React, { useRef, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { RiUser3Line } from "react-icons/ri";
import firebase, { auth } from "../firebase";
import { SettingsStyle, SettingsTop, SettingsPic, Form } from "./styled";

const Settings = () => {
  const [userName, setUserName] = useState();
  const [image, setImage] = useState();
  const [newEmail, setEmail] = useState();
  const [password, setPassword] = useState();
  const nameBoo = useRef(false);
  const photoBoo = useRef(false);

  // user profile variables
  const user = auth.currentUser;
  const { displayName } = user;
  const { email } = user;
  const { photoURL } = user;
  const oldPass = user.providerData[0].providerId;
  // const anonBoo = user.isAnonymous;

  // changes booleans
  if (displayName !== null) {
    nameBoo.current = true;
  }
  if (photoURL !== null) {
    photoBoo.current = true;
  }

  const saveChanges = () => {
    userName ? null : setUserName(displayName);
    newEmail ? null : setEmail(email);
    password ? null : setPassword(oldPass);
    let photoStore;

    if (image) {
      const imgURL = `/profile/${image.name}`;
      photoStore = firebase.storage().ref(imgURL);
      photoStore.put(image);
    } else {
      photoStore = firebase.storage().ref().child(`/profile/${photoURL}`);
    }

    photoStore.getDownloadURL().then((url) => {
      user
        .updateProfile({
          displayName: userName,
          email: newEmail,
          photoURL: url,
        })
        .updatePassword(password)
        .then(() => {
          alert(`Settings changed!`);
          window.location.reload();
        })
        .catch((err) => {
          alert("Something went wrong!");
          console.log(err);
        })
      })
    };


      /*
    // user name
    if (userName) {
      user
        .updateProfile({
          displayName: userName,
        })
        .then(() => {
          alert(`Name changed to ${userName}!`);
        })
        .catch((err) => {
          alert("Something went wrong!");
          console.log(err);
        });
    }

    // profile image
    if (image) {
      const imgURL = `/profile/${image.name}`;

      const photoStore = firebase.storage().ref(imgURL);
      photoStore.put(image);

      photoStore.getDownloadURL().then((url) => {
        user
          .updateProfile({
            photoURL: url,
          })
          .then(() => {
            alert("Image uploaded!");
          })
          .catch((err) => {
            alert("Something went wrong!");
            console.log(err);
          });
      });
    }

    // email
    if (newEmail) {
      user
        .updateProfile({
          email: newEmail,
        })
        .then(() => {
          alert(`Email changed to ${newEmail}!`);
        })
        .catch((err) => {
          alert("Something went wrong!");
          console.log(err);
        });
    }

    // password
    if (password) {
      user
        .updatePassword(password)
        .then(() => {
          alert("Password changed!");
        })
        .catch((err) => {
          alert("Something went wrong!");
          console.log(err);
        });
    }
  };*/

  const deleteAccount = () => {
    user
      .delete()
      .then(() => {
        alert("Account deleted.");
        window.location.reload();
        //will send to home screen via Route.js
      })
      .catch((err) => {
        alert("Something went wrong!");
        console.log(err);
      });
  };

  return (
    <>
      <NavBar />

      <SettingsStyle>
        <SettingsTop>
          <SettingsPic picture={photoURL}>
            {photoBoo.current ? <div title="It's You!" /> : <RiUser3Line />}
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
            />
          </div>
          <div>
            <label>Display Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
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
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="Save Changes"
              onClick={() => {
                saveChanges();
              }}
            />
            <input
              type="button"
              value="Delete Account"
              id="delBtn"
              onClick={() => {
                if (
                  confirm(
                    "Are you sure you want to delete your Notagram account?"
                  )
                ) {
                  deleteAccount();
                }
              }}
            />
          </div>
        </Form>
      </SettingsStyle>

      <Footer />
    </>
  );
};

export default Settings;

/** TODO
 * - remember to rebuild/rehost
 */
